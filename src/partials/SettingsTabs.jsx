import React, { useState, useRef, useEffect } from 'react';
import Form from "@rjsf/bootstrap-4";
import { ipcRenderer } from "electron";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ipcMain } from 'electron/main';

const os = require('os');

const isMac = os.platform() === "darwin";
const isWindows = os.platform() === "win32";
const isLinux = os.platform() === "linux";

function SettingsTabs(props) {
    function getFileNamesModeDefault() {
        if (isMac || isLinux) {
            return "unix";
        }
        if (isWindows) {
            return "windows";
        }
    }

    function saveTabAndGetSettings(index) {
        saveTab(index);
        getSettings();
    }
    function saveTab(index) {
        if (props.projectId) {
            return;
        }
        ipcRenderer.send("save-settings-tab", index);
    }
    function saveSettings() {
        const saveButtons = document.querySelectorAll('button[type="submit"]');
        for (let i = 0; i < saveButtons.length; i++) {
            saveButtons[i].click();
        }
    }
    function settingsTabListener(event, index) {
        try {                
            document.querySelectorAll('.react-tabs__tab:nth-child(' + (index+1) + ')')[0].click();
        } catch (e) {
        }
        try {                
            document.querySelectorAll('.react-tabs')[0].style.display = 'block';
        } catch (e) {
        }
    }
    function getSettingsTab() {
        if (props.projectId) {
            document.querySelectorAll('.react-tabs')[0].style.display = 'block';
            return;
        }
        ipcRenderer.send("get-settings-tab");
        ipcRenderer.on("settings-tab", settingsTabListener);
    }
    const [storageForm, setStorageForm] = useState('');
    const [crawlForm, setCrawlForm] = useState('');
    const [filtersForm, setFiltersForm] = useState('');
    const [browserForm, setBrowserForm] = useState('');
    const [authForm, setAuthForm] = useState('');
    const [advancedForm, setAdvancedForm] = useState('');
    const [storageSettings, setStorageSettings] = useState(null);
    const [authSettings, setAuthSettings] = useState(null);
    const [downloadsFolder, setDownloadsFolder] = useState("");
    
    function selectNewFolder() {
        ipcRenderer.send("select-folder");
        ipcRenderer.on("selected-folder", newFolderListener);
    }

    function selectNewCookiesFile() {
        ipcRenderer.send("select-file");
        ipcRenderer.on("selected-file", newCookiesFileListener);
    }

    function newFolderListener(event, folder) {
        let copySettings = JSON.parse(JSON.stringify(storageSettings || {}));
        copySettings.basePath = folder;
        ipcRenderer.send("save-settings", "storage", copySettings, props.projectId);
        setStorageSettings(copySettings);
        setStorageForm(
            (
                <div>
                    <Form schema={storageSchema}
                        uiSchema={uiSchema}
                        formData={copySettings}
                        onBlur={saveSettings}
                        onSubmit={
                            ({formData}, e) => {
                                ipcRenderer.send("save-settings", "storage", formData, props.projectId)                                
                            }
                        }
                        className="rjsf bg-white shadow-lg rounded-sm border border-slate-200"
                    />
                    <button onClick={selectNewFolder} className="btn btn-info mb-4 new-folder">Select new folder</button>
                </div>
            )
        );
    }

    function storageListener(event, settings) {
        setStorageSettings(settings);
        setStorageForm(
            (
                <div>
                    <Form schema={storageSchema}
                        uiSchema={uiSchema}
                        formData={settings}
                        onBlur={saveSettings}
                        onSubmit={
                            ({formData}, e) => {
                                ipcRenderer.send("save-settings", "storage", formData, props.projectId)                                
                            }
                        }
                        className="rjsf bg-white shadow-lg rounded-sm border border-slate-200"
                    />
                    <button onClick={selectNewFolder} className="btn btn-info mb-4 new-folder">Select new folder</button>
                </div>
            )
        );
    }

    function crawlListener(event, settings) {
        setCrawlForm(
            (
                <div>
                    <Form schema={crawlSchema}
                        uiSchema={uiSchema}
                        formData={settings}
                        onBlur={saveSettings}
                        onSubmit={
                            ({formData}, e) => {
                                ipcRenderer.send("save-settings", "crawl", formData, props.projectId)                               
                            }
                        }
                        className="rjsf bg-white shadow-lg rounded-sm border border-slate-200"
                    />
                </div>
            )
        );
    }

    function filtersListener(event, settings) {
        setFiltersForm(
            (
                <div>
                    <Form schema={filtersSchema}
                        uiSchema={uiSchema}
                        formData={settings}
                        onBlur={saveSettings}
                        onSubmit={
                            ({formData}, e) => {
                                ipcRenderer.send("save-settings", "filters", formData, props.projectId)                               
                            }
                        }
                        className="rjsf rjsf-filters bg-white shadow-lg rounded-sm border border-slate-200"
                    />
                </div>
            )
        );
    }

    function browserListener(event, settings) {
        setBrowserForm(
            (
                <div>
                    <Form schema={browserSchema}
                        uiSchema={uiSchema}
                        formData={settings}
                        onBlur={saveSettings}
                        onSubmit={
                            ({formData}, e) => {
                                ipcRenderer.send("save-settings", "browser", formData, props.projectId)                                
                            }
                        }
                        className="rjsf bg-white shadow-lg rounded-sm border border-slate-200"
                    />
                </div>
            )
        );
    }

    function newCookiesFileListener(event, file) {
        let copySettings = JSON.parse(JSON.stringify(authSettings || {}));
        copySettings.cookiesFilePath = file;
        ipcRenderer.send("save-settings", "auth", copySettings, props.projectId);
        setAuthSettings(copySettings);
        setAuthForm(
            (
                <div>
                    <Form schema={authSchema}
                        uiSchema={uiSchema}
                        formData={copySettings}
                        onBlur={saveSettings}
                        onSubmit={
                            ({formData}, e) => {
                                ipcRenderer.send("save-settings", "auth", formData, props.projectId)                                
                            }
                        }
                        className="rjsf bg-white shadow-lg rounded-sm border border-slate-200"
                    />
                    <button onClick={selectNewCookiesFile} className="btn btn-info mb-4 new-folder">Select new file</button>
                </div>
            )
        );
    }

    function authListener(event, settings) {
        setAuthSettings(settings);
        setAuthForm(
            (
                <div>
                    <Form schema={authSchema}
                        uiSchema={uiSchema}
                        formData={settings}
                        onBlur={saveSettings}
                        onSubmit={
                            ({formData}, e) => {
                                ipcRenderer.send("save-settings", "auth", formData, props.projectId)                                
                            }
                        }
                        className="rjsf bg-white shadow-lg rounded-sm border border-slate-200"
                    />
                    <button onClick={selectNewCookiesFile} className="btn btn-info mb-4 new-folder">Select new file</button>
                </div>
            )
        );
    }

    function advancedListener(event, settings) {
        setAdvancedForm(
            (
                <div>
                    <Form schema={advancedSchema}
                        uiSchema={uiSchema}
                        formData={settings}
                        onBlur={saveSettings}
                        onSubmit={
                            ({formData}, e) => {
                                ipcRenderer.send("save-settings", "advanced", formData, props.projectId)                                
                            }
                        }
                        className="rjsf bg-white shadow-lg rounded-sm border border-slate-200"
                    />
                </div>
            )
        );
    }
    
    function getSettings() {
        ipcRenderer.send("get-settings", "storage", props.projectId);   
        ipcRenderer.on("settings-storage", storageListener);

        ipcRenderer.send("get-settings", "crawl", props.projectId);   
        ipcRenderer.on("settings-crawl", crawlListener);

        ipcRenderer.send("get-settings", "filters", props.projectId);   
        ipcRenderer.on("settings-filters", filtersListener);

        ipcRenderer.send("get-settings", "browser", props.projectId);   
        ipcRenderer.on("settings-browser", browserListener);

        ipcRenderer.send("get-settings", "auth", props.projectId);   
        ipcRenderer.on("settings-auth", authListener);

        ipcRenderer.send("get-settings", "advanced", props.projectId);   
        ipcRenderer.on("settings-advanced", advancedListener);
    }
    useEffect(() => {
        getSettings();
        getSettingsTab();
        ipcRenderer.send("get-downloads-folder");
        function downloadsFolderListener(event, value) {
            setDownloadsFolder(value);
        }
        ipcRenderer.on("downloads-folder", downloadsFolderListener);

        return(() => {
            ipcRenderer.removeListener("settings-storage", storageListener);
            ipcRenderer.removeListener("settings-crawl", crawlListener);
            ipcRenderer.removeListener("settings-filters", filtersListener);
            ipcRenderer.removeListener("settings-browser", browserListener);
            ipcRenderer.removeListener("settings-auth", authListener);
            ipcRenderer.removeListener("settings-advanced", advancedListener);

            ipcRenderer.removeListener("settings-tab", settingsTabListener);

            ipcRenderer.removeListener("selected-folder", newFolderListener);

            ipcRenderer.removeListener("downloads-folder", downloadsFolderListener);
        });
    }, []);

    const uiSchema = {
        "ui:submitButtonOptions": {
            "submitText": "Save",
        },
        acceptFilters: {
            "ui:widget": "textarea"
        },
        rejectFilters: {
            "ui:widget": "textarea"
        },
        includeDirs: {
            "ui:widget": "textarea"
        },
        excludeDirs: {
            "ui:widget": "textarea"
        },
        domains: {
            "ui:widget": "textarea"
        },
        headers: {
            "ui:widget": "textarea"
        },
    };

    const storageSchema = {
        title: "",
        type: "object",
        required: [
        ],
        properties: {
            basePath: {
                type: "string",
                title: "Storage base folder",
                description: props.projectId ? "The base folder to store this download's folders in" : "The base folder to store your download folders in",
                default: "" //downloadsFolder
            },
        }
    };

    const crawlSchema = {
        title: "",
        type: "object",
        required: [
        ],
        properties: {
            defaultPageName: {
                type: "string",
                title: "Default page name",
                description: "Default file name for pages without a name",
                default: "index.html"
            },
            noRecursive: {
                type: "boolean",
                title: "Don't follow recursive links",
                description: "",
                default: false
            },
            recursiveDepthLevel: {
                type: "number",
                title: "Recursive maximum depth level",
                description: "-1 for infinite depth",
                default: -1
            },
            noDirectories: {
                type: "boolean",
                title: "Do not create a hierarchy of directories when retrieving recursively",
                description: "",
                default: false
            },
            numRetries: {
                type: "number",
                title: "# of retries",
                description: "0 for infinite retrying",
                default: 20
            },
            timeout: {
                type: "object",
                title: "Timeouts (in seconds)",
                description: "0 to disable altogether",
                properties: {
                    dnsTimeout: {
                      type: "number",
                      title: "DNS timeout",
                      default: 0,
                    },
                    connectTimeout: {
                      type: "number",
                      title: "Connect timeout",
                      default: 0
                    },
                    readTimeout: {
                      type: "number",
                      title: "Read timeout",
                      default: 900
                    }
                }
            },
            limitDownloadSpeed: {
                type: "string",
                title: "Limit download speed",
                description: "Amount may be expressed in bytes, kilobytes with the k suffix, or megabytes with the m suffix. For example, 20k",
                default: ""
            },
            waitTime: {
                type: "number",
                title: "Wait time",
                description: "Number of seconds to wait between each page request.",
                default: 1
            },
            randomizeWaitTime: {
                type: "boolean",
                title: "Randomize wait time",
                description: "Slightly randomize the wait time between requests. Helps prevent detection on some servers",
                default: false
            },
            waitRetryTime: {
                type: "number",
                title: "Wait time for retries",
                description: "Number of seconds to wait between each page request for retries (failures)",
                default: 10
            },
            downloadQuota: {
                type: "string",
                title: "Maximum download quota",
                description: "Site downloads will stop after they reach this total size. Amount may be expressed in bytes, kilobytes with the k suffix, or megabytes with the m suffix. For example, 20k. Use 0 or inf for unlimited download quota",
                default: "inf"
            },
            maxRedirects: {
                type: "number",
                title: "Maximum redirects",
                description: "Maximum number of redirections to follow for any given request",
                default: 20,
            },
        }
    };

    const filtersSchema = {
        title: "",
        type: "object",
        required: [
        ],
        properties: {
            domains: {
                type: "string",
                title: "Extra URLs / Domains",
                description: "Enter each url or domain on a new line. This is useful if the site you are cloning has media files hosted on a separate domain, for example.",
                default: "",
            },
            acceptFilters: {
                type: "string",
                title: "Accept filters",
                description: "File name suffixes or patterns to accept (include). Enter each item on a new line. Regex wildcards (*, ?, [, ]) are supported, but the presence of one will make this filter be treated as a pattern, rather than a suffix.",
                default: "",
            },
            rejectFilters: {
                type: "string",
                title: "Reject filters",
                description: "File name suffixes or patterns to reject (exclude). Enter each item on a new line. Regex wildcards (*, ?, [, ]) are supported, but the presence of one will make this filter be treated as a pattern, rather than a suffix.",
                default: "",
            },
            includeDirs: {
                type: "string",
                title: "Include directories",
                description: "Directories you wish to follow when downloading. Enter each item on a new line. May contain wildcards. Leave blank for all.",
                default: ""
            },
            excludeDirs: {
                type: "string",
                title: "Exclude directories",
                description: "Directories you wish to not follow when downloading. Enter each item on a new line. May contain wildcards.",
                default: ""
            },
            ignoreFiltersCase: {
                type: "boolean",
                title: "Ignore case in accept/reject filters",
                description: "",
                default: false,
            },
        }
    };

    const browserSchema = {
        title: "",
        type: "object",
        required: [
        ],
        properties: {
            referer: {
                type: "string",
                title: "Referer",
                description: "URL to send as a Referer HTTP header",
                default: "",
            },
            userAgent: {
                type: "string",
                title: "User Agent",
                description: "User Agent to send as a User-Agent HTTP header",
                default: "",
            },
            headers: {
                type: "string",
                title: "Headers",
                description: "Headers to send with each request. Enter each header on a new line",
                default: "",
            }
        }
    };

    const authSchema = {
        title: "",
        type: "object",
        required: [
        ],
        properties: {
            httpUser: {
                type: "string",
                title: "HTTP Username",
                description: "For HTTP server authentication",
                default: "",
            },
            httpPassword: {
                type: "string",
                title: "HTTP Username",
                description: "For HTTP server authentication",
                default: "",
            },
            disableCookies: {
                type: "boolean",
                title: "Disable cookies",
                description: "",
                default: false,
            },
            saveCookies: {
                type: "boolean",
                title: "Save cookies",
                description: "",
                default: false,
            },
            saveSessionCookies: {
                type: "boolean",
                title: "Keep session cookies",
                description: "",
                default: false,
            },
            cookiesFilePath: {
                type: "string",
                title: "Cookies file path",
                description: "Send cookies with each request, from a file",
                default: ""
            }
        }
    };

    const advancedSchema = {
        title: "",
        type: "object",
        required: [
        ],
        properties: {
            bindAddress: {
                type: "string",
                title: "Bind Address",
                description: "Bind to address (hostname or IP) on the local machine",
                default: ""
            },
            fileNamesMode: {
                type: "string",
                title: "File names mode",
                description: "",
                enum: ["unix", "windows"],
                default: getFileNamesModeDefault()
            },
            fileNamesForce: {
                type: "string",
                title: "Force file name format",
                description: "",
                enum: ["none", "lowercase", "uppercase"],
                default: "none"
            },
            fileNamesNoControl: {
                type: "boolean",
                title: "Turn off escaping control characters in file names",
                description: "",
                default: false
            },
            fileNamesAscii: {
                type: "boolean",
                title: "Escape any bytes outside of ASCII range in file names",
                description: "",
                default: false
            },
            noDNSCache: {
                type: "boolean",
                title: "Disable DNS lookup cache",
                description: "Bind to address (hostname or IP) on the local machine",
                default: false
            },
            retryConnectionRefused: {
                type: "boolean",
                title: "Retry when connection refused",
                description: "",
                default: false
            },
            noHttpKeepAlive: {
                type: "boolean",
                title: "Disable HTTP keep-alive",
                description: "",
                default: false
            },
            noCache: {
                type: "boolean",
                title: "Disable server-side cache",
                description: "",
                default: false
            },
            ignoreContentLength: {
                type: "boolean",
                title: "Ignore content length",
                description: "",
                default: false
            },
            noSSL: {
                type: "boolean",
                title: "Don't check SSL certificates",
                description: "",
                default: false
            },
            ignoreRobots: {
                type: "boolean",
                title: "Ignore robots.txt",
                description: "",
                default: false
            },
            keepIntegrityAttributes: {
                type: "boolean",
                title: "Keep integrity attributes (not recommended)",
                description: "Enabling this may cause site assets to not load properly in some situations",
                default: false
            },
            wgetPath: {
                type: "string",
                title: "Custom path to wget binary",
                description: "Use your own version of wget instead of the bundled version",
                default: ""
            },
        }
    };

  return (
    <div>
        <Tabs
            style={{display: "none"}}
            onSelect={saveTabAndGetSettings}
        >
            <TabList>
                <Tab>Storage</Tab>
                <Tab>Filters</Tab>
                <Tab>Crawl</Tab>
                <Tab>Browser ID</Tab>
                <Tab>Auth/Cookies</Tab>
                <Tab>Advanced</Tab>
            </TabList>

            {/* Storage */}
            <TabPanel>
                {storageForm}
            </TabPanel>

            {/* Filters */}
            <TabPanel>
                {filtersForm}
            </TabPanel>

            {/* Crawl */}
            <TabPanel>
                {crawlForm}
            </TabPanel>

            {/* Browser ID */}
            <TabPanel>
                {browserForm}
            </TabPanel>
            
            {/* Auth\Cookies */}
            <TabPanel>
                {authForm}
            </TabPanel>

            {/* Advanced */}
            <TabPanel>
                {advancedForm}
            </TabPanel>
        </Tabs>
    </div>
  );
}

export default SettingsTabs;