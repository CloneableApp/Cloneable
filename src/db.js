import { app } from 'electron';
const path = require('path');
const db = require('better-sqlite3')(path.join(app.getPath('userData'), "database.db"));

export const createTables = () => {
    try {
        db.prepare("CREATE TABLE settings (type TEXT, value TEXT, project_id TEXT DEFAULT NULL, UNIQUE(type, project_id))").run();

        db.prepare("CREATE TABLE projects \
            (id STRING PRIMARY KEY, \
                name TEXT, \
                url TEXT, \
                status INTEGER, \
                clone_data TEXT, \
                created INTEGER, \
                base_path TEXT, \
                started INTEGER, \
                completed INTEGER, \
                error TEXT, \
                no_directories INTEGER \
            )"
        ).run();
    } catch (err) {
    
    }
}

export const saveSettings = (settingsKey, settings, projectId) => {
    db.prepare(
      "INSERT OR IGNORE INTO settings (type, value, project_id) VALUES (?, ?, ?)"
    ).run(settingsKey, JSON.stringify(settings), projectId);
    db.prepare(
      "UPDATE settings SET value=(?) WHERE type=(?) AND project_id=(?)"
    ).run(JSON.stringify(settings), settingsKey, projectId);
}

export const getSettings = (type, projectId, callback) => {
    if (!projectId) {
      projectId = -1;
    }
    const row = db.prepare("SELECT * FROM settings WHERE type=(?) AND project_id=(?)").get(type, projectId);
    let val = {};
    if (row) {
      val = JSON.parse(row.value);
      if (type === "auth") {
        val.cookiesFile = "";
      }
    }
    return val;
}

export const saveNewProject = (id, data) => {
    db.prepare(
    "INSERT INTO projects (id, name, url, status, clone_data, created, base_path, no_directories) \
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    ).run(id, data.name, data.url, 0, "", Date.now(), "", 0);
}

export const deleteProject = (id) => {
    db.prepare("DELETE FROM projects WHERE id=(?)").run(id);
}

export const saveProjectCloneData = (id, data) => {
    db.prepare(
    "UPDATE projects SET clone_data=(?) WHERE id=(?)",
    ).run(data, id);
}

export const saveProjectInfo = (id, data) => {
    db.prepare(
        "UPDATE projects SET name=(?), url=(?) WHERE id=(?)",
    ).run(data.name, data.url, id);
}

export const saveProjectStatus = (id, status) => {
    db.prepare(
        "UPDATE projects SET status=(?) WHERE id=(?)",
    ).run(status, id);
}

export const getProject = (id) => {
    return db.prepare("SELECT * FROM projects WHERE id=(?)").get(id);
}

export const getProjects = () => {
    return db.prepare("SELECT * FROM projects ORDER BY started DESC").all();
}

export const getProjectStatusCount = (num) => {
    return db.prepare("SELECT count(*) AS count FROM projects WHERE status=(?)").get(num);
}

export const getRecentProjects = () => {
    return db.prepare("SELECT * FROM projects ORDER BY created DESC LIMIT 5").all();
}

export const startProjectClone = (id, project) => {
    db.prepare(
        "UPDATE projects SET started=(?), status=(?), error=(?), \
        clone_data=(?), base_path=(?), no_directories=(?) WHERE id=(?)",
    ).run(Date.now(), project.status, project.error, project.clone_data, project.base_path, project.no_directories, id);
}

export const cancelClone = (id) => {
    db.prepare(
        "UPDATE projects SET status=(?), completed=(?), error=(?) WHERE id=(?)",
    ).run(3, Date.now(), null, id);
}

export const setProjectError = (id, err) => {
    db.prepare(
        "UPDATE projects SET completed=(?), status=(?), error=(?) WHERE id=(?)",
    ).run(Date.now(), -1, err.toString(), id);
}

export const setProjectCompleted = (id) => {
    db.prepare(
        "UPDATE projects SET completed=(?), status=(?) WHERE id=(?)",
    ).run(Date.now(), 2, id);
}