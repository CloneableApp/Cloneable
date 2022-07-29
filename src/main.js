import path from 'path';
import url from 'url';
import { app, Menu, ipcMain, shell, dialog, powerSaveBlocker } from "electron";
import appMenuTemplate from "./menu/app_menu_template";
import editMenuTemplate from "./menu/edit_menu_template";
import devMenuTemplate from "./menu/dev_menu_template";
import createWindow from "./helpers/window";
import {autoUpdater} from "electron-updater";
import { v4 as uuidv4 } from 'uuid';

const db = require('better-sqlite3')(path.join(app.getPath('userData'), "database.db"));

let powerSaveBlockerIds = {};

let mainWindow = null;

const unhandled = require('electron-unhandled');
unhandled();

const Store = require('electron-store');
const store = new Store();

// Special module holding environment variables which you declared
// in config/env_xxx.json file.
import env from "env";
import { getBasePath } from "./utils/Utils";
import { existsSync } from 'fs';
import { cancelClone, createTables, deleteProject, getProject, getProjects, getProjectStatusCount, getRecentProjects, getSettings, saveNewProject, saveProjectCloneData, saveProjectInfo, saveProjectStatus, saveSettings, startProjectClone } from './db';

// Save userData in separate folders for each environment.
// Thanks to this you can use production and development versions of the app
// on same machine like those are two separate apps.
if (env.name !== "production") {
  const userDataPath = app.getPath("userData");
  app.setPath("userData", `${userDataPath} (${env.name})`);
}

const setApplicationMenu = () => {
  const menus = [appMenuTemplate, editMenuTemplate];
  if (env.name !== "production") {
    menus.push(devMenuTemplate);
  }
  Menu.setApplicationMenu(Menu.buildFromTemplate(menus));
};

const settingsTypes = [
  "storage",
  "crawl",
  "filters",
  "browser",
  "auth",
  "advanced",
];

// We can communicate with our window (the renderer process) via messages.
const initIpc = () => {
  ipcMain.on("get-downloads-folder", (event) => {
    event.reply("downloads-folder", app.getPath("downloads"));
  });

  ipcMain.on("save-settings-tab", (event, index) => {
    store.set("settings-tab", index);
  });
  ipcMain.on("get-settings-tab", (event, index) => {
    event.reply("settings-tab", store.get("settings-tab"));
  });

  ipcMain.on("save-settings", (event, settingsKey, settings, projectId) => {
    if (!projectId) {
      projectId = -1;
    }
    saveSettings(settingsKey, settings, projectId);
  });
  ipcMain.on("get-settings", (event, type, projectId) => {
    let s = getSettings(type, projectId);
    event.reply("settings-" + type, s);
  });

  ipcMain.on("save-new-project", (event, data) => {
    let id = uuidv4();

    saveNewProject(id, data);

    for (let i = 0; i < settingsTypes.length; i++) {
      let s = getSettings(settingsTypes[i], null);
      saveSettings(settingsTypes[i], s, id);
    }

    event.reply("saved-new-project", id);
  });

  ipcMain.on("delete-project", (event, id) => {
    deleteProject(id);
    event.reply("deleted-project", id);
  });

  ipcMain.on("save-project-clone-data", (event, id, data) => {
    saveProjectCloneData(id, data);
    event.reply("saved-project-clone-data", id);
  });

  ipcMain.on("save-project-info", (event, id, data) => {
    saveProjectInfo(id, data);
    event.reply("saved-project-info", id);
  });

  ipcMain.on("save-project-status", (event, id, status) => {
    saveProjectStatus(id, status);
    event.reply("saved-project-status", id);
  });

  ipcMain.on("get-project", (event, id) => {
    const row = getProject(id);
    event.reply("project", row);
  });

  ipcMain.on("get-projects", (event) => {
    const rows = getProjects();
    event.reply("projects", rows);
  });

  ipcMain.on("get-projects-stats", (event) => {
    let statNums = [
      -1, 0, 1, 2, 3
    ];
    let stats = {
      "-1": 0,
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "total": 0,
    };
    for (let i = 0; i < statNums.length; i++) {
      const row = getProjectStatusCount(statNums[i]);
      stats[statNums[i].toString()] = row.count;
      stats["total"] += row.count;
    }
    event.reply("projects-stats", stats);
  });

  ipcMain.on("get-recent-projects", (event) => {
    const rows = getRecentProjects();
    event.reply("recent-projects", rows);
  });

  let timeElapsedIntervalIds = {};
  let wgetPids = {};

  ipcMain.on("start-clone", (event, id) => {
    powerSaveBlockerIds[id] = powerSaveBlocker.start('prevent-app-suspension');

    let project = getProject(id);

    if (!project) {
      return;
    }

    project.started = new Date();
    project.status = 1;
    project.error = null;
    project.clone_data = null;

    mainWindow.webContents.send("time-elapsed", project);
    timeElapsedIntervalIds[id] = setInterval(() => {
      mainWindow.webContents.send("time-elapsed", project);
    }, 1000);

    let options = {};
    for (let i = 0; i < settingsTypes.length; i++) {
      let s = getSettings(settingsTypes[i], id) || {};
      options = Object.assign(options, s);
    }

    project.base_path = getBasePath(project, options);
    project.no_directories = options.no_directories;

    const wget = require('./wget');
    wgetPids[id] = wget(mainWindow, store, project, options, timeElapsedIntervalIds[id], powerSaveBlockerIds[id]);

    startProjectClone(id, project);

    event.reply("started-clone", project);
  });

  ipcMain.on("open-folder", (event, folderPath) => {
    if (existsSync(folderPath)) {
      shell.openPath(folderPath);
    }
    else {
      dialog.showErrorBox('Not found', 'This folder was not found. Perhaps it was renamed, moved, or deleted.');
    }
  });

  ipcMain.on("cancel-clone", (event, id) => {
    if (timeElapsedIntervalIds.hasOwnProperty(id)) {
      clearInterval(timeElapsedIntervalIds[id]);
    }

    if (powerSaveBlockerIds.hasOwnProperty(id)) {
      powerSaveBlocker.stop(powerSaveBlockerIds[id]);
    }

    if (wgetPids.hasOwnProperty(id)) {
      var kill = require('tree-kill');
      kill(wgetPids[id]);
    }

    cancelClone(id);

    const project = getProject(id);

    event.reply("canceled-clone", project);
  });

  ipcMain.on("select-folder", (event) => {
    // If the platform is 'win32' or 'Linux'
    if (process.platform !== 'darwin') {
      // Resolves to a Promise<Object>
      dialog.showOpenDialog({
          title: 'Select the Folder',
          defaultPath: app.getPath('downloads'),
          buttonLabel: 'Select',
          // Restricting the user to only Text Files.
          filters: [],
          // Specifying the File Selector Property
          properties: ['openDirectory']
      }).then(file => {
          // Stating whether dialog operation was
          // cancelled or not.
          if (!file.canceled) {
            // Updating the GLOBAL filepath variable
            // to user-selected file.
            event.reply('selected-folder', file.filePaths[0].toString());
            return;
          }
        }).catch(err => {
          console.log(err)
      });
    }
    else {
      // If the platform is 'darwin' (macOS)
      dialog.showOpenDialog({
          title: 'Select the Folder',
          defaultPath: app.getPath('downloads'),
          buttonLabel: 'Select',
          filters: [],
          // Specifying the File Selector and Directory
          // Selector Property In macOS
          properties: ['openDirectory']
      }).then(file => {
          if (!file.canceled) {
            event.reply('selected-folder', file.filePaths[0].toString());
          } 
      }).catch(err => {
          console.log(err);
      });
    }
  });
  ipcMain.on("select-file", (event) => {
    // If the platform is 'win32' or 'Linux'
    if (process.platform !== 'darwin') {
      // Resolves to a Promise<Object>
      dialog.showOpenDialog({
          title: 'Select the File',
          defaultPath: app.getPath('downloads'),
          buttonLabel: 'Select',
          // Restricting the user to only Text Files.
          filters: [],
          // Specifying the File Selector Property
          properties: ['openFile']
      }).then(file => {
          // Stating whether dialog operation was
          // cancelled or not.
          if (!file.canceled) {
            // Updating the GLOBAL filepath variable
            // to user-selected file.
            event.reply('selected-file', file.filePaths[0].toString());
            return;
          }
        }).catch(err => {
          console.log(err)
      });
    }
    else {
      // If the platform is 'darwin' (macOS)
      dialog.showOpenDialog({
          title: 'Select the Folder',
          defaultPath: app.getPath('downloads'),
          buttonLabel: 'Select',
          filters: [],
          // Specifying the File Selector and Directory
          // Selector Property In macOS
          properties: ['openDirectory', 'openFile']
      }).then(file => {
          if (!file.canceled) {
            event.reply('selected-file', file.filePaths[0].toString());
          } 
      }).catch(err => {
          console.log(err);
      });
    }
  });
};

app.on("ready", () => {
  //autoUpdater.checkForUpdatesAndNotify();

  createTables();

  setApplicationMenu();
  initIpc();

  mainWindow = createWindow("main", {
    width: 1000,
    height: 600,
    webPreferences: {
      // Two properties below are here for demo purposes, and are
      // security hazard. Make sure you know what you're doing
      // in your production app.
      nodeIntegration: true,
      contextIsolation: false,
      // Spectron needs access to remote module
      enableRemoteModule: env.name === "test"
    }
  });

  mainWindow.setBackgroundColor('#f1f5f9');

  mainWindow.maximize();

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "app.html"),
      protocol: "file:",
      slashes: true
    })
  );
});

app.on("window-all-closed", () => {
  for (const id in powerSaveBlockerIds) {
    if (powerSaveBlockerIds.hasOwnProperty(id)) {
      powerSaveBlocker.stop(powerSaveBlockerIds[id]);
    }
  }
  db.close();
  app.quit();
});
