/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/Utils.js":
/*!****************************!*\
  !*** ./src/utils/Utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatValue": () => (/* binding */ formatValue),
/* harmony export */   "getBasePath": () => (/* binding */ getBasePath),
/* harmony export */   "getFolderFromProject": () => (/* binding */ getFolderFromProject),
/* harmony export */   "getTimeElapsedFunc": () => (/* binding */ getTimeElapsedFunc),
/* harmony export */   "hexToRGB": () => (/* binding */ hexToRGB),
/* harmony export */   "tailwindConfig": () => (/* binding */ tailwindConfig)
/* harmony export */ });
/* harmony import */ var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tailwindcss/resolveConfig */ "tailwindcss/resolveConfig");
/* harmony import */ var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var parse_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse-url */ "parse-url");
/* harmony import */ var parse_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse_url__WEBPACK_IMPORTED_MODULE_2__);


const moment = __webpack_require__(/*! moment */ "moment");




var sanitize = __webpack_require__(/*! sanitize-filename */ "sanitize-filename");

const tailwindConfig = () => {
  // Tailwind config
  return tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_0___default()('./src/css/tailwind.config.js');
};
const hexToRGB = h => {
  let r = 0;
  let g = 0;
  let b = 0;

  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }

  return `${+r},${+g},${+b}`;
};
const formatValue = value => Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 3,
  notation: 'compact'
}).format(value);
const getTimeElapsedFunc = project => {
  let endDate = moment();

  if (project.status > 1) {
    endDate = moment(project.completed);
  }

  let timeElapsed = '';
  let unit = 'secs';
  timeElapsed = endDate.diff(project.started, 'seconds');

  if (timeElapsed === 1) {
    unit = 'sec';
  }

  if (timeElapsed > 59) {
    unit = 'mins';
    timeElapsed = endDate.diff(project.started, 'minutes');

    if (timeElapsed === 1) {
      unit = 'min';
    }

    if (timeElapsed > 59) {
      unit = 'hours';
      timeElapsed = endDate.diff(project.started, 'hours');

      if (timeElapsed === 1) {
        unit = 'hour';
      }
    }
  }

  timeElapsed = timeElapsed + ' ' + unit;
  return timeElapsed;
};
const getBasePath = (project, options) => {
  let name = sanitize(project.name) || 'default';
  let path = electron__WEBPACK_IMPORTED_MODULE_1__.app.getPath('userData') + '/downloads/' + name;

  if (options.basePath) {
    path = options.basePath + '/' + name;
  }

  return path;
};
const getFolderFromProject = project => {
  let p = null;

  if (project && project.base_path && project.url) {
    p = project.base_path;

    if (!project.no_directories) {
      p += '/';
      let parsed = parse_url__WEBPACK_IMPORTED_MODULE_2___default()(project.url);
      p += parsed.resource || parsed.pathname;
    }
  }

  return p;
};

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _pages_Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Dashboard */ "./src/pages/Dashboard.jsx");
/* harmony import */ var _pages_Downloads__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Downloads */ "./src/pages/Downloads.jsx");
/* harmony import */ var _pages_Download__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Download */ "./src/pages/Download.jsx");
/* harmony import */ var _pages_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Settings */ "./src/pages/Settings.jsx");
/* harmony import */ var _pages_NewDownload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/NewDownload */ "./src/pages/NewDownload.jsx");
/* harmony import */ var _pages_Help__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Help */ "./src/pages/Help.jsx");


 // Import pages








const unhandled = __webpack_require__(/*! electron-unhandled */ "electron-unhandled");

unhandled();

function App() {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({
      top: 0
    });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    index: true,
    path: "/",
    exact: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Dashboard__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    index: true,
    path: "/downloads",
    exact: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Downloads__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    index: true,
    path: "/downloads-filter/:filterId",
    exact: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Downloads__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    index: true,
    path: "/downloads/:id",
    exact: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Download__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    index: true,
    path: "/settings",
    exact: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Settings__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    index: true,
    path: "/start",
    exact: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_NewDownload__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    index: true,
    path: "/start/:id",
    exact: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_NewDownload__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    index: true,
    path: "/help",
    exact: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Help__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/pages/Dashboard.jsx":
/*!*********************************!*\
  !*** ./src/pages/Dashboard.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/Sidebar */ "./src/partials/Sidebar.jsx");
/* harmony import */ var _partials_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/Header */ "./src/partials/Header.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_GetStatusBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/GetStatusBadge */ "./src/utils/GetStatusBadge.jsx");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.js");








function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let [projectsTrs, setProjectsTrs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  function recentProjectsListener(event, projects) {
    setProjectsTrs(projects.map((project, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: "tr-" + index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-slate-800"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: "/downloads/" + project.id
    }, project.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: ""
    }, project.url)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: () => {
        let p = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_6__.getFolderFromProject)(project);

        if (p) {
          electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.send("open-folder", p);
        }
      },
      className: project.status === 2 ? "text-center open-folder-button btn bg-purple-700 hover:bg-purple-800 text-white" : "hidden"
    }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: project.status !== 2 ? "text-center open-folder-button btn bg-purple-700 hover:bg-purple-800 text-white" : "hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: "/downloads/" + project.id
    }, "Details"))))));
  }

  function loadRecentProjects() {
    electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.send("get-recent-projects");
    electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.on("recent-projects", recentProjectsListener);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadRecentProjects();
    return () => {
      electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.removeListener("recent-projects", recentProjectsListener);
    };
  }, []);
  let [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  function statsListener(event, stats) {
    setStats(stats);
  }

  function loadStats() {
    electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.send("get-projects-stats");
    electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.on("projects-stats", statsListener);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadStats();
    return () => {
      electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.removeListener("projects-stats", statsListener);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex h-screen overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_partials_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sidebarOpen: sidebarOpen,
    setSidebarOpen: setSidebarOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_partials_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sidebarOpen: sidebarOpen,
    setSidebarOpen: setSidebarOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sm:flex sm:justify-between sm:items-center mb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn bg-purple-700 hover:bg-purple-800 text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-4 h-4 fill-current opacity-50 shrink-0 float-left-important",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ml-2"
  }, "Start new Clone"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-12 gap-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dashboard-card flex flex-col col-span-full xs:col-span-12 sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-5 pt-5 pb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-semibold text-slate-800 mb-8"
  }, "Clone Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table-auto w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", {
    className: "text-xs uppercase text-slate-400 bg-slate-50 rounded-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: "p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "font-semibold text-left"
  }, "Status")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: "p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "font-semibold text-left"
  }, "Number")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
    className: "text-sm font-medium divide-y divide-slate-100"
  }, [0, 1, 2, 3, -1].map((val, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: "tr-" + val
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-slate-800"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: "/downloads-filter/" + val
    }, (0,_utils_GetStatusBadge__WEBPACK_IMPORTED_MODULE_4__["default"])(val)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-4"
    }, stats && stats[val.toString()] ? stats[val.toString()] : "0"));
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dashboard-card flex flex-col col-span-full xs:col-span-12 sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-5 pt-5 pb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-semibold text-slate-800 mb-8"
  }, "Recent Clones", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "float-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "text-center open-folder-button btn bg-purple-700 hover:bg-purple-800 text-white ml-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/downloads/"
  }, "View All \u2192")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: projectsTrs && projectsTrs.length === 0 ? "hidden" : "overflow-x-auto",
    style: {
      clear: "both"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table-auto w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", {
    className: "text-xs uppercase text-slate-400 bg-slate-50 rounded-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: "p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "font-semibold text-left"
  }, "Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: "p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "font-semibold text-left"
  }, "URL")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: "p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "font-semibold text-left"
  }, "Actions")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
    className: "text-sm font-medium divide-y divide-slate-100"
  }, projectsTrs))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: projectsTrs && projectsTrs.length === 0 ? "block" : "hidden"
  }, "It looks like you don't have any Clones yet.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/start"
  }, "Start one here"), ", and it will show up in this block."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col col-span-full xs:col-span-12 rounded-sm bg-white shadow-lg rounded-sm border border-slate-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative bg-white p-4 sm:p-6 rounded-sm overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-2xl md:text-3xl text-slate-800 font-bold mb-1"
  }, "Need help? Check out the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/help"
  }, "Help Center"), ".")))))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./src/pages/Download.jsx":
/*!********************************!*\
  !*** ./src/pages/Download.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/Sidebar */ "./src/partials/Sidebar.jsx");
/* harmony import */ var _partials_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/Header */ "./src/partials/Header.jsx");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_GetStatusBadge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/GetStatusBadge */ "./src/utils/GetStatusBadge.jsx");
/* harmony import */ var parse_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! parse-url */ "parse-url");
/* harmony import */ var parse_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(parse_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.js");





const moment = __webpack_require__(/*! moment */ "moment");






function Download(props) {
  const [sidebarOpen, setSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [project, setProject] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [projectRender, setProjectRender] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading..."));
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)();

  function getProjectUrl(project) {
    if (!project) {
      return '';
    }

    let parsed = parse_url__WEBPACK_IMPORTED_MODULE_6___default()(project.url);
    return parsed.resource || parsed.pathname;
  }

  function projectListener(event, project) {
    setProjectRender( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
      className: "px-5 py-4 border-b border-slate-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
      className: "font-semibold text-slate-800 text-2xl"
    }, project.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "float-right btn bg-purple-700 hover:bg-purple-800 text-white"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      to: "/start/" + project.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "ml-2"
    }, "View Clone \u2192"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "p-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "overflow-x-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "table-auto w-full"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", {
      className: "text-xs uppercase text-slate-400 bg-slate-50 rounded-sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "font-semibold text-left"
    }, "Field")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "font-semibold text-left"
    }, "Value")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
      className: "text-sm font-medium divide-y divide-slate-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-slate-800"
    }, "Status")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, (0,_utils_GetStatusBadge__WEBPACK_IMPORTED_MODULE_5__["default"])(project.status))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      className: project && project.status === 2 ? "" : "hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-slate-800"
    }, "Open")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: () => {
        let p = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_7__.getFolderFromProject)(project);

        if (p) {
          electron__WEBPACK_IMPORTED_MODULE_3__.ipcRenderer.send("open-folder", p);
        }
      },
      className: project.status === 2 ? "text-center open-folder-button btn bg-purple-700 hover:bg-purple-800 text-white" : "hidden"
    }, "Open")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-slate-800"
    }, "Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: ""
    }, project.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-slate-800"
    }, "URL")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: ""
    }, project.url))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      className: project && project.status === 2 ? "" : "hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-slate-800"
    }, "Download path")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: ""
    }, project && project.base_path ? project.base_path : '', "/", project ? getProjectUrl(project) : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      className: project && project.status === 2 ? "" : "hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-slate-800"
    }, "Started")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: ""
    }, project.started ? moment(project.started).format('MMMM Do YYYY, h:mma') : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      className: project && project.status === 2 ? "" : "hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-slate-800"
    }, "Completed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: ""
    }, project.completed ? moment(project.completed).format('MMMM Do YYYY, h:mma') : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      className: project && project.status === 2 ? "" : "hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-slate-800"
    }, "Total time")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: ""
    }, project ? (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_7__.getTimeElapsedFunc)(project) : '')))))))));
  }

  function loadProject() {
    if (params && params.id) {
      electron__WEBPACK_IMPORTED_MODULE_3__.ipcRenderer.send("get-project", params.id);
      electron__WEBPACK_IMPORTED_MODULE_3__.ipcRenderer.on("project", projectListener);
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadProject();
    return () => {
      electron__WEBPACK_IMPORTED_MODULE_3__.ipcRenderer.removeListener("project", projectListener);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex h-screen overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_partials_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sidebarOpen: sidebarOpen,
    setSidebarOpen: setSidebarOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_partials_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sidebarOpen: sidebarOpen,
    setSidebarOpen: setSidebarOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sm:flex sm:justify-between sm:items-center mb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn bg-purple-700 hover:bg-purple-800 text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/downloads"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ml-2"
  }, "\u2190 Back to All Clones"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-12 gap-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-full bg-white shadow-lg rounded-sm border border-slate-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, projectRender))))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Download);

/***/ }),

/***/ "./src/pages/Downloads.jsx":
/*!*********************************!*\
  !*** ./src/pages/Downloads.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/Sidebar */ "./src/partials/Sidebar.jsx");
/* harmony import */ var _partials_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/Header */ "./src/partials/Header.jsx");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_GetStatusBadge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/GetStatusBadge */ "./src/utils/GetStatusBadge.jsx");
/* harmony import */ var parse_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! parse-url */ "parse-url");
/* harmony import */ var parse_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(parse_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.js");









function Downloads() {
  const [sidebarOpen, setSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)();
  let [statusFilters, setStatusFilters] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(params.filterId ? [Number.parseInt(params.filterId)] : []);
  let [statusFiltersEls, setStatusFiltersEls] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([0, 1, 2, 3, -1].map((val, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: 'filter-' + val,
      onClick: () => {
        toggleStatus(val);
      },
      className: "status-filter"
    }, (0,_utils_GetStatusBadge__WEBPACK_IMPORTED_MODULE_5__["default"])(val, 'large'));
  }));
  let [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  let [lastSearchValue, setLastSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  let [allProjects, setAllProjects] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  let [filteredProjects, setFilteredProjects] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  let [projectsLi, setProjectsLi] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Loading..."));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    electron__WEBPACK_IMPORTED_MODULE_3__.ipcRenderer.on("deleted-project", loadProjects);
    return () => {
      electron__WEBPACK_IMPORTED_MODULE_3__.ipcRenderer.removeListener("deleted-project", loadProjects);
    };
  });

  function projectsListener(event, projects) {
    setAllProjects(projects);
  }

  function setProjectsLiFunc(projects) {
    setProjectsLi(projects.map(project => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: project.id,
      className: "flex px-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "grow flex items-center border-b border-slate-100 text-sm py-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "grow flex justify-between"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      to: "/downloads/" + project.id,
      className: "self-center hover:text-purple-800 text-2xl"
    }, (0,_utils_GetStatusBadge__WEBPACK_IMPORTED_MODULE_5__["default"])(project.status), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, project.name), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "download-info"
    }, "URL: ", project.url)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "shrink-0 ml-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: () => {
        let p = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_7__.getFolderFromProject)(project);

        if (p) {
          electron__WEBPACK_IMPORTED_MODULE_3__.ipcRenderer.send("open-folder", p);
        }
      },
      className: project.status === 2 ? "text-center open-folder-button btn bg-purple-700 hover:bg-purple-800 text-white" : "hidden"
    }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "text-center open-folder-button btn bg-purple-700 hover:bg-purple-800 text-white ml-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      to: "/start/" + project.id
    }, "View Clone")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "font-medium text-indigo-500 hover:text-indigo-600 ml-4",
      href: "#",
      onClick: e => {
        e.preventDefault();
        e.stopPropagation();
        electron__WEBPACK_IMPORTED_MODULE_3__.ipcRenderer.send("delete-project", project.id);
      }
    }, "\u2716")))))));
  }

  function loadProjects() {
    electron__WEBPACK_IMPORTED_MODULE_3__.ipcRenderer.send("get-projects");
    electron__WEBPACK_IMPORTED_MODULE_3__.ipcRenderer.on("projects", projectsListener);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadProjects();
    return () => {
      electron__WEBPACK_IMPORTED_MODULE_3__.ipcRenderer.removeListener("projects", projectsListener);
    };
  }, []);

  function toggleStatus(val) {
    let s = statusFilters;

    if (typeof val !== 'undefined') {
      if (statusFilters.indexOf(val) === -1) {
        s.push(val);
        setStatusFilters(s);
      } else {
        const index = statusFilters.indexOf(val);

        if (index > -1) {
          s.splice(index, 1);
          setStatusFilters(s);
        }
      }
    }

    if (s.length > 0) {
      let p = allProjects.filter(val => {
        if (val && typeof val.status !== 'undefined' && s.indexOf(val.status) === -1) {
          return false;
        }

        return true;
      });
      setFilteredProjects(p);
    } else {
      setFilteredProjects(allProjects);
    }

    setStatusFiltersElFunc(s);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    toggleStatus();
  }, [allProjects]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (lastSearchValue.length > 0) {
      let p = filteredProjects.filter(val => {
        if (val && typeof val.name !== 'undefined' && val.name.toLowerCase().indexOf(lastSearchValue.toLowerCase()) !== -1) {
          return true;
        }

        if (val && typeof val.url !== 'undefined' && val.url.toLowerCase().indexOf(lastSearchValue.toLowerCase()) !== -1) {
          return true;
        }

        return false;
      });
      setProjectsLiFunc(p);
    } else {
      setProjectsLiFunc(filteredProjects);
    }
  }, [lastSearchValue, filteredProjects]);

  function handleSearchChange(event) {
    let search = event.target.value.trim();
    setLastSearchValue(search);
  }

  function setStatusFiltersElFunc(arr) {
    setStatusFiltersEls([0, 1, 2, 3, -1].map((val, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: 'filter-' + val,
        onClick: () => {
          toggleStatus(val);
        },
        className: arr.indexOf(val) === -1 ? "status-filter" : "status-filter active"
      }, (0,_utils_GetStatusBadge__WEBPACK_IMPORTED_MODULE_5__["default"])(val, 'large'));
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex h-screen overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_partials_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sidebarOpen: sidebarOpen,
    setSidebarOpen: setSidebarOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_partials_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sidebarOpen: sidebarOpen,
    setSidebarOpen: setSidebarOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sm:flex sm:justify-between sm:items-center mb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn bg-purple-700 hover:bg-purple-800 text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-4 h-4 fill-current opacity-50 shrink-0 float-left-important",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ml-2"
  }, "Start new Clone"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-12 gap-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col col-span-full xs:col-span-12 sm:col-span-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-2xl md:text-3xl text-slate-800 font-bold mb-4"
  }, "Filters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "status-filters"
  }, statusFiltersEls)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col col-span-full xs:col-span-12 sm:col-span-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-2xl md:text-3xl text-slate-800 font-bold mb-1"
  }, "Search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "",
    onChange: handleSearchChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-12 gap-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-full bg-white shadow-lg rounded-sm border border-slate-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "px-5 py-4 border-b border-slate-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Clones")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "my-1"
  }, projectsLi)))))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Downloads);

/***/ }),

/***/ "./src/pages/Help.jsx":
/*!****************************!*\
  !*** ./src/pages/Help.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/Sidebar */ "./src/partials/Sidebar.jsx");
/* harmony import */ var _partials_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/Header */ "./src/partials/Header.jsx");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-accessible-accordion */ "react-accessible-accordion");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);






function Help() {
  const [sidebarOpen, setSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex h-screen overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_partials_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sidebarOpen: sidebarOpen,
    setSidebarOpen: setSidebarOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_partials_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sidebarOpen: sidebarOpen,
    setSidebarOpen: setSidebarOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-center text-2xl md:text-3xl text-slate-800 font-bold mb-1"
  }, "Help Center"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mb-4 text-center"
  }, "If you have a question that's not answered here, don't hestitate to contact us at ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "mailto:cloneableapp@gmail.com"
  }, "cloneableapp@gmail.com"), " or interact with us on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/CloneableApp/Cloneable",
    target: "_blank"
  }, "GitHub"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    id: "general",
    className: "mt-4 mb-6 text-2xl font-extrabold tracking-tight text-center text-slate-800 lg:mb-8 lg:text-3xl dark:text-white mb-4"
  }, "General Questions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.Accordion, {
    allowMultipleExpanded: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemHeading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemButton, null, "What about [insert missing feature]?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "If Cloneable is missing a feature that you want, don't hestitate to contact us by emailing us at ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "mailto:cloneableapp@gmail.com"
  }, "cloneableapp@gmail.com"), " or contacting us on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/CloneableApp/Cloneable",
    _target: "_blank"
  }, "GitHub"), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "We try to make the software as flexible and useful as possible."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemHeading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemButton, null, "Who made Cloneable?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "The founder of Cloneable is web developer who loves making useful tools. Email me at ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "mailto:cloneableapp@gmail.com"
  }, "cloneableapp@gmail.com"), " if you want to chat.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    id: "filters",
    className: "mt-4 mb-6 text-2xl font-extrabold tracking-tight text-center text-slate-800 lg:mb-8 lg:text-3xl dark:text-white mb-4"
  }, "Filters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.Accordion, {
    allowMultipleExpanded: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemHeading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemButton, null, "How do the filter settings work?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "The filters are a configurable way to control how a website is crawled.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "There are a few different kinds of filters. See the questions below for individual help with each one."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemHeading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemButton, null, "How does the \"Extra URLs / Domains\" filter setting work?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "By default, Cloneable will only crawl the domain of the main URL you give it. But sometimes you'll want to allow Cloneable to crawl other domains, too. For example, if a website hosts its media files (images, videos) on a different domain, you might want to add that domain to this setting so that you can download those media files, too."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemHeading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemButton, null, "How does the \"Accept filters\" filter setting work?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "This setting has two different modes, depending on if you include a Regex wildcard character (*, ?, [, ]) or not.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "If you don't include a wildcard character, this setting will act as a list of suffixes to accept in the crawl. For example, if you set this to \"png\", the crawl will only download files ending in \"png\".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "If you do include a Regex wildcard character, this setting will act as a list of patterns to match against the filename (not just a suffix). For example, if you set this to \"*mortgage*\", the crawl will only download files with \"mortgage\" in the filename."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemHeading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemButton, null, "How does the \"Reject filters\" filter setting work?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "This setting has two different modes, depending on if you include a Regex wildcard character (*, ?, [, ]) or not.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "If you don't include a wildcard character, this setting will act as a list of suffixes to reject in the crawl. For example, if you set this to \"png\", the crawl will not download files ending in \"png\".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "If you do include a Regex wildcard character, this setting will act as a list of patterns to match against the filename (not just a suffix). For example, if you set this to \"*mortgage*\", the crawl will not download files with \"mortgage\" in the filename."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemHeading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemButton, null, "How does the \"Include directories\" filter setting work?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "While \"Accept filters\" and \"Reject filters\" work on filenames, this setting works on directory names. For example, in the URL https://example.com/one/index.html, \"one\" is a directory name while \"index.html\" is a filename.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "If left blank, the crawl will follow all directories (except the ones in \"Exclude directories\" setting). But if you provide a value for this setting, the crawl will only follow directories in the given list.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "For example, if you set this to \"one\", all of the pages under https://example.com/one/ will be crawled, but not any pages under https://example.com/two/ or https://example.com/three/ etc."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemHeading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemButton, null, "How does the \"Exclude directories\" filter setting work?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "While \"Accept filters\" and \"Reject filters\" work on filenames, this setting works on directory names. For example, in the URL https://example.com/one/index.html, \"one\" is a directory name while \"index.html\" is a filename.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "If you provide a value for this setting, the crawl will not follow directories in the given list.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    id: "errors",
    className: "mt-4 mb-6 text-2xl font-extrabold tracking-tight text-center text-slate-800 lg:mb-8 lg:text-3xl dark:text-white mb-4"
  }, "Errors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.Accordion, {
    allowMultipleExpanded: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemHeading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemButton, null, "What does \"Error: spawn wget ENOENT\" mean?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "It means the bundled version of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontFamily: 'monospace'
    }
  }, "wget"), " does not work on your system. Please install ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontFamily: 'monospace'
    }
  }, "wget"), " separately, and set the path to the binary in your Clone settings under the Advanced tab."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemHeading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemButton, null, "What does this error code mean?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Here are a list of common error codes:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "1 - Generic error code. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "2 - Parse error \u2014 for instance, when parsing options.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "3 - File I/O error. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "4 - Network failure. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "5 - SSL verification failure. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "6 - Username/password authentication failure. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "7 - Protocol errors. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "8 - Server issued an error response. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemHeading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemButton, null, "I got a different error than the above.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Please contact us at ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "mailto:cloneableapp@gmail.com"
  }, "cloneableapp@gmail.com"), " with details and we will try to help. Please include the error message and the \"Detailed Logs\" from the Clone, and any other info you think may be helpful.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Or open an issue on our ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/CloneableApp/Cloneable",
    target: "_blank"
  }, "GitHub repo"), ".")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    id: "cookies",
    className: "mt-4 mb-6 text-2xl font-extrabold tracking-tight text-center text-slate-800 lg:mb-8 lg:text-3xl dark:text-white mb-4"
  }, "Cookies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.Accordion, {
    allowMultipleExpanded: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemHeading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemButton, null, "What format should the \"Cookies file path\" file be in?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Cloneable expects the file to be in the Netscape cookies format. There are some free tools online for generation and conversion of cookies form your browser to this format."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemHeading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemButton, null, "If I enable \"Save cookies\" and/or \"Keep session cookies\", where are they stored?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Your cookies file will be stored in a file called cookies.txt in the root of the chosen working directory of the Clone.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    id: "credit",
    className: "mt-4 mb-6 text-2xl font-extrabold tracking-tight text-center text-slate-800 lg:mb-8 lg:text-3xl dark:text-white mb-4"
  }, "Credits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.Accordion, {
    allowMultipleExpanded: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemHeading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemButton, null, "Icon8 credit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionItemPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    target: "_blank",
    href: "https://icons8.com/icon/19036/double-down"
  }, "Double Down"), " icon by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    target: "_blank",
    href: "https://icons8.com"
  }, "Icons8")))))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Help);

/***/ }),

/***/ "./src/pages/NewDownload.jsx":
/*!***********************************!*\
  !*** ./src/pages/NewDownload.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/Sidebar */ "./src/partials/Sidebar.jsx");
/* harmony import */ var _partials_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/Header */ "./src/partials/Header.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _partials_SettingsTabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../partials/SettingsTabs */ "./src/partials/SettingsTabs.jsx");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_GetStatusBadge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/GetStatusBadge */ "./src/utils/GetStatusBadge.jsx");
/* harmony import */ var parse_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! parse-url */ "parse-url");
/* harmony import */ var parse_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(parse_url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.js");










const moment = __webpack_require__(/*! moment */ "moment");

function NewDownload(props) {
  const [sidebarOpen, setSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)();
  const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [projectNameInputValue, setProjectNameInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [projectURLInputValue, setProjectURLInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [projectId, setProjectId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(params.id ? params.id : props.id ? props.id : '');
  const [project, setProject] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [timeElapsed, setTimeElapsed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [cloneData, setCloneData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function projectListener(event, project) {
      setProjectNameInputValue(project.name);
      setProjectURLInputValue(project.url);
      setProject(project);

      if (project.clone_data) {
        setCloneData(project.clone_data);
      }

      if (project.status > 0 && step === 0) {
        setStep(4);
      }
    }

    function timeElapsedListener(event, project) {
      setTimeElapsedFunc(project);
    }

    if (params.id) {
      if (!project) {
        electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.send("get-project", params.id);
        electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.on("project", projectListener);
      }

      electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.on("time-elapsed", timeElapsedListener);
    }

    return () => {
      electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.removeListener("project", projectListener);
      electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.removeListener("time-elapsed", timeElapsedListener);
    };
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (step === 4) {
      function timeElapsedListener(event, project) {
        setTimeElapsedFunc(project);
      }

      electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.on("time-elapsed", timeElapsedListener);
      return () => {
        electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.removeListener("time-elapsed", timeElapsedListener);
      };
    }
  }, [step]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function cloneFinishedListener(event, project) {
      setProject(project);
      electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.send("save-project-clone-data", project.id, cloneData);
    }

    electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.on("clone-finished", cloneFinishedListener);
    return () => {
      electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.removeListener("clone-finished", cloneFinishedListener);
    };
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function cloneDataListener(event, projectId, data) {
      if (project && projectId !== project.id) {
        return;
      }

      if (cloneData) {
        setCloneData(cloneData + "\r\n" + data);
      } else {
        setCloneData(data);
      }
    }

    electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.on("clone-data", cloneDataListener);
    return () => {
      electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.removeListener("clone-data", cloneDataListener);
    };
  });

  function setTimeElapsedFunc(project) {
    setTimeElapsed((0,_utils_Utils__WEBPACK_IMPORTED_MODULE_8__.getTimeElapsedFunc)(project));
  }

  let stepRendered = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null);

  function getProjectUrl() {
    if (!project) {
      return '';
    }

    let parsed = parse_url__WEBPACK_IMPORTED_MODULE_7___default()(project.url);
    return parsed.resource || parsed.pathname;
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      try {
        document.getElementById('next-step-button').click();
      } catch (err) {}
    }
  }

  if (step === 1 || step === 0) {
    stepRendered = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "bg-white shadow-lg rounded-sm border border-slate-200 px-4 py-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      className: "text-2xl md:text-3xl text-slate-800 font-bold mb-8"
    }, "1. Clone info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      id: "projectName",
      className: "ml-4 mb-4",
      placeholder: "",
      onChange: e => setProjectNameInputValue(e.target.value),
      defaultValue: projectNameInputValue,
      required: true,
      onKeyPress: handleKeyPress
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "pb-30px font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
    }, "This is a helpful name to identify this Clone. It will also be used as the folder name to store the Clone under.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Website address (URL): "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      id: "projectURL",
      className: "ml-4 mb-4",
      placeholder: "",
      onChange: e => setProjectURLInputValue(e.target.value),
      defaultValue: projectURLInputValue,
      required: true,
      onKeyPress: handleKeyPress
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "pb-100px font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
    }, "This is the full URL of the website to clone (like ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("em", null, "https://example.com"), " or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("em", null, "https://en.wikipedia.org/wiki/Dog"), ")."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      disabled: projectNameInputValue && projectNameInputValue.trim() && projectURLInputValue && projectURLInputValue.trim() ? false : true,
      onClick: () => {
        if (!projectId) {
          electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.send("save-new-project", {
            name: projectNameInputValue,
            url: projectURLInputValue
          });
          electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.on("saved-new-project", (event, projectId) => {
            setProjectId(projectId);
            setStep(2);
          });
        } else {
          electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.send("save-project-info", projectId, {
            name: projectNameInputValue,
            url: projectURLInputValue
          });
          electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.on("saved-project-info", (event, id) => {
            setStep(2);
          });
        }
      },
      id: "next-step-button",
      className: "next-step-button btn bg-purple-700 hover:bg-purple-800 text-white"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: ""
    }, "Settings \u2192")));
  } else if (step === 2) {
    stepRendered = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "bg-white shadow-lg rounded-sm border border-slate-200 px-4 py-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      className: "text-2xl md:text-3xl text-slate-800 font-bold mb-8"
    }, "2. Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "pb-30px font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
    }, "Adjust the settings for this Clone. (You can always adjust these defaults on the global ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: "/settings"
    }, "Settings page"), ")."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-center pb-100px"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_partials_SettingsTabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
      projectId: projectId
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: () => {
        setStep(1);
      },
      className: "previous-step-button btn bg-purple-700 hover:bg-purple-800 text-white"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: ""
    }, "\u2190 Clone Info")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: () => {
        if (!project || project.status === 0) {
          electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.send("start-clone", projectId);
          electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.on("started-clone", (event, project) => {
            setProject(project);
            setStep(4);
          });
        } else {
          setStep(4);
        }
      },
      className: "next-step-button btn bg-purple-700 hover:bg-purple-800 text-white"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: ""
    }, project && project.status === 2 ? 'View Clone →' : '🚀 Clone')));
  } else if (step === 3) {
    stepRendered = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "bg-white shadow-lg rounded-sm border border-slate-200 px-4 py-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      className: "text-2xl md:text-3xl text-slate-800 font-bold mb-8"
    }, "3. Start Clone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "pb-100px font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
    }, "When ready, start the Cloning process. Progress will show here."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: () => {
        setStep(2);
      },
      className: "previous-step-button btn bg-purple-700 hover:bg-purple-800 text-white"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: ""
    }, "\u2190 Settings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: () => {
        if (!project || project.status === 0) {
          electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.send("start-clone", projectId);
          electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.on("started-clone", (event, project) => {
            setProject(project);
            setStep(4);
          });
        } else {
          setStep(4);
        }
      },
      className: "next-step-button btn bg-purple-700 hover:bg-purple-800 text-white"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: ""
    }, !project || project.status === 0 ? '🚀 Clone' : 'View Clone →')));
  } else if (step === 4) {
    stepRendered = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "bg-white shadow-lg rounded-sm border border-slate-200 px-4 py-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      className: "text-2xl md:text-3xl text-slate-800 font-bold mb-8"
    }, "3. Clone ", project && project.name ? project.name : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-center pb-100px"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "overflow-x-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "table-auto w-full"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", {
      className: "text-xs uppercase text-slate-400 bg-slate-50 rounded-sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "font-semibold text-center"
    }, "Field")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "font-semibold text-center"
    }, "Value")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
      className: "text-sm font-medium divide-y divide-slate-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-slate-800"
    }, "Status")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, project ? (0,_utils_GetStatusBadge__WEBPACK_IMPORTED_MODULE_6__["default"])(project.status) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-slate-800"
    }, "Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: ""
    }, project ? project.name : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-slate-800"
    }, "Base URL")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: ""
    }, project ? project.url : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-slate-800"
    }, "Started")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: ""
    }, project ? project.started ? moment(project.started).format('MMMM Do YYYY, h:mma') : '' : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      className: project && project.status === 2 ? "" : "hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-slate-800"
    }, "Completed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: ""
    }, project ? project.completed ? moment(project.completed).format('MMMM Do YYYY, h:mma') : '' : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      className: project && project.status === 2 ? "hidden" : ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-slate-800"
    }, "Total time")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: ""
    }, timeElapsed))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      className: project && project.status === 2 ? "" : "hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-slate-800"
    }, "Total time")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: ""
    }, project ? (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_8__.getTimeElapsedFunc)(project) : '')))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: project && project.error ? 'block mb-4' : 'hidden'
    }, (0,_utils_GetStatusBadge__WEBPACK_IMPORTED_MODULE_6__["default"])(-1), " ", project && project.error ? project.error : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      className: project && project.status === 2 ? "text-3xl text-slate-800 font-bold mb-1" : "hidden"
    }, "Download finished"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: project && project.status === 2 ? "clone-ready-text mb-10" : "hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mb-4"
    }, "The site is downloaded to your local filesystem at ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "clone-path"
    }, project && project.base_path ? project.base_path : '', project && !project.no_directories ? '/' + (project ? getProjectUrl() : '') : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: () => {
        let p = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_8__.getFolderFromProject)(project);

        if (p) {
          electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.send("open-folder", p);
        }
      },
      className: project.status === 2 ? "text-center open-folder-button btn bg-purple-700 hover:bg-purple-800 text-white" : "hidden"
    }, "Open")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      className: cloneData ? "text-xl text-slate-800 font-bold mb-1" : "hidden"
    }, "Detailed Logs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", {
      className: cloneData ? "clone-logs" : "hidden"
    }, cloneData ? cloneData : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: () => {
        setStep(2);
      },
      className: project && (project.status === -1 || project.status > 1) ? "previous-step-button btn bg-purple-700 hover:bg-purple-800 text-white" : "hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: ""
    }, "\u2190 Settings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: () => {
        electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.send("cancel-clone", projectId);
        electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.on("canceled-clone", (event, project) => {
          setProject(project);
        });
      },
      className: project && project.status === 1 ? "block next-step-button btn bg-rose-500 hover:bg-rose-800 text-white" : "hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: ""
    }, "Cancel Clone")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: () => {
        electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.send("start-clone", projectId);
        setCloneData(null);
        electron__WEBPACK_IMPORTED_MODULE_5__.ipcRenderer.on("started-clone", (event, project) => {
          setProject(project);
          setStep(4);
        });
      },
      className: project && (project.status === 2 || project.status === 3 || project.status === -1) ? "block next-step-button btn bg-purple-700 hover:bg-purple-800 text-white" : "hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: ""
    }, "\uD83D\uDE80 Restart Clone")));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex h-screen overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_partials_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sidebarOpen: sidebarOpen,
    setSidebarOpen: setSidebarOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_partials_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sidebarOpen: sidebarOpen,
    setSidebarOpen: setSidebarOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sm:flex sm:justify-between sm:items-center mb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full"
  }, stepRendered)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-12 gap-6"
  })))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewDownload);

/***/ }),

/***/ "./src/pages/Settings.jsx":
/*!********************************!*\
  !*** ./src/pages/Settings.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/Sidebar */ "./src/partials/Sidebar.jsx");
/* harmony import */ var _partials_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/Header */ "./src/partials/Header.jsx");
/* harmony import */ var _partials_SettingsTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../partials/SettingsTabs */ "./src/partials/SettingsTabs.jsx");





function Settings() {
  const [sidebarOpen, setSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex h-screen overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_partials_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sidebarOpen: sidebarOpen,
    setSidebarOpen: setSidebarOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_partials_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sidebarOpen: sidebarOpen,
    setSidebarOpen: setSidebarOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-4 sm:px-6 lg:px-8 py-8 w-full mx-auto text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-2xl md:text-3xl text-slate-800 font-bold mb-1"
  }, "Default Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mb-10 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 mx-auto"
  }, "These are the global default settings that will prepopulate the settings for each Clone you start. You can adjust these settings for each Clone before starting."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_partials_SettingsTabs__WEBPACK_IMPORTED_MODULE_3__["default"], null))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ }),

/***/ "./src/partials/Header.jsx":
/*!*********************************!*\
  !*** ./src/partials/Header.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_Help__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/Help */ "./src/partials/header/Help.jsx");



function Header({
  sidebarOpen,
  setSidebarOpen
}) {
  const [searchModalOpen, setSearchModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "sticky top-0 bg-white border-b border-slate-200 z-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between h-16 -mb-px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-2xl md:text-3xl text-slate-800 font-bold mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mr-1",
    style: {
      "marginTop": "4px",
      float: "left"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 20 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M 8.465 4.929 L 9.879 3.515 L 15.536 9.172 L 9.879 14.828 L 8.465 13.414 L 12.707 9.172 L 8.465 4.929 Z",
    style: {
      fill: "rgb(108, 43, 217)"
    },
    transform: "matrix(0, 1, -1, 0, 21.172, -2.829)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M 9.879 9.172 L 8.464 10.586 L 12.707 14.828 L 8.464 19.071 L 9.879 20.485 L 15.536 14.828 L 9.879 9.172 Z",
    style: {
      fill: "rgb(108, 43, 217)"
    },
    transform: "matrix(0, 1, -1, 0, 26.8285, 2.8285)"
  }))), "Cloneable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "text-slate-500 hover:text-slate-600 lg:hidden",
    "aria-controls": "sidebar",
    "aria-expanded": sidebarOpen,
    onClick: () => setSidebarOpen(!sidebarOpen)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, "Open sidebar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-6 h-6 fill-current",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "4",
    y: "5",
    width: "16",
    height: "2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "4",
    y: "11",
    width: "16",
    height: "2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "4",
    y: "17",
    width: "16",
    height: "2"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_header_Help__WEBPACK_IMPORTED_MODULE_1__["default"], null)))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/partials/SettingsTabs.jsx":
/*!***************************************!*\
  !*** ./src/partials/SettingsTabs.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rjsf_bootstrap_4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rjsf/bootstrap-4 */ "@rjsf/bootstrap-4");
/* harmony import */ var _rjsf_bootstrap_4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rjsf_bootstrap_4__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tabs */ "react-tabs");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var electron_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! electron/main */ "electron/main");
/* harmony import */ var electron_main__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(electron_main__WEBPACK_IMPORTED_MODULE_4__);






const os = __webpack_require__(/*! os */ "os");

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

    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("save-settings-tab", index);
  }

  function saveSettings() {
    const saveButtons = document.querySelectorAll('button[type="submit"]');

    for (let i = 0; i < saveButtons.length; i++) {
      saveButtons[i].click();
    }
  }

  function settingsTabListener(event, index) {
    try {
      document.querySelectorAll('.react-tabs__tab:nth-child(' + (index + 1) + ')')[0].click();
    } catch (e) {}

    try {
      document.querySelectorAll('.react-tabs')[0].style.display = 'block';
    } catch (e) {}
  }

  function getSettingsTab() {
    if (props.projectId) {
      document.querySelectorAll('.react-tabs')[0].style.display = 'block';
      return;
    }

    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("get-settings-tab");
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.on("settings-tab", settingsTabListener);
  }

  const [storageForm, setStorageForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [crawlForm, setCrawlForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [filtersForm, setFiltersForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [browserForm, setBrowserForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [authForm, setAuthForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [advancedForm, setAdvancedForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [storageSettings, setStorageSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [authSettings, setAuthSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [downloadsFolder, setDownloadsFolder] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  function selectNewFolder() {
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("select-folder");
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.on("selected-folder", newFolderListener);
  }

  function selectNewCookiesFile() {
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("select-file");
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.on("selected-file", newCookiesFileListener);
  }

  function newFolderListener(event, folder) {
    let copySettings = JSON.parse(JSON.stringify(storageSettings || {}));
    copySettings.basePath = folder;
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("save-settings", "storage", copySettings, props.projectId);
    setStorageSettings(copySettings);
    setStorageForm( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_rjsf_bootstrap_4__WEBPACK_IMPORTED_MODULE_1___default()), {
      schema: storageSchema,
      uiSchema: uiSchema,
      formData: copySettings,
      onBlur: saveSettings,
      onSubmit: ({
        formData
      }, e) => {
        electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("save-settings", "storage", formData, props.projectId);
      },
      className: "rjsf bg-white shadow-lg rounded-sm border border-slate-200"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: selectNewFolder,
      className: "btn btn-info mb-4 new-folder"
    }, "Select new folder")));
  }

  function storageListener(event, settings) {
    setStorageSettings(settings);
    setStorageForm( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_rjsf_bootstrap_4__WEBPACK_IMPORTED_MODULE_1___default()), {
      schema: storageSchema,
      uiSchema: uiSchema,
      formData: settings,
      onBlur: saveSettings,
      onSubmit: ({
        formData
      }, e) => {
        electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("save-settings", "storage", formData, props.projectId);
      },
      className: "rjsf bg-white shadow-lg rounded-sm border border-slate-200"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: selectNewFolder,
      className: "btn btn-info mb-4 new-folder"
    }, "Select new folder")));
  }

  function crawlListener(event, settings) {
    setCrawlForm( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_rjsf_bootstrap_4__WEBPACK_IMPORTED_MODULE_1___default()), {
      schema: crawlSchema,
      uiSchema: uiSchema,
      formData: settings,
      onBlur: saveSettings,
      onSubmit: ({
        formData
      }, e) => {
        electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("save-settings", "crawl", formData, props.projectId);
      },
      className: "rjsf bg-white shadow-lg rounded-sm border border-slate-200"
    })));
  }

  function filtersListener(event, settings) {
    setFiltersForm( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_rjsf_bootstrap_4__WEBPACK_IMPORTED_MODULE_1___default()), {
      schema: filtersSchema,
      uiSchema: uiSchema,
      formData: settings,
      onBlur: saveSettings,
      onSubmit: ({
        formData
      }, e) => {
        electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("save-settings", "filters", formData, props.projectId);
      },
      className: "rjsf rjsf-filters bg-white shadow-lg rounded-sm border border-slate-200"
    })));
  }

  function browserListener(event, settings) {
    setBrowserForm( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_rjsf_bootstrap_4__WEBPACK_IMPORTED_MODULE_1___default()), {
      schema: browserSchema,
      uiSchema: uiSchema,
      formData: settings,
      onBlur: saveSettings,
      onSubmit: ({
        formData
      }, e) => {
        electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("save-settings", "browser", formData, props.projectId);
      },
      className: "rjsf bg-white shadow-lg rounded-sm border border-slate-200"
    })));
  }

  function newCookiesFileListener(event, file) {
    let copySettings = JSON.parse(JSON.stringify(authSettings || {}));
    copySettings.cookiesFilePath = file;
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("save-settings", "auth", copySettings, props.projectId);
    setAuthSettings(copySettings);
    setAuthForm( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_rjsf_bootstrap_4__WEBPACK_IMPORTED_MODULE_1___default()), {
      schema: authSchema,
      uiSchema: uiSchema,
      formData: copySettings,
      onBlur: saveSettings,
      onSubmit: ({
        formData
      }, e) => {
        electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("save-settings", "auth", formData, props.projectId);
      },
      className: "rjsf bg-white shadow-lg rounded-sm border border-slate-200"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: selectNewCookiesFile,
      className: "btn btn-info mb-4 new-folder"
    }, "Select new file")));
  }

  function authListener(event, settings) {
    setAuthSettings(settings);
    setAuthForm( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_rjsf_bootstrap_4__WEBPACK_IMPORTED_MODULE_1___default()), {
      schema: authSchema,
      uiSchema: uiSchema,
      formData: settings,
      onBlur: saveSettings,
      onSubmit: ({
        formData
      }, e) => {
        electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("save-settings", "auth", formData, props.projectId);
      },
      className: "rjsf bg-white shadow-lg rounded-sm border border-slate-200"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: selectNewCookiesFile,
      className: "btn btn-info mb-4 new-folder"
    }, "Select new file")));
  }

  function advancedListener(event, settings) {
    setAdvancedForm( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_rjsf_bootstrap_4__WEBPACK_IMPORTED_MODULE_1___default()), {
      schema: advancedSchema,
      uiSchema: uiSchema,
      formData: settings,
      onBlur: saveSettings,
      onSubmit: ({
        formData
      }, e) => {
        electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("save-settings", "advanced", formData, props.projectId);
      },
      className: "rjsf bg-white shadow-lg rounded-sm border border-slate-200"
    })));
  }

  function getSettings() {
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("get-settings", "storage", props.projectId);
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.on("settings-storage", storageListener);
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("get-settings", "crawl", props.projectId);
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.on("settings-crawl", crawlListener);
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("get-settings", "filters", props.projectId);
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.on("settings-filters", filtersListener);
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("get-settings", "browser", props.projectId);
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.on("settings-browser", browserListener);
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("get-settings", "auth", props.projectId);
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.on("settings-auth", authListener);
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("get-settings", "advanced", props.projectId);
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.on("settings-advanced", advancedListener);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getSettings();
    getSettingsTab();
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send("get-downloads-folder");

    function downloadsFolderListener(event, value) {
      setDownloadsFolder(value);
    }

    electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.on("downloads-folder", downloadsFolderListener);
    return () => {
      electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.removeListener("settings-storage", storageListener);
      electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.removeListener("settings-crawl", crawlListener);
      electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.removeListener("settings-filters", filtersListener);
      electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.removeListener("settings-browser", browserListener);
      electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.removeListener("settings-auth", authListener);
      electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.removeListener("settings-advanced", advancedListener);
      electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.removeListener("settings-tab", settingsTabListener);
      electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.removeListener("selected-folder", newFolderListener);
      electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.removeListener("downloads-folder", downloadsFolderListener);
    };
  }, []);
  const uiSchema = {
    "ui:submitButtonOptions": {
      "submitText": "Save"
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
    }
  };
  const storageSchema = {
    title: "",
    type: "object",
    required: [],
    properties: {
      basePath: {
        type: "string",
        title: "Storage base folder",
        description: props.projectId ? "The base folder to store this download's folders in" : "The base folder to store your download folders in",
        default: "" //downloadsFolder

      }
    }
  };
  const crawlSchema = {
    title: "",
    type: "object",
    required: [],
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
            default: 0
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
        default: 20
      }
    }
  };
  const filtersSchema = {
    title: "",
    type: "object",
    required: [],
    properties: {
      domains: {
        type: "string",
        title: "Extra URLs / Domains",
        description: "Enter each url or domain on a new line. This is useful if the site you are cloning has media files hosted on a separate domain, for example.",
        default: ""
      },
      acceptFilters: {
        type: "string",
        title: "Accept filters",
        description: "File name suffixes or patterns to accept (include). Enter each item on a new line. Regex wildcards (*, ?, [, ]) are supported, but the presence of one will make this filter be treated as a pattern, rather than a suffix.",
        default: ""
      },
      rejectFilters: {
        type: "string",
        title: "Reject filters",
        description: "File name suffixes or patterns to reject (exclude). Enter each item on a new line. Regex wildcards (*, ?, [, ]) are supported, but the presence of one will make this filter be treated as a pattern, rather than a suffix.",
        default: ""
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
        default: false
      }
    }
  };
  const browserSchema = {
    title: "",
    type: "object",
    required: [],
    properties: {
      referer: {
        type: "string",
        title: "Referer",
        description: "URL to send as a Referer HTTP header",
        default: ""
      },
      userAgent: {
        type: "string",
        title: "User Agent",
        description: "User Agent to send as a User-Agent HTTP header",
        default: ""
      },
      headers: {
        type: "string",
        title: "Headers",
        description: "Headers to send with each request. Enter each header on a new line",
        default: ""
      }
    }
  };
  const authSchema = {
    title: "",
    type: "object",
    required: [],
    properties: {
      httpUser: {
        type: "string",
        title: "HTTP Username",
        description: "For HTTP server authentication",
        default: ""
      },
      httpPassword: {
        type: "string",
        title: "HTTP Username",
        description: "For HTTP server authentication",
        default: ""
      },
      disableCookies: {
        type: "boolean",
        title: "Disable cookies",
        description: "",
        default: false
      },
      saveCookies: {
        type: "boolean",
        title: "Save cookies",
        description: "",
        default: false
      },
      saveSessionCookies: {
        type: "boolean",
        title: "Keep session cookies",
        description: "",
        default: false
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
    required: [],
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
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tabs__WEBPACK_IMPORTED_MODULE_3__.Tabs, {
    style: {
      display: "none"
    },
    onSelect: saveTabAndGetSettings
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tabs__WEBPACK_IMPORTED_MODULE_3__.TabList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tabs__WEBPACK_IMPORTED_MODULE_3__.Tab, null, "Storage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tabs__WEBPACK_IMPORTED_MODULE_3__.Tab, null, "Filters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tabs__WEBPACK_IMPORTED_MODULE_3__.Tab, null, "Crawl"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tabs__WEBPACK_IMPORTED_MODULE_3__.Tab, null, "Browser ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tabs__WEBPACK_IMPORTED_MODULE_3__.Tab, null, "Auth/Cookies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tabs__WEBPACK_IMPORTED_MODULE_3__.Tab, null, "Advanced")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tabs__WEBPACK_IMPORTED_MODULE_3__.TabPanel, null, storageForm), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tabs__WEBPACK_IMPORTED_MODULE_3__.TabPanel, null, filtersForm), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tabs__WEBPACK_IMPORTED_MODULE_3__.TabPanel, null, crawlForm), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tabs__WEBPACK_IMPORTED_MODULE_3__.TabPanel, null, browserForm), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tabs__WEBPACK_IMPORTED_MODULE_3__.TabPanel, null, authForm), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tabs__WEBPACK_IMPORTED_MODULE_3__.TabPanel, null, advancedForm)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsTabs);

/***/ }),

/***/ "./src/partials/Sidebar.jsx":
/*!**********************************!*\
  !*** ./src/partials/Sidebar.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);



function Sidebar({
  sidebarOpen,
  setSidebarOpen
}) {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const {
    pathname
  } = location;
  const trigger = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const sidebar = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(storedSidebarExpanded === null ? true : storedSidebarExpanded === 'true'); // close on click outside

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const clickHandler = ({
      target
    }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };

    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }); // close if the esc key is pressed

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const keyHandler = ({
      keyCode
    }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };

    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);

    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`,
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "sidebar",
    ref: sidebar,
    className: `flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hidden flex justify-between mb-10 pr-3 sm:px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    ref: trigger,
    className: "lg:hidden text-slate-500 hover:text-slate-400",
    onClick: () => setSidebarOpen(!sidebarOpen),
    "aria-controls": "sidebar",
    "aria-expanded": sidebarOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, "Close sidebar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-6 h-6 fill-current",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-xs uppercase text-slate-500 font-semibold pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
  }, "Pages")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname === '/' && 'bg-slate-900'}`,
    "data-tip": !sidebarExpanded ? 'Dashboard' : ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    end: true,
    to: "/",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname === '/' && 'hover:text-slate-200'}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: `fill-current text-slate-400 ${pathname === '/' && '!text-indigo-500'}`,
    d: "M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: `fill-current text-slate-600 ${pathname === '/' && 'text-indigo-600'}`,
    d: "M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: `fill-current text-slate-400 ${pathname === '/' && 'text-indigo-200'}`,
    d: "M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Dashboard")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('downloads') && 'bg-slate-900'}`,
    "data-tip": !sidebarExpanded ? 'Downloads' : ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    end: true,
    to: "/downloads",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes('downloads') && 'hover:text-slate-200'}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes('downloads') && 'text-indigo-500'}`,
    d: "M16 13v4H8v-4H0l3-9h18l3 9h-8Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: `fill-current text-slate-400 ${pathname.includes('downloads') && 'text-indigo-300'}`,
    d: "m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Clones")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('settings') && 'bg-slate-900'}`,
    "data-tip": !sidebarExpanded ? 'Settings' : ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    end: true,
    to: "/settings",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes('settings') && 'hover:text-slate-200'}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes('settings') && 'text-indigo-500'}`,
    d: "M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: `fill-current text-slate-400 ${pathname.includes('settings') && 'text-indigo-300'}`,
    d: "M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes('settings') && 'text-indigo-500'}`,
    d: "M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: `fill-current text-slate-400 ${pathname.includes('settings') && 'text-indigo-300'}`,
    d: "M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Settings")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('help') && 'bg-slate-900'}`,
    "data-tip": !sidebarExpanded ? 'Help' : ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    end: true,
    to: "/help",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes('help') && 'hover:text-slate-200'}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: `fill-current text-slate-400 ${pathname.includes('help') && 'text-indigo-300'}`,
    d: "M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: `fill-current text-slate-700 ${pathname.includes('help') && '!text-indigo-600'}`,
    d: "M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes('help') && 'text-indigo-500'}`,
    d: "M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Help"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-3 py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setSidebarExpanded(!sidebarExpanded)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, "Expand / collapse sidebar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-6 h-6 fill-current sidebar-expanded:rotate-180",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "text-slate-400",
    d: "M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "text-slate-600",
    d: "M3 23H1V1h2z"
  })))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./src/partials/header/Help.jsx":
/*!**************************************!*\
  !*** ./src/partials/header/Help.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_Transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Transition */ "./src/utils/Transition.jsx");




function Help() {
  const [dropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const trigger = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const dropdown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // close on click outside

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const clickHandler = ({
      target
    }) => {
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };

    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }); // close if the esc key is pressed

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const keyHandler = ({
      keyCode
    }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };

    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative inline-flex ml-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    ref: trigger,
    className: `w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${dropdownOpen && 'bg-slate-200'}`,
    "aria-haspopup": "true",
    onClick: () => setDropdownOpen(!dropdownOpen),
    "aria-expanded": dropdownOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, "Need help?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-4 h-4",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "fill-current text-slate-500",
    d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_Transition__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1",
    show: dropdownOpen,
    enter: "transition ease-out duration-200 transform",
    enterStart: "opacity-0 -translate-y-2",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-out duration-200",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: dropdown,
    onFocus: () => setDropdownOpen(true),
    onBlur: () => setDropdownOpen(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4"
  }, "Need help?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "/help",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2",
    viewBox: "0 0 12 12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Help Center"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    href: "mailto:cloneableapp@gmail.com"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2",
    viewBox: "0 0 12 12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Email us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "font-medium text-sm text-black hover:text-indigo-600 flex items-center py-1 px-3",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Version 0.1.4")))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Help);

/***/ }),

/***/ "./src/utils/GetStatusBadge.jsx":
/*!**************************************!*\
  !*** ./src/utils/GetStatusBadge.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function GetStatusBadge(status, size = 'small') {
  let classes = 'status-badge text-sm font-semibold text-white rounded-full';

  if (size === 'large') {
    classes += ' px-3 py-3';
  } else {
    classes += ' px-1.5 py-1.5';
  }

  if (status === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes + " bg-sky-500"
    }, "New");
  }

  if (status === 1) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes + " bg-indigo-500"
    }, "In Progress");
  }

  if (status === 2) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes + " bg-green-500"
    }, "Completed");
  }

  if (status === 3) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes + " bg-rose-500"
    }, "Canceled");
  }

  if (status === 4) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes + " bg-white"
    }, "Total");
  } // -1


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes + " bg-rose-500"
  }, "Error");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetStatusBadge);

/***/ }),

/***/ "./src/utils/Transition.jsx":
/*!**********************************!*\
  !*** ./src/utils/Transition.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const TransitionContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  parent: {}
});

function useIsInitialRender() {
  const isInitialRender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

function CSSTransition({
  show,
  enter = '',
  enterStart = '',
  enterEnd = '',
  leave = '',
  leaveStart = '',
  leaveEnd = '',
  appear,
  unmountOnExit,
  tag = 'div',
  children,
  ...rest
}) {
  const enterClasses = enter.split(' ').filter(s => s.length);
  const enterStartClasses = enterStart.split(' ').filter(s => s.length);
  const enterEndClasses = enterEnd.split(' ').filter(s => s.length);
  const leaveClasses = leave.split(' ').filter(s => s.length);
  const leaveStartClasses = leaveStart.split(' ').filter(s => s.length);
  const leaveEndClasses = leaveEnd.split(' ').filter(s => s.length);
  const removeFromDom = unmountOnExit;

  function addClasses(node, classes) {
    classes.length && node.classList.add(...classes);
  }

  function removeClasses(node, classes) {
    classes.length && node.classList.remove(...classes);
  }

  const nodeRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const Component = tag;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__.CSSTransition, {
    appear: appear,
    nodeRef: nodeRef,
    unmountOnExit: removeFromDom,
    in: show,
    addEndListener: done => {
      nodeRef.current.addEventListener('transitionend', done, false);
    },
    onEnter: () => {
      if (!removeFromDom) nodeRef.current.style.display = null;
      addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses]);
    },
    onEntering: () => {
      removeClasses(nodeRef.current, enterStartClasses);
      addClasses(nodeRef.current, enterEndClasses);
    },
    onEntered: () => {
      removeClasses(nodeRef.current, [...enterEndClasses, ...enterClasses]);
    },
    onExit: () => {
      addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses]);
    },
    onExiting: () => {
      removeClasses(nodeRef.current, leaveStartClasses);
      addClasses(nodeRef.current, leaveEndClasses);
    },
    onExited: () => {
      removeClasses(nodeRef.current, [...leaveEndClasses, ...leaveClasses]);
      if (!removeFromDom) nodeRef.current.style.display = 'none';
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, _extends({
    ref: nodeRef
  }, rest, {
    style: {
      display: !removeFromDom ? 'none' : null
    }
  }), children));
}

function Transition({
  show,
  appear,
  ...rest
}) {
  const {
    parent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CSSTransition, _extends({
      appear: parent.appear || !parent.isInitialRender,
      show: parent.show
    }, rest));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TransitionContext.Provider, {
    value: {
      parent: {
        show,
        isInitialRender,
        appear
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CSSTransition, _extends({
    appear: appear,
    show: show
  }, rest)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transition);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/flatpickr/dist/flatpickr.min.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/flatpickr/dist/flatpickr.min.css ***!
  \*********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation;background:#fff;-webkit-box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08);box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08)}.flatpickr-calendar.open,.flatpickr-calendar.inline{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1);animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px)}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){-webkit-box-shadow:none !important;box-shadow:none !important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){-webkit-box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:before,.flatpickr-calendar:after{position:absolute;display:block;pointer-events:none;border:solid transparent;content:'';height:0;width:0;left:22px}.flatpickr-calendar.rightMost:before,.flatpickr-calendar.arrowRight:before,.flatpickr-calendar.rightMost:after,.flatpickr-calendar.arrowRight:after{left:auto;right:22px}.flatpickr-calendar.arrowCenter:before,.flatpickr-calendar.arrowCenter:after{left:50%;right:50%}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-months .flatpickr-month{background:transparent;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9);height:34px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;cursor:pointer;position:absolute;top:0;height:34px;padding:10px;z-index:3;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9)}.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-months .flatpickr-next-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-prev-month i,.flatpickr-months .flatpickr-next-month i{position:relative}.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,.flatpickr-months .flatpickr-next-month.flatpickr-prev-month{/*\n      /*rtl:begin:ignore*/left:0/*\n      /*rtl:end:ignore*/}/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,.flatpickr-months .flatpickr-next-month.flatpickr-next-month{/*\n      /*rtl:begin:ignore*/right:0/*\n      /*rtl:end:ignore*/}/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover{color:#959ea9}.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:14px;height:14px}.flatpickr-months .flatpickr-prev-month svg path,.flatpickr-months .flatpickr-next-month svg path{-webkit-transition:fill .1s;transition:fill .1s;fill:inherit}.numInputWrapper{position:relative;height:auto}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-outer-spin-button,.numInputWrapper input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57,57,57,0.15);-webkit-box-sizing:border-box;box-sizing:border-box}.numInputWrapper span:hover{background:rgba(0,0,0,0.1)}.numInputWrapper span:active{background:rgba(0,0,0,0.2)}.numInputWrapper span:after{display:block;content:\"\";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57,57,57,0.6);top:26%}.numInputWrapper span.arrowDown{top:50%}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57,57,57,0.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto}.numInputWrapper span svg path{fill:rgba(0,0,0,0.5)}.numInputWrapper:hover{background:rgba(0,0,0,0.05)}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0 0;line-height:1;height:34px;display:inline-block;text-align:center;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:.5ch;padding:0}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\0;display:inline-block}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:rgba(0,0,0,0.9)}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:rgba(0,0,0,0.9)}.flatpickr-current-month input.cur-year{background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 .5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(0,0,0,0.5);background:transparent;pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:transparent;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0 0;outline:none;padding:0 0 0 .5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto}.flatpickr-current-month .flatpickr-monthDropdown-months:focus,.flatpickr-current-month .flatpickr-monthDropdown-months:active{outline:none}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:transparent;outline:none;padding:0}.flatpickr-weekdays{background:transparent;text-align:center;overflow:hidden;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:28px}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:transparent;color:rgba(0,0,0,0.54);line-height:1;margin:0;text-align:center;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0 0}.flatpickr-days{position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:307.875px}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-wrap:wrap;-ms-flex-pack:justify;-webkit-justify-content:space-around;justify-content:space-around;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}.dayContainer + .dayContainer{-webkit-box-shadow:-1px 0 0 #e6e6e6;box-shadow:-1px 0 0 #e6e6e6}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;-webkit-flex-basis:14.2857143%;-ms-flex-preferred-size:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-day.today{border-color:#959ea9}.flatpickr-day.today:hover,.flatpickr-day.today:focus{border-color:#959ea9;background:#959ea9;color:#fff}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{background:#569ff7;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)){-webkit-box-shadow:-10px 0 0 #569ff7;box-shadow:-10px 0 0 #569ff7}.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;-webkit-box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{color:rgba(57,57,57,0.3);background:transparent;border-color:transparent;cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(57,57,57,0.1)}.flatpickr-day.week.selected{border-radius:0;-webkit-box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7;box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;-webkit-box-shadow:1px 0 0 #e6e6e6;box-shadow:1px 0 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(57,57,57,0.3);background:transparent;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.flatpickr-rContainer{display:inline-block;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-time:after{content:\"\";display:table;clear:both}.flatpickr-time .numInputWrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:40%;height:40px;float:left}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;-webkit-box-shadow:none;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-time input.flatpickr-hour{font-weight:bold}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:inherit;float:left;line-height:inherit;color:#393939;font-weight:bold;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time input:hover,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time .flatpickr-am-pm:focus{background:#eee}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}", "",{"version":3,"sources":["webpack://./node_modules/flatpickr/dist/flatpickr.min.css"],"names":[],"mappings":"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","sourcesContent":[".flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation;background:#fff;-webkit-box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08);box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08)}.flatpickr-calendar.open,.flatpickr-calendar.inline{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1);animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px)}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){-webkit-box-shadow:none !important;box-shadow:none !important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){-webkit-box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:before,.flatpickr-calendar:after{position:absolute;display:block;pointer-events:none;border:solid transparent;content:'';height:0;width:0;left:22px}.flatpickr-calendar.rightMost:before,.flatpickr-calendar.arrowRight:before,.flatpickr-calendar.rightMost:after,.flatpickr-calendar.arrowRight:after{left:auto;right:22px}.flatpickr-calendar.arrowCenter:before,.flatpickr-calendar.arrowCenter:after{left:50%;right:50%}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-months .flatpickr-month{background:transparent;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9);height:34px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;cursor:pointer;position:absolute;top:0;height:34px;padding:10px;z-index:3;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9)}.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-months .flatpickr-next-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-prev-month i,.flatpickr-months .flatpickr-next-month i{position:relative}.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,.flatpickr-months .flatpickr-next-month.flatpickr-prev-month{/*\n      /*rtl:begin:ignore*/left:0/*\n      /*rtl:end:ignore*/}/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,.flatpickr-months .flatpickr-next-month.flatpickr-next-month{/*\n      /*rtl:begin:ignore*/right:0/*\n      /*rtl:end:ignore*/}/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover{color:#959ea9}.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:14px;height:14px}.flatpickr-months .flatpickr-prev-month svg path,.flatpickr-months .flatpickr-next-month svg path{-webkit-transition:fill .1s;transition:fill .1s;fill:inherit}.numInputWrapper{position:relative;height:auto}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-outer-spin-button,.numInputWrapper input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57,57,57,0.15);-webkit-box-sizing:border-box;box-sizing:border-box}.numInputWrapper span:hover{background:rgba(0,0,0,0.1)}.numInputWrapper span:active{background:rgba(0,0,0,0.2)}.numInputWrapper span:after{display:block;content:\"\";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57,57,57,0.6);top:26%}.numInputWrapper span.arrowDown{top:50%}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57,57,57,0.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto}.numInputWrapper span svg path{fill:rgba(0,0,0,0.5)}.numInputWrapper:hover{background:rgba(0,0,0,0.05)}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0 0;line-height:1;height:34px;display:inline-block;text-align:center;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:.5ch;padding:0}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\0;display:inline-block}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:rgba(0,0,0,0.9)}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:rgba(0,0,0,0.9)}.flatpickr-current-month input.cur-year{background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 .5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(0,0,0,0.5);background:transparent;pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:transparent;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0 0;outline:none;padding:0 0 0 .5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto}.flatpickr-current-month .flatpickr-monthDropdown-months:focus,.flatpickr-current-month .flatpickr-monthDropdown-months:active{outline:none}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:transparent;outline:none;padding:0}.flatpickr-weekdays{background:transparent;text-align:center;overflow:hidden;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:28px}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:transparent;color:rgba(0,0,0,0.54);line-height:1;margin:0;text-align:center;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0 0}.flatpickr-days{position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:307.875px}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-wrap:wrap;-ms-flex-pack:justify;-webkit-justify-content:space-around;justify-content:space-around;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}.dayContainer + .dayContainer{-webkit-box-shadow:-1px 0 0 #e6e6e6;box-shadow:-1px 0 0 #e6e6e6}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;-webkit-flex-basis:14.2857143%;-ms-flex-preferred-size:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-day.today{border-color:#959ea9}.flatpickr-day.today:hover,.flatpickr-day.today:focus{border-color:#959ea9;background:#959ea9;color:#fff}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{background:#569ff7;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)){-webkit-box-shadow:-10px 0 0 #569ff7;box-shadow:-10px 0 0 #569ff7}.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;-webkit-box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{color:rgba(57,57,57,0.3);background:transparent;border-color:transparent;cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(57,57,57,0.1)}.flatpickr-day.week.selected{border-radius:0;-webkit-box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7;box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;-webkit-box-shadow:1px 0 0 #e6e6e6;box-shadow:1px 0 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(57,57,57,0.3);background:transparent;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.flatpickr-rContainer{display:inline-block;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-time:after{content:\"\";display:table;clear:both}.flatpickr-time .numInputWrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:40%;height:40px;float:left}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;-webkit-box-shadow:none;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-time input.flatpickr-hour{font-weight:bold}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:inherit;float:left;line-height:inherit;color:#393939;font-weight:bold;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time input:hover,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time .flatpickr-am-pm:focus{background:#eee}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/tailwindcss/base.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/tailwindcss/base.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@tailwind base;\n", "",{"version":3,"sources":["webpack://./node_modules/tailwindcss/base.css"],"names":[],"mappings":"AAAA,cAAc","sourcesContent":["@tailwind base;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/tailwindcss/components.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/tailwindcss/components.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@tailwind components;\n", "",{"version":3,"sources":["webpack://./node_modules/tailwindcss/components.css"],"names":[],"mappings":"AAAA,oBAAoB","sourcesContent":["@tailwind components;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/tailwindcss/utilities.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/tailwindcss/utilities.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@tailwind utilities;\n", "",{"version":3,"sources":["webpack://./node_modules/tailwindcss/utilities.css"],"names":[],"mappings":"AAAA,mBAAmB","sourcesContent":["@tailwind utilities;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/additional-styles/flatpickr.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/additional-styles/flatpickr.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/flatpickr/dist/flatpickr.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/flatpickr/dist/flatpickr.min.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Customise flatpickr */\n* {\n    --calendarPadding: 24px;\n    --daySize: 36px;\n    --daysWidth: calc(var(--daySize)*7);\n}\n\n@keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -8px, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.flatpickr-calendar {\n    border: inherit;\n    @apply rounded shadow-lg border border-slate-200 left-1/2;\n    margin-left: calc(calc(var(--daysWidth) + calc(var(--calendarPadding)*2))*0.5*-1);\n    padding: var(--calendarPadding);\n    width: calc(var(--daysWidth) + calc(var(--calendarPadding)*2));\n}\n\n@screen lg {\n    .flatpickr-calendar {\n        @apply left-0 right-auto;\n        margin-left: 0;\n    }\n}\n\n.flatpickr-right.flatpickr-calendar {\n    @apply right-0 left-auto;\n    margin-left: 0;\n}\n\n.flatpickr-calendar.animate.open {\n    animation: fpFadeInDown 200ms ease-out;\n}\n\n.flatpickr-calendar.static {\n    position: absolute;\n    top: calc(100% + 4px);\n}\n\n.flatpickr-calendar.static.open {\n    z-index: 20;\n}\n\n.flatpickr-days {\n    width: var(--daysWidth);\n}\n\n.dayContainer {\n    width: var(--daysWidth);\n    min-width: var(--daysWidth);\n    max-width: var(--daysWidth);\n}\n\n.flatpickr-day {\n    @apply bg-slate-50 text-sm font-medium text-slate-600;\n    max-width: var(--daySize);\n    height: var(--daySize);\n    line-height: var(--daySize);\n}\n\n.flatpickr-day,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay {\n    border: none;\n}\n\n.flatpickr-day, \n.flatpickr-day.prevMonthDay, \n.flatpickr-day.nextMonthDay,\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange,\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange,\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n    border-radius: 0;\n}\n\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n    @apply text-slate-400;\n}\n\n.rangeMode .flatpickr-day {\n    margin: 0;\n}\n\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n    @apply bg-indigo-500 text-indigo-50;\n}\n\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus,\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n    @apply bg-indigo-400 text-indigo-50;\n}\n\n.flatpickr-day.inRange,\n.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n    box-shadow: none;\n}\n\n.flatpickr-months {\n    align-items: center;\n    margin-top: -8px;\n    margin-bottom: 6px;\n}\n\n.flatpickr-months .flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month {\n    position: static;\n    height: auto;\n    @apply text-slate-600;    \n}\n\n.flatpickr-months .flatpickr-prev-month svg,\n.flatpickr-months .flatpickr-next-month svg {\n    width: 7px;\n    height: 11px;\n}\n\n.flatpickr-months .flatpickr-prev-month:hover,\n.flatpickr-months .flatpickr-next-month:hover,\n.flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-months .flatpickr-next-month:hover svg {\n    fill: inherit;\n    @apply text-slate-400;\n}\n\n.flatpickr-months .flatpickr-prev-month {\n    margin-left: -10px;\n}\n\n.flatpickr-months .flatpickr-next-month {\n    margin-right: -10px;\n}\n\n.flatpickr-months .flatpickr-month {\n    @apply text-slate-800;\n    height: auto;\n    line-height: inherit;\n}\n\n.flatpickr-current-month {\n    @apply text-sm font-medium;\n    position: static;\n    height: auto;\n    width: auto;\n    left: auto;\n    padding: 0;\n}\n\n.flatpickr-current-month span.cur-month {\n    @apply font-medium m-0;\n}\n\n.flatpickr-current-month span.cur-month:hover {\n    background: none;\n}\n\n.flatpickr-current-month input.cur-year {\n    font-weight: inherit;\n    box-shadow: none !important;\n}\n\n.numInputWrapper:hover {\n    background: none;\n}\n\n.numInputWrapper span {\n    display: none;\n}\n\nspan.flatpickr-weekday {\n    @apply text-slate-400 font-medium text-xs;\n}\n\n.flatpickr-calendar.arrowTop::before,\n.flatpickr-calendar.arrowTop::after,\n.flatpickr-calendar.arrowBottom::before,\n.flatpickr-calendar.arrowBottom::after {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/css/additional-styles/flatpickr.css"],"names":[],"mappings":"AAEA,wBAAwB;AACxB;IACI,uBAAuB;IACvB,eAAe;IACf,mCAAmC;AACvC;;AAEA;EACE;IACE,UAAU;IACV,kCAAkC;EACpC;EACA;IACE,UAAU;IACV,+BAA+B;EACjC;AACF;;AAEA;IACI,eAAe;IACf,yDAAyD;IACzD,iFAAiF;IACjF,+BAA+B;IAC/B,8DAA8D;AAClE;;AAEA;IACI;QACI,wBAAwB;QACxB,cAAc;IAClB;AACJ;;AAEA;IACI,wBAAwB;IACxB,cAAc;AAClB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,2BAA2B;IAC3B,2BAA2B;AAC/B;;AAEA;IACI,qDAAqD;IACrD,yBAAyB;IACzB,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;;;IAGI,YAAY;AAChB;;AAEA;;;;;;;;;;;;IAYI,gBAAgB;AACpB;;AAEA;;;;;;;IAOI,qBAAqB;AACzB;;AAEA;IACI,SAAS;AACb;;AAEA;;;;;;;;;;;;;;;;;;IAkBI,mCAAmC;AACvC;;AAEA;;;;;;;;;;;;;;IAcI,mCAAmC;AACvC;;AAEA;;;;IAII,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;;IAEI,gBAAgB;IAChB,YAAY;IACZ,qBAAqB;AACzB;;AAEA;;IAEI,UAAU;IACV,YAAY;AAChB;;AAEA;;;;IAII,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,0BAA0B;IAC1B,gBAAgB;IAChB,YAAY;IACZ,WAAW;IACX,UAAU;IACV,UAAU;AACd;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,2BAA2B;AAC/B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;;;;IAII,aAAa;AACjB","sourcesContent":["@import 'flatpickr/dist/flatpickr.min.css';\n\n/* Customise flatpickr */\n* {\n    --calendarPadding: 24px;\n    --daySize: 36px;\n    --daysWidth: calc(var(--daySize)*7);\n}\n\n@keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -8px, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.flatpickr-calendar {\n    border: inherit;\n    @apply rounded shadow-lg border border-slate-200 left-1/2;\n    margin-left: calc(calc(var(--daysWidth) + calc(var(--calendarPadding)*2))*0.5*-1);\n    padding: var(--calendarPadding);\n    width: calc(var(--daysWidth) + calc(var(--calendarPadding)*2));\n}\n\n@screen lg {\n    .flatpickr-calendar {\n        @apply left-0 right-auto;\n        margin-left: 0;\n    }\n}\n\n.flatpickr-right.flatpickr-calendar {\n    @apply right-0 left-auto;\n    margin-left: 0;\n}\n\n.flatpickr-calendar.animate.open {\n    animation: fpFadeInDown 200ms ease-out;\n}\n\n.flatpickr-calendar.static {\n    position: absolute;\n    top: calc(100% + 4px);\n}\n\n.flatpickr-calendar.static.open {\n    z-index: 20;\n}\n\n.flatpickr-days {\n    width: var(--daysWidth);\n}\n\n.dayContainer {\n    width: var(--daysWidth);\n    min-width: var(--daysWidth);\n    max-width: var(--daysWidth);\n}\n\n.flatpickr-day {\n    @apply bg-slate-50 text-sm font-medium text-slate-600;\n    max-width: var(--daySize);\n    height: var(--daySize);\n    line-height: var(--daySize);\n}\n\n.flatpickr-day,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay {\n    border: none;\n}\n\n.flatpickr-day, \n.flatpickr-day.prevMonthDay, \n.flatpickr-day.nextMonthDay,\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange,\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange,\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n    border-radius: 0;\n}\n\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n    @apply text-slate-400;\n}\n\n.rangeMode .flatpickr-day {\n    margin: 0;\n}\n\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n    @apply bg-indigo-500 text-indigo-50;\n}\n\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus,\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n    @apply bg-indigo-400 text-indigo-50;\n}\n\n.flatpickr-day.inRange,\n.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n    box-shadow: none;\n}\n\n.flatpickr-months {\n    align-items: center;\n    margin-top: -8px;\n    margin-bottom: 6px;\n}\n\n.flatpickr-months .flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month {\n    position: static;\n    height: auto;\n    @apply text-slate-600;    \n}\n\n.flatpickr-months .flatpickr-prev-month svg,\n.flatpickr-months .flatpickr-next-month svg {\n    width: 7px;\n    height: 11px;\n}\n\n.flatpickr-months .flatpickr-prev-month:hover,\n.flatpickr-months .flatpickr-next-month:hover,\n.flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-months .flatpickr-next-month:hover svg {\n    fill: inherit;\n    @apply text-slate-400;\n}\n\n.flatpickr-months .flatpickr-prev-month {\n    margin-left: -10px;\n}\n\n.flatpickr-months .flatpickr-next-month {\n    margin-right: -10px;\n}\n\n.flatpickr-months .flatpickr-month {\n    @apply text-slate-800;\n    height: auto;\n    line-height: inherit;\n}\n\n.flatpickr-current-month {\n    @apply text-sm font-medium;\n    position: static;\n    height: auto;\n    width: auto;\n    left: auto;\n    padding: 0;\n}\n\n.flatpickr-current-month span.cur-month {\n    @apply font-medium m-0;\n}\n\n.flatpickr-current-month span.cur-month:hover {\n    background: none;\n}\n\n.flatpickr-current-month input.cur-year {\n    font-weight: inherit;\n    box-shadow: none !important;\n}\n\n.numInputWrapper:hover {\n    background: none;\n}\n\n.numInputWrapper span {\n    display: none;\n}\n\nspan.flatpickr-weekday {\n    @apply text-slate-400 font-medium text-xs;\n}\n\n.flatpickr-calendar.arrowTop::before,\n.flatpickr-calendar.arrowTop::after,\n.flatpickr-calendar.arrowBottom::before,\n.flatpickr-calendar.arrowBottom::after {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/additional-styles/range-slider.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/additional-styles/range-slider.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Range slider */\n:root {\n    --range-thumb-size: 36px;\n}\n\ninput[type=range] {\n    appearance: none;\n    background: #ccc;\n    border-radius: 3px;\n    height: 6px;\n    margin-top: (--range-thumb-size - 6px) * 0.5;\n    margin-bottom: (--range-thumb-size - 6px) * 0.5;\n    --thumb-size: #{--range-thumb-size};  \n}\n\ninput[type=range]::-webkit-slider-thumb {\n    appearance: none;\n    -webkit-appearance: none;\n    background-color: #000;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='12' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 .5v7L12 4zM0 4l4 3.5v-7z' fill='%23FFF' fill-rule='nonzero'/%3E%3C/svg%3E\");\n    background-position: center;\n    background-repeat: no-repeat;\n    border: 0;\n    border-radius: 50%;\n    cursor: pointer;\n    height: --range-thumb-size;\n    width: --range-thumb-size;        \n}\n\ninput[type=range]::-moz-range-thumb {\n    background-color: #000;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='12' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 .5v7L12 4zM0 4l4 3.5v-7z' fill='%23FFF' fill-rule='nonzero'/%3E%3C/svg%3E\");\n    background-position: center;\n    background-repeat: no-repeat;\n    border: 0;\n    border: none;\n    border-radius: 50%;\n    cursor: pointer;\n    height: --range-thumb-size;\n    width: --range-thumb-size;    \n}\n\ninput[type=range]::-ms-thumb {\n    background-color: #000;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='12' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 .5v7L12 4zM0 4l4 3.5v-7z' fill='%23FFF' fill-rule='nonzero'/%3E%3C/svg%3E\");\n    background-position: center;\n    background-repeat: no-repeat;\n    border: 0;\n    border-radius: 50%;\n    cursor: pointer;\n    height: --range-thumb-size;\n    width: --range-thumb-size;\n}\n\ninput[type=range]::-moz-focus-outer {\n    border: 0;\n}", "",{"version":3,"sources":["webpack://./src/css/additional-styles/range-slider.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;IACI,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,4CAA4C;IAC5C,+CAA+C;IAC/C,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;IAChB,wBAAwB;IACxB,sBAAsB;IACtB,qMAAqM;IACrM,2BAA2B;IAC3B,4BAA4B;IAC5B,SAAS;IACT,kBAAkB;IAClB,eAAe;IACf,0BAA0B;IAC1B,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;IACtB,qMAAqM;IACrM,2BAA2B;IAC3B,4BAA4B;IAC5B,SAAS;IACT,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,0BAA0B;IAC1B,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;IACtB,qMAAqM;IACrM,2BAA2B;IAC3B,4BAA4B;IAC5B,SAAS;IACT,kBAAkB;IAClB,eAAe;IACf,0BAA0B;IAC1B,yBAAyB;AAC7B;;AAEA;IACI,SAAS;AACb","sourcesContent":["/* Range slider */\n:root {\n    --range-thumb-size: 36px;\n}\n\ninput[type=range] {\n    appearance: none;\n    background: #ccc;\n    border-radius: 3px;\n    height: 6px;\n    margin-top: (--range-thumb-size - 6px) * 0.5;\n    margin-bottom: (--range-thumb-size - 6px) * 0.5;\n    --thumb-size: #{--range-thumb-size};  \n}\n\ninput[type=range]::-webkit-slider-thumb {\n    appearance: none;\n    -webkit-appearance: none;\n    background-color: #000;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='12' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 .5v7L12 4zM0 4l4 3.5v-7z' fill='%23FFF' fill-rule='nonzero'/%3E%3C/svg%3E\");\n    background-position: center;\n    background-repeat: no-repeat;\n    border: 0;\n    border-radius: 50%;\n    cursor: pointer;\n    height: --range-thumb-size;\n    width: --range-thumb-size;        \n}\n\ninput[type=range]::-moz-range-thumb {\n    background-color: #000;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='12' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 .5v7L12 4zM0 4l4 3.5v-7z' fill='%23FFF' fill-rule='nonzero'/%3E%3C/svg%3E\");\n    background-position: center;\n    background-repeat: no-repeat;\n    border: 0;\n    border: none;\n    border-radius: 50%;\n    cursor: pointer;\n    height: --range-thumb-size;\n    width: --range-thumb-size;    \n}\n\ninput[type=range]::-ms-thumb {\n    background-color: #000;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='12' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 .5v7L12 4zM0 4l4 3.5v-7z' fill='%23FFF' fill-rule='nonzero'/%3E%3C/svg%3E\");\n    background-position: center;\n    background-repeat: no-repeat;\n    border: 0;\n    border-radius: 50%;\n    cursor: pointer;\n    height: --range-thumb-size;\n    width: --range-thumb-size;\n}\n\ninput[type=range]::-moz-focus-outer {\n    border: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/additional-styles/theme.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/additional-styles/theme.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-input:focus,\n.form-textarea:focus,\n.form-multiselect:focus,\n.form-select:focus,\n.form-checkbox:focus,\n.form-radio:focus {\n    @apply ring-0;\n}\n", "",{"version":3,"sources":["webpack://./src/css/additional-styles/theme.css"],"names":[],"mappings":"AAAA;;;;;;IAMI,aAAa;AACjB","sourcesContent":[".form-input:focus,\n.form-textarea:focus,\n.form-multiselect:focus,\n.form-select:focus,\n.form-checkbox:focus,\n.form-radio:focus {\n    @apply ring-0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/additional-styles/toggle-switch.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/additional-styles/toggle-switch.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Switch element */\n.form-switch {\n    @apply relative select-none;\n    width: 44px;\n}\n\n.form-switch label {\n    @apply block overflow-hidden cursor-pointer h-6 rounded-full;\n}\n\n.form-switch label > span:first-child {\n    @apply absolute block rounded-full;\n    width: 20px;\n    height: 20px;\n    top: 2px;\n    left: 2px;\n    right: 50%;\n    transition: all .15s ease-out;\n}\n\n.form-switch input[type=\"checkbox\"]:checked + label {\n    @apply bg-indigo-500;\n}\n\n.form-switch input[type=\"checkbox\"]:checked + label > span:first-child {\n    left: 22px;\n}\n\n.form-switch input[type=\"checkbox\"]:disabled + label {\n    @apply cursor-not-allowed bg-slate-100 border border-slate-200;\n}\n\n.form-switch input[type=\"checkbox\"]:disabled + label > span:first-child {\n    @apply bg-slate-400;\n}", "",{"version":3,"sources":["webpack://./src/css/additional-styles/toggle-switch.css"],"names":[],"mappings":"AAAA,mBAAmB;AACnB;IACI,2BAA2B;IAC3B,WAAW;AACf;;AAEA;IACI,4DAA4D;AAChE;;AAEA;IACI,kCAAkC;IAClC,WAAW;IACX,YAAY;IACZ,QAAQ;IACR,SAAS;IACT,UAAU;IACV,6BAA6B;AACjC;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,8DAA8D;AAClE;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":["/* Switch element */\n.form-switch {\n    @apply relative select-none;\n    width: 44px;\n}\n\n.form-switch label {\n    @apply block overflow-hidden cursor-pointer h-6 rounded-full;\n}\n\n.form-switch label > span:first-child {\n    @apply absolute block rounded-full;\n    width: 20px;\n    height: 20px;\n    top: 2px;\n    left: 2px;\n    right: 50%;\n    transition: all .15s ease-out;\n}\n\n.form-switch input[type=\"checkbox\"]:checked + label {\n    @apply bg-indigo-500;\n}\n\n.form-switch input[type=\"checkbox\"]:checked + label > span:first-child {\n    left: 22px;\n}\n\n.form-switch input[type=\"checkbox\"]:disabled + label {\n    @apply cursor-not-allowed bg-slate-100 border border-slate-200;\n}\n\n.form-switch input[type=\"checkbox\"]:disabled + label > span:first-child {\n    @apply bg-slate-400;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/additional-styles/utility-patterns.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/additional-styles/utility-patterns.css ***!
  \**********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Typography */\n.h1 {\n    @apply text-4xl font-extrabold tracking-tighter;\n}\n\n.h2 {\n    @apply text-3xl font-extrabold tracking-tighter;\n}\n\n.h3 {\n    @apply text-3xl font-extrabold;\n}\n\n.h4 {\n    @apply text-2xl font-extrabold tracking-tight;\n}\n\n@screen md {\n    .h1 {\n        @apply text-5xl;\n    }\n\n    .h2 {\n        @apply text-4xl;\n    }\n}\n\n/* Buttons */\n.btn,\n.btn-lg,\n.btn-sm,\n.btn-xs {\n    @apply font-medium text-sm inline-flex items-center justify-center border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out;\n}\n\n.btn {\n    @apply px-3 py-2;\n}\n\n.btn-lg {\n    @apply px-4 py-3;\n}\n\n.btn-sm {\n    @apply px-2 py-1;\n}\n\n.btn-xs {\n    @apply px-2 py-0.5;\n}\n\n/* Forms */\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n}\n\n.form-input,\n.form-textarea,\n.form-multiselect,\n.form-select,\n.form-checkbox,\n.form-radio {\n    @apply text-sm text-slate-800 bg-white border;\n}\n\n.form-input,\n.form-textarea,\n.form-multiselect,\n.form-select,\n.form-checkbox {\n    @apply rounded;\n}\n\n.form-input,\n.form-textarea,\n.form-multiselect,\n.form-select {\n    @apply leading-5 py-2 px-3 border-slate-200 hover:border-slate-300 focus:border-indigo-300 shadow-sm;\n}\n\n.form-input,\n.form-textarea {\n    @apply placeholder-slate-400;\n}\n\n.form-select {\n    @apply pr-10;\n}\n\n.form-checkbox,\n.form-radio {\n    @apply text-indigo-500 border border-slate-300;\n}\n\n/* Chrome, Safari and Opera */\n.no-scrollbar::-webkit-scrollbar {\n  display: none;\n}\n\n.no-scrollbar {\n  -ms-overflow-style: none;  /* IE and Edge */\n  scrollbar-width: none;  /* Firefox */\n}", "",{"version":3,"sources":["webpack://./src/css/additional-styles/utility-patterns.css"],"names":[],"mappings":"AAAA,eAAe;AACf;IACI,+CAA+C;AACnD;;AAEA;IACI,+CAA+C;AACnD;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;AACJ;;AAEA,YAAY;AACZ;;;;IAII,4JAA4J;AAChK;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA,UAAU;AACV;;;;EAIE,wBAAwB;AAC1B;;AAEA;;;;;;IAMI,6CAA6C;AACjD;;AAEA;;;;;IAKI,cAAc;AAClB;;AAEA;;;;IAII,oGAAoG;AACxG;;AAEA;;IAEI,4BAA4B;AAChC;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,8CAA8C;AAClD;;AAEA,6BAA6B;AAC7B;EACE,aAAa;AACf;;AAEA;EACE,wBAAwB,GAAG,gBAAgB;EAC3C,qBAAqB,GAAG,YAAY;AACtC","sourcesContent":["/* Typography */\n.h1 {\n    @apply text-4xl font-extrabold tracking-tighter;\n}\n\n.h2 {\n    @apply text-3xl font-extrabold tracking-tighter;\n}\n\n.h3 {\n    @apply text-3xl font-extrabold;\n}\n\n.h4 {\n    @apply text-2xl font-extrabold tracking-tight;\n}\n\n@screen md {\n    .h1 {\n        @apply text-5xl;\n    }\n\n    .h2 {\n        @apply text-4xl;\n    }\n}\n\n/* Buttons */\n.btn,\n.btn-lg,\n.btn-sm,\n.btn-xs {\n    @apply font-medium text-sm inline-flex items-center justify-center border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out;\n}\n\n.btn {\n    @apply px-3 py-2;\n}\n\n.btn-lg {\n    @apply px-4 py-3;\n}\n\n.btn-sm {\n    @apply px-2 py-1;\n}\n\n.btn-xs {\n    @apply px-2 py-0.5;\n}\n\n/* Forms */\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n}\n\n.form-input,\n.form-textarea,\n.form-multiselect,\n.form-select,\n.form-checkbox,\n.form-radio {\n    @apply text-sm text-slate-800 bg-white border;\n}\n\n.form-input,\n.form-textarea,\n.form-multiselect,\n.form-select,\n.form-checkbox {\n    @apply rounded;\n}\n\n.form-input,\n.form-textarea,\n.form-multiselect,\n.form-select {\n    @apply leading-5 py-2 px-3 border-slate-200 hover:border-slate-300 focus:border-indigo-300 shadow-sm;\n}\n\n.form-input,\n.form-textarea {\n    @apply placeholder-slate-400;\n}\n\n.form-select {\n    @apply pr-10;\n}\n\n.form-checkbox,\n.form-radio {\n    @apply text-indigo-500 border border-slate-300;\n}\n\n/* Chrome, Safari and Opera */\n.no-scrollbar::-webkit-scrollbar {\n  display: none;\n}\n\n.no-scrollbar {\n  -ms-overflow-style: none;  /* IE and Edge */\n  scrollbar-width: none;  /* Firefox */\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n    This is a mess, I know. My frontend-fu is not strong.\n*/\n\n@keyframes fadein {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n  \n  .app {\n    /* Disable text selection, or your app will feel like a web page */\n  \n    /* Cover the whole window */\n    height: 100%;\n  \n    /* Smoother startup */\n    animation: fadein 0.5s;\n  }\n\n.highlight {\n    color: rgb(108 43 217);\n}\n.mt-4 {\n    margin-top: 1rem;\n}\n\n.float-right {\n    float: right;\n}\n\n.next-step-button {\n    float: right;\n    clear: both;\n    margin-top: -30px;\n    margin-right: 10px;\n}\n\n.previous-step-button {\n    float: left;\n    clear: both;\n    margin-top: -30px;\n    margin-left: 10px;\n}\n\n.pb-100px {\n    padding-bottom: 100px;\n}\n\n.pb-30px {\n    padding-bottom: 30px;\n}\n\n.status-badge {\n    display: inline;\n}\n\nbutton[disabled] {\n    opacity: 0.5;\n    cursor: not-allowed;\n}\n\n#root_domains, #root_headers {\n    min-width: 500px;\n}\n\n#root_acceptFilters, #root_rejectFilters, #root_includeDirs, #root_excludeDirs {\n    min-width: 500px;\n}\n\n.bg-purple-100 {\n    background-color: rgb(217, 211, 227);\n}\n.bg-purple-700 {\n    background-color: rgb(108 43 217);\n}\n\na {\n    color: rgb(108 43 217);\n}\na:hover, a:focus {\n    color: rgb(85 33 181);\n}\nbutton a, .button a {\n    color: white;\n}\nbutton:hover, .button:hover {\n    background-color: rgb(85 33 181);\n}\nbutton a:hover, .button a:focus {\n    color: white;\n}\n\na strong {\n    color: rgb(71 85 105);\n}\n\na strong:hover, a strong:focus {\n    color: rgb(85 33 181);\n}\n\n.bg-purple-800 {\n    background-color: rgb(85 33 181);\n}\n\n.float-left-important {\n    float: left !important;\n}\n\n.btn.btn-info {\n    background-color: rgb(108 43 217);\n    color: white;\n}\n\n.rjsf button[type=\"submit\"] { \n    margin-top: 20px;\n    visibility: hidden;\n}\n\n.rjsf {\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n    border-radius: 20px;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n\nlabel {\n    font-weight: bold;\n}\n\n.form-group.field {\n    margin-bottom: 20px;\n}\n\n\n.form-label {\n    margin-right: 15px;\n    font-weight: bold;;\n}\n\n.form-check-label {\n    font-weight: bold;\n    margin-left: 10px;\n}\n\n.form-group .row {\n    margin-bottom: 30px !important;\n}\n\n[type=integer] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background-color: #fff;\n    border-color: #6b7280;\n    border-width: 1px;\n    border-radius: 0;\n    padding: .5rem .75rem;\n    font-size: 1rem;\n    line-height: 1.5rem;\n    --tw-shadow: 0 0 #0000;\n}\n\nh5 {\n    font-weight: bold;;\n}\n\n.field-description {\n    margin-bottom: 10px;\n}\n\n.new-folder {\n    margin-top: -60px;\n    margin-left: -60px;\n    position: absolute;\n}\n\n.checkbox {\n    display: flex;\n    flex-direction: column-reverse;\n}\n\n.checkbox span {\n    font-weight: bold;\n    margin-left: 10px;\n}\n\n.download-info {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.clone-logs {\n    max-height: 200px;\n    overflow-y: scroll;\n    display: flex;\n    flex-direction: column-reverse;\n}\n\n#root_basePath, #root_cookiesFilePath {\n    width: 60%;\n    display: block;\n    margin: auto;\n}\n\n.clone-path {\n    font-weight: bold;\n    font-family: monospace;\n    font-size: 1rem;\n    display: block;\n}\n\n.pb-5 {\n    padding-bottom: 1.25rem;\n}\n\n.dashboard-card {\n    max-height: 450px;\n    overflow-y: scroll;\n}\n\n.status-filters {\n    margin-bottom: 30px;\n}\n.status-filter {\n    cursor: pointer;\n    display: inline;\n    margin-right: 10px;\n    opacity: 0.5;\n}\n.status-filter.active {\n    opacity: 1.0\n}\n\n.react-tabs__tab-list {\n    margin-bottom: 0px;\n}", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;;CAEC;;AAED;IACI;MACE,UAAU;IACZ;IACA;MACE,UAAU;IACZ;EACF;;EAEA;IACE,kEAAkE;;IAElE,2BAA2B;IAC3B,YAAY;;IAEZ,qBAAqB;IACrB,sBAAsB;EACxB;;AAEF;IACI,sBAAsB;AAC1B;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;AACxC;AACA;IACI,iCAAiC;AACrC;;AAEA;IACI,sBAAsB;AAC1B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,YAAY;AAChB;AACA;IACI,gCAAgC;AACpC;AACA;IACI,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB;;;AAGA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,wBAAwB;IACxB,qBAAqB;IACrB,gBAAgB;IAChB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;IAChB,qBAAqB;IACrB,eAAe;IACf,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,UAAU;IACV,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,eAAe;IACf,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI;AACJ;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["/*\n    This is a mess, I know. My frontend-fu is not strong.\n*/\n\n@keyframes fadein {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n  \n  .app {\n    /* Disable text selection, or your app will feel like a web page */\n  \n    /* Cover the whole window */\n    height: 100%;\n  \n    /* Smoother startup */\n    animation: fadein 0.5s;\n  }\n\n.highlight {\n    color: rgb(108 43 217);\n}\n.mt-4 {\n    margin-top: 1rem;\n}\n\n.float-right {\n    float: right;\n}\n\n.next-step-button {\n    float: right;\n    clear: both;\n    margin-top: -30px;\n    margin-right: 10px;\n}\n\n.previous-step-button {\n    float: left;\n    clear: both;\n    margin-top: -30px;\n    margin-left: 10px;\n}\n\n.pb-100px {\n    padding-bottom: 100px;\n}\n\n.pb-30px {\n    padding-bottom: 30px;\n}\n\n.status-badge {\n    display: inline;\n}\n\nbutton[disabled] {\n    opacity: 0.5;\n    cursor: not-allowed;\n}\n\n#root_domains, #root_headers {\n    min-width: 500px;\n}\n\n#root_acceptFilters, #root_rejectFilters, #root_includeDirs, #root_excludeDirs {\n    min-width: 500px;\n}\n\n.bg-purple-100 {\n    background-color: rgb(217, 211, 227);\n}\n.bg-purple-700 {\n    background-color: rgb(108 43 217);\n}\n\na {\n    color: rgb(108 43 217);\n}\na:hover, a:focus {\n    color: rgb(85 33 181);\n}\nbutton a, .button a {\n    color: white;\n}\nbutton:hover, .button:hover {\n    background-color: rgb(85 33 181);\n}\nbutton a:hover, .button a:focus {\n    color: white;\n}\n\na strong {\n    color: rgb(71 85 105);\n}\n\na strong:hover, a strong:focus {\n    color: rgb(85 33 181);\n}\n\n.bg-purple-800 {\n    background-color: rgb(85 33 181);\n}\n\n.float-left-important {\n    float: left !important;\n}\n\n.btn.btn-info {\n    background-color: rgb(108 43 217);\n    color: white;\n}\n\n.rjsf button[type=\"submit\"] { \n    margin-top: 20px;\n    visibility: hidden;\n}\n\n.rjsf {\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n    border-radius: 20px;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n\nlabel {\n    font-weight: bold;\n}\n\n.form-group.field {\n    margin-bottom: 20px;\n}\n\n\n.form-label {\n    margin-right: 15px;\n    font-weight: bold;;\n}\n\n.form-check-label {\n    font-weight: bold;\n    margin-left: 10px;\n}\n\n.form-group .row {\n    margin-bottom: 30px !important;\n}\n\n[type=integer] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background-color: #fff;\n    border-color: #6b7280;\n    border-width: 1px;\n    border-radius: 0;\n    padding: .5rem .75rem;\n    font-size: 1rem;\n    line-height: 1.5rem;\n    --tw-shadow: 0 0 #0000;\n}\n\nh5 {\n    font-weight: bold;;\n}\n\n.field-description {\n    margin-bottom: 10px;\n}\n\n.new-folder {\n    margin-top: -60px;\n    margin-left: -60px;\n    position: absolute;\n}\n\n.checkbox {\n    display: flex;\n    flex-direction: column-reverse;\n}\n\n.checkbox span {\n    font-weight: bold;\n    margin-left: 10px;\n}\n\n.download-info {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.clone-logs {\n    max-height: 200px;\n    overflow-y: scroll;\n    display: flex;\n    flex-direction: column-reverse;\n}\n\n#root_basePath, #root_cookiesFilePath {\n    width: 60%;\n    display: block;\n    margin: auto;\n}\n\n.clone-path {\n    font-weight: bold;\n    font-family: monospace;\n    font-size: 1rem;\n    display: block;\n}\n\n.pb-5 {\n    padding-bottom: 1.25rem;\n}\n\n.dashboard-card {\n    max-height: 450px;\n    overflow-y: scroll;\n}\n\n.status-filters {\n    margin-bottom: 30px;\n}\n.status-filter {\n    cursor: pointer;\n    display: inline;\n    margin-right: 10px;\n    opacity: 0.5;\n}\n.status-filter.active {\n    opacity: 1.0\n}\n\n.react-tabs__tab-list {\n    margin-bottom: 0px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/dist.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/dist.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=fallback);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;box-sizing:border-box;touch-action:manipulation;background:#fff;box-shadow:1px 0 #e6e6e6,-1px 0 #e6e6e6,0 1px #e6e6e6,0 -1px #e6e6e6,0 3px 13px #00000014}.flatpickr-calendar.open,.flatpickr-calendar.inline{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown .3s cubic-bezier(.23,1,.32,1);animation:fpFadeInDown .3s cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px)}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){box-shadow:none!important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){box-shadow:-2px 0 #e6e6e6,5px 0 #e6e6e6}.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:before,.flatpickr-calendar:after{position:absolute;display:block;pointer-events:none;border:solid transparent;content:\"\";height:0;width:0;left:22px}.flatpickr-calendar.rightMost:before,.flatpickr-calendar.arrowRight:before,.flatpickr-calendar.rightMost:after,.flatpickr-calendar.arrowRight:after{left:auto;right:22px}.flatpickr-calendar.arrowCenter:before,.flatpickr-calendar.arrowCenter:after{left:50%;right:50%}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:flex}.flatpickr-months .flatpickr-month{background:transparent;color:#000000e6;fill:#000000e6;height:34px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;flex:1}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{text-decoration:none;cursor:pointer;position:absolute;top:0;height:34px;padding:10px;z-index:3;color:#000000e6;fill:#000000e6}.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-months .flatpickr-next-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-prev-month i,.flatpickr-months .flatpickr-next-month i{position:relative}.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,.flatpickr-months .flatpickr-next-month.flatpickr-prev-month{left:0}.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,.flatpickr-months .flatpickr-next-month.flatpickr-next-month{right:0}.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover{color:#959ea9}.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:14px;height:14px}.flatpickr-months .flatpickr-prev-month svg path,.flatpickr-months .flatpickr-next-month svg path{transition:fill .1s;fill:inherit}.numInputWrapper{position:relative;height:auto}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-outer-spin-button,.numInputWrapper input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57,57,57,.15);box-sizing:border-box}.numInputWrapper span:hover{background:rgba(0,0,0,.1)}.numInputWrapper span:active{background:rgba(0,0,0,.2)}.numInputWrapper span:after{display:block;content:\"\";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57,57,57,.6);top:26%}.numInputWrapper span.arrowDown{top:50%}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57,57,57,.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto}.numInputWrapper span svg path{fill:#00000080}.numInputWrapper:hover{background:rgba(0,0,0,.05)}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0;line-height:1;height:34px;display:inline-block;text-align:center;transform:translate(0)}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:.5ch;padding:0}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\fffd;display:inline-block}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:#000000e6}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:#000000e6}.flatpickr-current-month input.cur-year{background:transparent;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 .5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:#00000080;background:transparent;pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:transparent;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0;outline:none;padding:0 0 0 .5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto}.flatpickr-current-month .flatpickr-monthDropdown-months:focus,.flatpickr-current-month .flatpickr-monthDropdown-months:active{outline:none}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0,0,0,.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:transparent;outline:none;padding:0}.flatpickr-weekdays{background:transparent;text-align:center;overflow:hidden;width:100%;display:flex;align-items:center;height:28px}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:flex;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:transparent;color:#0000008a;line-height:1;margin:0;text-align:center;display:block;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0}.flatpickr-days{position:relative;overflow:hidden;display:flex;align-items:flex-start;width:307.875px}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;box-sizing:border-box;display:inline-block;display:flex;flex-wrap:wrap;-ms-flex-wrap:wrap;justify-content:space-around;transform:translate(0);opacity:1}.dayContainer+.dayContainer{box-shadow:-1px 0 #e6e6e6}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;justify-content:center;text-align:center}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-day.today{border-color:#959ea9}.flatpickr-day.today:hover,.flatpickr-day.today:focus{border-color:#959ea9;background:#959ea9;color:#fff}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{background:#569ff7;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)){box-shadow:-10px 0 #569ff7}.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;box-shadow:-5px 0 #e6e6e6,5px 0 #e6e6e6}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{color:#3939394d;background:transparent;border-color:transparent;cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:#3939391a}.flatpickr-day.week.selected{border-radius:0;box-shadow:-5px 0 #569ff7,5px 0 #569ff7}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;box-shadow:1px 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:#3939394d;background:transparent;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:flex;box-sizing:border-box;overflow:hidden}.flatpickr-rContainer{display:inline-block;padding:0;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;box-sizing:border-box;overflow:hidden;display:flex}.flatpickr-time:after{content:\"\";display:table;clear:both}.flatpickr-time .numInputWrapper{flex:1;width:40%;height:40px;float:left}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-time input.flatpickr-hour{font-weight:700}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:inherit;float:left;line-height:inherit;color:#393939;font-weight:700;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time input:hover,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time .flatpickr-am-pm:focus{background:#eee}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translate(0)}}@keyframes fpFadeInDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translate(0)}}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: \"\"}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}[type=text],[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem;--tw-shadow:0 0 #0000}[type=text]:focus,[type=email]:focus,[type=url]:focus,[type=password]:focus,[type=number]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=month]:focus,[type=search]:focus,[type=tel]:focus,[type=time]:focus,[type=week]:focus,[multiple]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#2563eb}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}select{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;-webkit-print-color-adjust:exact;color-adjust:exact}[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;color-adjust:unset}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#2563eb;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow:0 0 #0000}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked{border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type=checkbox]:checked{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")}[type=radio]:checked{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\")}[type=checkbox]:checked:hover,[type=checkbox]:checked:focus,[type=radio]:checked:hover,[type=radio]:checked:focus{border-color:transparent;background-color:currentColor}[type=checkbox]:indeterminate{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{border-color:transparent;background-color:currentColor}[type=file]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type=file]:focus{outline:1px auto -webkit-focus-ring-color}*,:before,:after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.h1{font-size:2.25rem;line-height:1.25;font-weight:800;letter-spacing:-.05em}.h2{font-size:1.88rem;line-height:1.33;font-weight:800;letter-spacing:-.05em}.h3{font-size:1.88rem;line-height:1.33;letter-spacing:-.01em;font-weight:800}.h4{font-size:1.5rem;line-height:1.33;font-weight:800;letter-spacing:-.025em}@media (min-width: 768px){.h1{font-size:3rem;line-height:1.25;letter-spacing:-.02em}.h2{font-size:2.25rem;line-height:1.25;letter-spacing:-.02em}}.btn,.btn-sm,.btn-xs{display:inline-flex;align-items:center;justify-content:center;border-radius:.25rem;border-width:1px;border-color:transparent;font-size:.875rem;line-height:1.5715;font-weight:500;line-height:1.25rem;--tw-shadow:0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn{padding:.5rem .625rem}.btn-sm{padding:.25rem .5rem}.btn-xs{padding:.125rem .5rem}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}.form-input,.form-textarea,.form-multiselect,.form-select,.form-checkbox,.form-radio{border-width:1px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));font-size:.875rem;line-height:1.5715;--tw-text-opacity:1;color:rgb(30 41 59 / var(--tw-text-opacity))}.form-input,.form-textarea,.form-multiselect,.form-select,.form-checkbox{border-radius:.25rem}.form-input,.form-textarea,.form-multiselect,.form-select{--tw-border-opacity:1;border-color:rgb(226 232 240 / var(--tw-border-opacity));padding:.5rem .75rem;line-height:1.25rem;--tw-shadow:0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.form-input:hover,.form-textarea:hover,.form-multiselect:hover,.form-select:hover{--tw-border-opacity:1;border-color:rgb(203 213 225 / var(--tw-border-opacity))}.form-input:focus,.form-textarea:focus,.form-multiselect:focus,.form-select:focus{--tw-border-opacity:1;border-color:rgb(165 180 252 / var(--tw-border-opacity))}.form-input::-moz-placeholder,.form-textarea::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(148 163 184 / var(--tw-placeholder-opacity))}.form-input:-ms-input-placeholder,.form-textarea:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgb(148 163 184 / var(--tw-placeholder-opacity))}.form-input::placeholder,.form-textarea::placeholder{--tw-placeholder-opacity:1;color:rgb(148 163 184 / var(--tw-placeholder-opacity))}.form-select{padding-right:2.5rem}.form-checkbox,.form-radio{border-width:1px;--tw-border-opacity:1;border-color:rgb(203 213 225 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(99 102 241 / var(--tw-text-opacity))}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}input[type=range]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#ccc;border-radius:3px;height:6px;margin-top:15px;margin-bottom:15px;--thumb-size: 36px}input[type=range]::-webkit-slider-thumb{appearance:none;-webkit-appearance:none;background-color:#000;background-image:url(\"data:image/svg+xml,%3Csvg width='12' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 .5v7L12 4zM0 4l4 3.5v-7z' fill='%23FFF' fill-rule='nonzero'/%3E%3C/svg%3E\");background-position:center;background-repeat:no-repeat;border:0;border-radius:50%;cursor:pointer;height:36px;width:36px}input[type=range]::-moz-range-thumb{background-color:#000;background-image:url(\"data:image/svg+xml,%3Csvg width='12' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 .5v7L12 4zM0 4l4 3.5v-7z' fill='%23FFF' fill-rule='nonzero'/%3E%3C/svg%3E\");background-position:center;background-repeat:no-repeat;border:0;border:none;border-radius:50%;cursor:pointer;height:36px;width:36px}input[type=range]::-ms-thumb{background-color:#000;background-image:url(\"data:image/svg+xml,%3Csvg width='12' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 .5v7L12 4zM0 4l4 3.5v-7z' fill='%23FFF' fill-rule='nonzero'/%3E%3C/svg%3E\");background-position:center;background-repeat:no-repeat;border:0;border-radius:50%;cursor:pointer;height:36px;width:36px}input[type=range]::-moz-focus-outer{border:0}.form-switch{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:44px}.form-switch label{display:block;height:1.5rem;cursor:pointer;overflow:hidden;border-radius:9999px}.form-switch label>span:first-child{position:absolute;display:block;border-radius:9999px;width:20px;height:20px;top:2px;left:2px;right:50%;transition:all .15s ease-out}.form-switch input[type=checkbox]:checked+label{--tw-bg-opacity:1;background-color:rgb(99 102 241 / var(--tw-bg-opacity))}.form-switch input[type=checkbox]:checked+label>span:first-child{left:22px}@keyframes fpFadeInDown{0%{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translate(0)}}.flatpickr-calendar{border:inherit;left:50%;border-radius:.25rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(226 232 240 / var(--tw-border-opacity));--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, .08), 0 4px 6px -2px rgba(0, 0, 0, .01);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);margin-left:-150px;padding:24px;width:300px}@media (min-width: 1024px){.flatpickr-calendar{left:auto}.flatpickr-calendar{right:0px}.flatpickr-calendar{margin-left:0}}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown .2s ease-out;animation:fpFadeInDown .2s ease-out}.flatpickr-calendar.static{position:absolute;top:calc(100% + 4px)}.flatpickr-calendar.static.open{z-index:20}.flatpickr-days{width:252px}.dayContainer{width:252px;min-width:252px;max-width:252px}.flatpickr-day{--tw-bg-opacity:1;background-color:rgb(248 250 252 / var(--tw-bg-opacity));font-size:.875rem;line-height:1.5715;font-weight:500;--tw-text-opacity:1;color:rgb(71 85 105 / var(--tw-text-opacity));max-width:36px;height:36px;line-height:36px}.flatpickr-day,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay{border:none}.flatpickr-day,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange,.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange,.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:0}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{--tw-text-opacity:1;color:rgb(148 163 184 / var(--tw-text-opacity))}.rangeMode .flatpickr-day{margin:0}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{--tw-bg-opacity:1;background-color:rgb(99 102 241 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(238 242 255 / var(--tw-text-opacity))}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus,.flatpickr-day.today:hover,.flatpickr-day.today:focus{--tw-bg-opacity:1;background-color:rgb(129 140 248 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(238 242 255 / var(--tw-text-opacity))}.flatpickr-day.inRange,.flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)){box-shadow:none}.flatpickr-months{align-items:center;margin-top:-8px;margin-bottom:6px}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{position:static;height:auto;--tw-text-opacity:1;color:rgb(71 85 105 / var(--tw-text-opacity))}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:7px;height:11px}.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover,.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:inherit;--tw-text-opacity:1;color:rgb(148 163 184 / var(--tw-text-opacity))}.flatpickr-months .flatpickr-prev-month{margin-left:-10px}.flatpickr-months .flatpickr-next-month{margin-right:-10px}.flatpickr-months .flatpickr-month{--tw-text-opacity:1;color:rgb(30 41 59 / var(--tw-text-opacity));height:auto;line-height:inherit}.flatpickr-current-month{font-size:.875rem;line-height:1.5715;font-weight:500;position:static;height:auto;width:auto;left:auto;padding:0}.flatpickr-current-month span.cur-month{margin:0;font-weight:500}.flatpickr-current-month span.cur-month:hover{background:none}.flatpickr-current-month input.cur-year{font-weight:inherit;box-shadow:none!important}.numInputWrapper:hover{background:none}.numInputWrapper span{display:none}span.flatpickr-weekday{font-size:.75rem;line-height:1.5;font-weight:500;--tw-text-opacity:1;color:rgb(148 163 184 / var(--tw-text-opacity))}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{display:none}.form-input:focus,.form-textarea:focus,.form-multiselect:focus,.form-select:focus,.form-checkbox:focus,.form-radio:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.invisible{visibility:hidden}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:-webkit-sticky;position:sticky}.inset-0{top:0px;right:0px;bottom:0px;left:0px}.bottom-0{bottom:0px}.right-0{right:0px}.top-full{top:100%}.top-0{top:0px}.left-0{left:0px}.bottom-full{bottom:100%}.left-1\\/2{left:50%}.right-auto{right:auto}.top-20{top:5rem}.z-60{z-index:60}.z-10{z-index:10}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.col-span-full{grid-column:1 / -1}.-m-1{margin:-.25rem}.mx-auto{margin-left:auto;margin-right:auto}.mx-3{margin-left:.75rem;margin-right:.75rem}.my-1{margin-top:.25rem;margin-bottom:.25rem}.my-2{margin-top:.5rem;margin-bottom:.5rem}.mr-2{margin-right:.5rem}.ml-2{margin-left:.5rem}.mb-1{margin-bottom:.25rem}.mb-8{margin-bottom:2rem}.ml-5{margin-left:1.25rem}.mt-1{margin-top:.25rem}.-mb-px{margin-bottom:-1px}.ml-3{margin-left:.75rem}.mb-10{margin-bottom:2.5rem}.mt-3{margin-top:.75rem}.mb-0\\.5{margin-bottom:.125rem}.mb-0{margin-bottom:0}.ml-1{margin-left:.25rem}.mt-auto{margin-top:auto}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.-ml-px{margin-left:-1px}.mr-3{margin-right:.75rem}.-mt-4{margin-top:-1rem}.mr-16{margin-right:4rem}.-mr-48{margin-right:-12rem}.ml-4{margin-left:1rem}.mb-3{margin-bottom:.75rem}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-screen{height:100vh}.h-4{height:1rem}.h-8{height:2rem}.h-16{height:4rem}.h-6{height:1.5rem}.h-3{height:.75rem}.h-9{height:2.25rem}.h-10{height:2.5rem}.h-2\\.5{height:.625rem}.h-2{height:.5rem}.max-h-full{max-height:100%}.w-full{width:100%}.w-4{width:1rem}.w-8{width:2rem}.w-6{width:1.5rem}.w-px{width:1px}.w-64{width:16rem}.w-3{width:.75rem}.w-60{width:15rem}.w-9{width:2.25rem}.w-10{width:2.5rem}.w-2\\.5{width:.625rem}.w-2{width:.5rem}.min-w-36{min-width:9rem}.min-w-44{min-width:11rem}.min-w-56{min-width:14rem}.min-w-80{min-width:20rem}.max-w-9xl{max-width:96rem}.max-w-2xl{max-width:42rem}.flex-1{flex:1 1 0%}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.table-auto{table-layout:auto}.origin-top-right{transform-origin:top right}.-translate-y-2{--tw-translate-y:-.5rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-0{--tw-translate-y:0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x:0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-64{--tw-translate-x:-16rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-4{--tw-translate-y:1rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-flow-col{grid-auto-flow:column}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-6{gap:1.5rem}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.-space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(-.75rem * var(--tw-space-x-reverse));margin-left:calc(-.75rem * calc(1 - var(--tw-space-x-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-slate-100>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgb(241 245 249 / var(--tw-divide-opacity))}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-scroll{overflow-y:scroll}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.rounded-full{border-radius:9999px}.rounded{border-radius:.25rem}.rounded-sm{border-radius:.125rem}.border{border-width:1px}.border-2{border-width:2px}.border-0{border-width:0px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-slate-200{--tw-border-opacity:1;border-color:rgb(226 232 240 / var(--tw-border-opacity))}.border-slate-100{--tw-border-opacity:1;border-color:rgb(241 245 249 / var(--tw-border-opacity))}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.bg-yellow-500{--tw-bg-opacity:1;background-color:rgb(234 179 8 / var(--tw-bg-opacity))}.bg-indigo-500{--tw-bg-opacity:1;background-color:rgb(99 102 241 / var(--tw-bg-opacity))}.bg-slate-800{--tw-bg-opacity:1;background-color:rgb(30 41 59 / var(--tw-bg-opacity))}.bg-slate-100{--tw-bg-opacity:1;background-color:rgb(241 245 249 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-slate-200{--tw-bg-opacity:1;background-color:rgb(226 232 240 / var(--tw-bg-opacity))}.bg-slate-900{--tw-bg-opacity:1;background-color:rgb(15 23 42 / var(--tw-bg-opacity))}.bg-slate-50{--tw-bg-opacity:1;background-color:rgb(248 250 252 / var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.bg-rose-500{--tw-bg-opacity:1;background-color:rgb(244 63 94 / var(--tw-bg-opacity))}.bg-sky-500{--tw-bg-opacity:1;background-color:rgb(14 165 233 / var(--tw-bg-opacity))}.bg-indigo-200{--tw-bg-opacity:1;background-color:rgb(199 210 254 / var(--tw-bg-opacity))}.bg-opacity-30{--tw-bg-opacity:.3}.fill-current{fill:currentColor}.p-3{padding:.75rem}.p-4{padding:1rem}.p-2{padding:.5rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.px-1\\.5{padding-left:.375rem;padding-right:.375rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-4{padding-left:1rem;padding-right:1rem}.py-8{padding-top:2rem;padding-bottom:2rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-2{padding-left:.5rem;padding-right:.5rem}.pt-2{padding-top:.5rem}.pb-2{padding-bottom:.5rem}.pb-6{padding-bottom:1.5rem}.pr-3{padding-right:.75rem}.pl-3{padding-left:.75rem}.pl-9{padding-left:2.25rem}.pt-3{padding-top:.75rem}.pt-1\\.5{padding-top:.375rem}.pt-1{padding-top:.25rem}.pt-5{padding-top:1.25rem}.pl-10{padding-left:2.5rem}.pr-4{padding-right:1rem}.pt-0\\.5{padding-top:.125rem}.pt-0{padding-top:0}.text-left{text-align:left}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.5715}.text-3xl{font-size:1.88rem;line-height:1.33;letter-spacing:-.01em}.text-xs{font-size:.75rem;line-height:1.5}.text-lg{font-size:1.125rem;line-height:1.5;letter-spacing:-.01em}.text-2xl{font-size:1.5rem;line-height:1.33;letter-spacing:-.01em}.font-bold{font-weight:700}.font-semibold{font-weight:600}.font-medium{font-weight:500}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-slate-800{--tw-text-opacity:1;color:rgb(30 41 59 / var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-slate-50{--tw-text-opacity:1;color:rgb(248 250 252 / var(--tw-text-opacity))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity))}.text-slate-400{--tw-text-opacity:1;color:rgb(148 163 184 / var(--tw-text-opacity))}.text-slate-200{--tw-text-opacity:1;color:rgb(226 232 240 / var(--tw-text-opacity))}.\\!text-indigo-500{--tw-text-opacity:1 !important;color:rgb(99 102 241 / var(--tw-text-opacity))!important}.text-slate-600{--tw-text-opacity:1;color:rgb(71 85 105 / var(--tw-text-opacity))}.text-indigo-600{--tw-text-opacity:1;color:rgb(79 70 229 / var(--tw-text-opacity))}.text-indigo-200{--tw-text-opacity:1;color:rgb(199 210 254 / var(--tw-text-opacity))}.text-indigo-500{--tw-text-opacity:1;color:rgb(99 102 241 / var(--tw-text-opacity))}.text-indigo-300{--tw-text-opacity:1;color:rgb(165 180 252 / var(--tw-text-opacity))}.text-slate-700{--tw-text-opacity:1;color:rgb(51 65 85 / var(--tw-text-opacity))}.\\!text-indigo-600{--tw-text-opacity:1 !important;color:rgb(79 70 229 / var(--tw-text-opacity))!important}.text-rose-500{--tw-text-opacity:1;color:rgb(244 63 94 / var(--tw-text-opacity))}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity))}.text-sky-500{--tw-text-opacity:1;color:rgb(14 165 233 / var(--tw-text-opacity))}.text-indigo-50{--tw-text-opacity:1;color:rgb(238 242 255 / var(--tw-text-opacity))}.text-rose-50{--tw-text-opacity:1;color:rgb(255 241 242 / var(--tw-text-opacity))}.text-green-50{--tw-text-opacity:1;color:rgb(240 253 244 / var(--tw-text-opacity))}.text-sky-50{--tw-text-opacity:1;color:rgb(240 249 255 / var(--tw-text-opacity))}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.line-through{-webkit-text-decoration-line:line-through;text-decoration-line:line-through}.placeholder-slate-400::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(148 163 184 / var(--tw-placeholder-opacity))}.placeholder-slate-400:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgb(148 163 184 / var(--tw-placeholder-opacity))}.placeholder-slate-400::placeholder{--tw-placeholder-opacity:1;color:rgb(148 163 184 / var(--tw-placeholder-opacity))}.opacity-50{opacity:.5}.opacity-0{opacity:0}.opacity-100{opacity:1}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, .08), 0 4px 6px -2px rgba(0, 0, 0, .01);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-150{transition-duration:.15s}.duration-100{transition-duration:.1s}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.last\\:mb-0:last-child{margin-bottom:0}.last\\:border-0:last-child{border-width:0px}.hover\\:border-slate-300:hover{--tw-border-opacity:1;border-color:rgb(203 213 225 / var(--tw-border-opacity))}.hover\\:bg-indigo-600:hover{--tw-bg-opacity:1;background-color:rgb(79 70 229 / var(--tw-bg-opacity))}.hover\\:bg-slate-200:hover{--tw-bg-opacity:1;background-color:rgb(226 232 240 / var(--tw-bg-opacity))}.hover\\:bg-slate-50:hover{--tw-bg-opacity:1;background-color:rgb(248 250 252 / var(--tw-bg-opacity))}.hover\\:bg-indigo-500:hover{--tw-bg-opacity:1;background-color:rgb(99 102 241 / var(--tw-bg-opacity))}.hover\\:text-slate-400:hover{--tw-text-opacity:1;color:rgb(148 163 184 / var(--tw-text-opacity))}.hover\\:text-slate-500:hover{--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity))}.hover\\:text-slate-600:hover{--tw-text-opacity:1;color:rgb(71 85 105 / var(--tw-text-opacity))}.hover\\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.hover\\:text-slate-200:hover{--tw-text-opacity:1;color:rgb(226 232 240 / var(--tw-text-opacity))}.hover\\:text-slate-800:hover{--tw-text-opacity:1;color:rgb(30 41 59 / var(--tw-text-opacity))}.hover\\:text-rose-600:hover{--tw-text-opacity:1;color:rgb(225 29 72 / var(--tw-text-opacity))}.hover\\:text-slate-900:hover{--tw-text-opacity:1;color:rgb(15 23 42 / var(--tw-text-opacity))}.hover\\:text-indigo-600:hover{--tw-text-opacity:1;color:rgb(79 70 229 / var(--tw-text-opacity))}.hover\\:underline:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.focus\\:border-slate-300:focus{--tw-border-opacity:1;border-color:rgb(203 213 225 / var(--tw-border-opacity))}.focus\\:ring-transparent:focus{--tw-ring-color:transparent}.group:hover .group-hover\\:text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity))}.group:hover .group-hover\\:text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.group:hover .group-hover\\:text-slate-800{--tw-text-opacity:1;color:rgb(30 41 59 / var(--tw-text-opacity))}.group:hover .group-hover\\:text-opacity-50{--tw-text-opacity:.5}.sidebar-expanded .sidebar-expanded\\:rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media (min-width: 640px){.sm\\:col-span-6{grid-column:span 6 / span 6}.sm\\:mb-0{margin-bottom:0}.sm\\:mr-3{margin-right:.75rem}.sm\\:mr-0{margin-right:0}.sm\\:inline{display:inline}.sm\\:flex{display:flex}.sm\\:auto-cols-max{grid-auto-columns:-webkit-max-content;grid-auto-columns:max-content}.sm\\:items-center{align-items:center}.sm\\:justify-start{justify-content:flex-start}.sm\\:justify-end{justify-content:flex-end}.sm\\:justify-between{justify-content:space-between}.sm\\:p-6{padding:1.5rem}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:px-2{padding-left:.5rem;padding-right:.5rem}}@media (min-width: 768px){.md\\:bottom-8{bottom:2rem}.md\\:right-12{right:3rem}.md\\:left-auto{left:auto}.md\\:right-0{right:0px}.md\\:w-auto{width:auto}.md\\:rounded{border-radius:.25rem}.md\\:text-3xl{font-size:1.88rem;line-height:1.33;letter-spacing:-.01em}}@media (min-width: 1024px){.lg\\:static{position:static}.lg\\:left-auto{left:auto}.lg\\:top-auto{top:auto}.lg\\:z-auto{z-index:auto}.lg\\:block{display:block}.lg\\:inline-flex{display:inline-flex}.lg\\:hidden{display:none}.lg\\:w-20{width:5rem}.lg\\:translate-x-0{--tw-translate-x:0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.lg\\:overflow-y-auto{overflow-y:auto}.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:opacity-0{opacity:0}.sidebar-expanded .lg\\:sidebar-expanded\\:block{display:block}.sidebar-expanded .lg\\:sidebar-expanded\\:hidden{display:none}.sidebar-expanded .lg\\:sidebar-expanded\\:\\!w-64{width:16rem!important}.sidebar-expanded .lg\\:sidebar-expanded\\:opacity-100{opacity:1}}@media (min-width: 1280px){.xl\\:col-span-4{grid-column:span 4 / span 4}.xl\\:col-span-8{grid-column:span 8 / span 8}.xl\\:col-span-6{grid-column:span 6 / span 6}.xl\\:block{display:block}}@media (min-width: 1536px){.\\32xl\\:block{display:block}.\\32xl\\:hidden{display:none}.\\32xl\\:\\!w-64{width:16rem!important}.\\32xl\\:opacity-100{opacity:1}}@media (min-width: 480px){.xs\\:block{display:block}}", "",{"version":3,"sources":["webpack://./src/css/dist.css"],"names":[],"mappings":"AAA8F,oBAAoB,sBAAsB,CAAC,SAAS,CAAC,YAAY,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,SAAS,CAAC,sBAAsB,CAAC,cAAc,CAAC,aAAa,CAAC,QAAQ,CAAC,cAAc,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,eAAe,CAAC,qBAAqB,CAAC,yBAAyB,CAAC,eAAe,CAAC,yFAAyF,CAAC,oDAAoD,SAAS,CAAC,gBAAgB,CAAC,kBAAkB,CAAC,yBAAyB,oBAAoB,CAAC,aAAa,CAAC,iCAAiC,4DAA4D,CAAC,oDAAoD,CAAC,2BAA2B,aAAa,CAAC,iBAAiB,CAAC,OAAO,CAAC,2BAA2B,iBAAiB,CAAC,oBAAoB,CAAC,gCAAgC,WAAW,CAAC,aAAa,CAAC,mHAAmH,yBAAyB,CAAC,mHAAmH,uCAAuC,CAAC,uFAAuF,eAAe,CAAC,4BAA4B,CAAC,2BAA2B,CAAC,4CAA4C,aAAa,CAAC,4CAA4C,WAAW,CAAC,4BAA4B,CAAC,uDAAuD,WAAW,CAAC,qDAAqD,iBAAiB,CAAC,aAAa,CAAC,mBAAmB,CAAC,wBAAwB,CAAC,UAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,SAAS,CAAC,oJAAoJ,SAAS,CAAC,UAAU,CAAC,6EAA6E,QAAQ,CAAC,SAAS,CAAC,2BAA2B,gBAAgB,CAAC,aAAa,CAAC,0BAA0B,gBAAgB,CAAC,aAAa,CAAC,uEAAuE,WAAW,CAAC,oCAAoC,2BAA2B,CAAC,mCAAmC,wBAAwB,CAAC,6EAA6E,QAAQ,CAAC,uCAAuC,wBAAwB,CAAC,sCAAsC,qBAAqB,CAAC,0BAA0B,SAAS,CAAC,mBAAmB,iBAAiB,CAAC,oBAAoB,CAAC,kBAAkB,YAAY,CAAC,mCAAmC,sBAAsB,CAAC,eAAe,CAAC,cAAc,CAAC,WAAW,CAAC,aAAa,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,qBAAqB,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,MAAM,CAAC,gFAAgF,oBAAoB,CAAC,cAAc,CAAC,iBAAiB,CAAC,KAAK,CAAC,WAAW,CAAC,YAAY,CAAC,SAAS,CAAC,eAAe,CAAC,cAAc,CAAC,sHAAsH,YAAY,CAAC,oFAAoF,iBAAiB,CAAC,0HAA0H,MAAM,CAAC,0HAA0H,OAAO,CAAC,4FAA4F,aAAa,CAAC,oGAAoG,YAAY,CAAC,wFAAwF,UAAU,CAAC,WAAW,CAAC,kGAAkG,mBAAmB,CAAC,YAAY,CAAC,iBAAiB,iBAAiB,CAAC,WAAW,CAAC,6CAA6C,oBAAoB,CAAC,uBAAuB,UAAU,CAAC,kCAAkC,YAAY,CAAC,oGAAoG,QAAQ,CAAC,uBAAuB,CAAC,sBAAsB,iBAAiB,CAAC,OAAO,CAAC,UAAU,CAAC,mBAAmB,CAAC,UAAU,CAAC,eAAe,CAAC,SAAS,CAAC,cAAc,CAAC,mCAAmC,CAAC,qBAAqB,CAAC,4BAA4B,yBAAyB,CAAC,6BAA6B,yBAAyB,CAAC,4BAA4B,aAAa,CAAC,UAAU,CAAC,iBAAiB,CAAC,8BAA8B,KAAK,CAAC,eAAe,CAAC,oCAAoC,iCAAiC,CAAC,kCAAkC,CAAC,yCAAyC,CAAC,OAAO,CAAC,gCAAgC,OAAO,CAAC,sCAAsC,iCAAiC,CAAC,kCAAkC,CAAC,sCAAsC,CAAC,OAAO,CAAC,0BAA0B,aAAa,CAAC,WAAW,CAAC,+BAA+B,cAAc,CAAC,uBAAuB,0BAA0B,CAAC,4BAA4B,SAAS,CAAC,yBAAyB,cAAc,CAAC,mBAAmB,CAAC,eAAe,CAAC,aAAa,CAAC,iBAAiB,CAAC,SAAS,CAAC,UAAU,CAAC,kBAAkB,CAAC,aAAa,CAAC,WAAW,CAAC,oBAAoB,CAAC,iBAAiB,CAAC,sBAAsB,CAAC,wCAAwC,mBAAmB,CAAC,eAAe,CAAC,aAAa,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,SAAS,CAAC,8CAA8C,0BAA0B,CAAC,0CAA0C,SAAS,CAAC,cAAc,CAAC,oBAAoB,CAAC,6DAA6D,6BAA6B,CAAC,+DAA+D,0BAA0B,CAAC,wCAAwC,sBAAsB,CAAC,qBAAqB,CAAC,aAAa,CAAC,WAAW,CAAC,kBAAkB,CAAC,QAAQ,CAAC,oBAAoB,CAAC,iBAAiB,CAAC,mBAAmB,CAAC,eAAe,CAAC,mBAAmB,CAAC,WAAW,CAAC,QAAQ,CAAC,eAAe,CAAC,sBAAsB,CAAC,4BAA4B,CAAC,yBAAyB,CAAC,oBAAoB,CAAC,8CAA8C,SAAS,CAAC,0GAA0G,cAAc,CAAC,eAAe,CAAC,sBAAsB,CAAC,mBAAmB,CAAC,yDAAyD,mBAAmB,CAAC,sBAAsB,CAAC,WAAW,CAAC,eAAe,CAAC,qBAAqB,CAAC,aAAa,CAAC,cAAc,CAAC,iBAAiB,CAAC,mBAAmB,CAAC,eAAe,CAAC,WAAW,CAAC,mBAAmB,CAAC,eAAe,CAAC,YAAY,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,sBAAsB,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,wBAAwB,CAAC,UAAU,CAAC,+HAA+H,YAAY,CAAC,+DAA+D,0BAA0B,CAAC,wFAAwF,4BAA4B,CAAC,YAAY,CAAC,SAAS,CAAC,oBAAoB,sBAAsB,CAAC,iBAAiB,CAAC,eAAe,CAAC,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,WAAW,CAAC,gDAAgD,YAAY,CAAC,MAAM,CAAC,uBAAuB,cAAc,CAAC,aAAa,CAAC,sBAAsB,CAAC,eAAe,CAAC,aAAa,CAAC,QAAQ,CAAC,iBAAiB,CAAC,aAAa,CAAC,MAAM,CAAC,kBAAkB,CAAC,+BAA+B,eAAe,CAAC,gBAAgB,iBAAiB,CAAC,eAAe,CAAC,YAAY,CAAC,sBAAsB,CAAC,eAAe,CAAC,sBAAsB,SAAS,CAAC,cAAc,SAAS,CAAC,SAAS,CAAC,eAAe,CAAC,eAAe,CAAC,mBAAmB,CAAC,mBAAmB,CAAC,qBAAqB,CAAC,oBAAoB,CAAC,YAAY,CAAC,cAAc,CAAC,kBAAkB,CAAC,4BAA4B,CAAC,sBAAsB,CAAC,SAAS,CAAC,4BAA4B,yBAAyB,CAAC,eAAe,eAAe,CAAC,4BAA4B,CAAC,mBAAmB,CAAC,qBAAqB,CAAC,aAAa,CAAC,cAAc,CAAC,eAAe,CAAC,iBAAiB,CAAC,sBAAsB,CAAC,cAAc,CAAC,WAAW,CAAC,gBAAgB,CAAC,QAAQ,CAAC,oBAAoB,CAAC,iBAAiB,CAAC,sBAAsB,CAAC,iBAAiB,CAAC,kYAAkY,cAAc,CAAC,SAAS,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,qBAAqB,oBAAoB,CAAC,sDAAsD,oBAAoB,CAAC,kBAAkB,CAAC,UAAU,CAAC,skBAAskB,kBAAkB,CAAC,eAAe,CAAC,UAAU,CAAC,oBAAoB,CAAC,2GAA2G,2BAA2B,CAAC,qGAAqG,2BAA2B,CAAC,2MAA2M,0BAA0B,CAAC,sIAAsI,kBAAkB,CAAC,uBAAuB,eAAe,CAAC,uCAAuC,CAAC,0OAA0O,eAAe,CAAC,sBAAsB,CAAC,wBAAwB,CAAC,cAAc,CAAC,0EAA0E,kBAAkB,CAAC,eAAe,CAAC,6BAA6B,eAAe,CAAC,uCAAuC,CAAC,sBAAsB,iBAAiB,CAAC,0BAA0B,cAAc,CAAC,uBAAuB,UAAU,CAAC,wCAAwC,cAAc,CAAC,wBAAwB,CAAC,0CAA0C,UAAU,CAAC,UAAU,CAAC,gBAAgB,CAAC,0FAA0F,aAAa,CAAC,UAAU,CAAC,cAAc,CAAC,eAAe,CAAC,sBAAsB,CAAC,cAAc,CAAC,WAAW,CAAC,0BAA0B,aAAa,CAAC,YAAY,CAAC,qBAAqB,CAAC,eAAe,CAAC,sBAAsB,oBAAoB,CAAC,SAAS,CAAC,qBAAqB,CAAC,gBAAgB,iBAAiB,CAAC,SAAS,CAAC,aAAa,CAAC,QAAQ,CAAC,gBAAgB,CAAC,eAAe,CAAC,qBAAqB,CAAC,eAAe,CAAC,YAAY,CAAC,sBAAsB,UAAU,CAAC,aAAa,CAAC,UAAU,CAAC,iCAAiC,MAAM,CAAC,SAAS,CAAC,WAAW,CAAC,UAAU,CAAC,oDAAoD,2BAA2B,CAAC,sDAAsD,wBAAwB,CAAC,4CAA4C,SAAS,CAAC,0CAA0C,SAAS,CAAC,sBAAsB,sBAAsB,CAAC,eAAe,CAAC,QAAQ,CAAC,eAAe,CAAC,iBAAiB,CAAC,QAAQ,CAAC,SAAS,CAAC,cAAc,CAAC,mBAAmB,CAAC,aAAa,CAAC,cAAc,CAAC,iBAAiB,CAAC,qBAAqB,CAAC,4BAA4B,CAAC,yBAAyB,CAAC,oBAAoB,CAAC,qCAAqC,eAAe,CAAC,8EAA8E,eAAe,CAAC,4BAA4B,SAAS,CAAC,QAAQ,CAAC,2EAA2E,cAAc,CAAC,UAAU,CAAC,mBAAmB,CAAC,aAAa,CAAC,eAAe,CAAC,QAAQ,CAAC,wBAAwB,CAAC,qBAAqB,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,iCAAiC,SAAS,CAAC,SAAS,CAAC,cAAc,CAAC,iBAAiB,CAAC,eAAe,CAAC,sIAAsI,eAAe,CAAC,2BAA2B,cAAc,CAAC,gCAAgC,GAAG,SAAS,CAAC,2BAA2B,CAAC,GAAG,SAAS,CAAC,sBAAsB,CAAC,CAAC,wBAAwB,GAAG,SAAS,CAAC,2BAA2B,CAAC,GAAG,SAAS,CAAC,sBAAsB,CAAC,CAAC,iBAAiB,qBAAqB,CAAC,cAAc,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,eAAe,gBAAgB,CAAC,KAAK,eAAe,CAAC,6BAA6B,CAAC,eAAe,CAAC,aAAa,CAAC,UAAU,CAAC,sMAAsM,CAAC,KAAK,QAAQ,CAAC,mBAAmB,CAAC,GAAG,QAAQ,CAAC,aAAa,CAAC,oBAAoB,CAAC,oBAAoB,wCAAwC,CAAC,gCAAgC,CAAC,kBAAkB,iBAAiB,CAAC,mBAAmB,CAAC,EAAE,aAAa,CAAC,uBAAuB,CAAC,SAAS,kBAAkB,CAAC,kBAAkB,mGAAmG,CAAC,aAAa,CAAC,MAAM,aAAa,CAAC,QAAQ,aAAa,CAAC,aAAa,CAAC,iBAAiB,CAAC,uBAAuB,CAAC,IAAI,aAAa,CAAC,IAAI,SAAS,CAAC,MAAM,aAAa,CAAC,oBAAoB,CAAC,wBAAwB,CAAC,sCAAsC,mBAAmB,CAAC,cAAc,CAAC,mBAAmB,CAAC,aAAa,CAAC,QAAQ,CAAC,SAAS,CAAC,cAAc,mBAAmB,CAAC,gDAAgD,yBAAyB,CAAC,4BAA4B,CAAC,qBAAqB,CAAC,gBAAgB,YAAY,CAAC,iBAAiB,eAAe,CAAC,SAAS,uBAAuB,CAAC,wDAAwD,WAAW,CAAC,cAAc,4BAA4B,CAAC,mBAAmB,CAAC,4BAA4B,uBAAuB,CAAC,6BAA6B,yBAAyB,CAAC,YAAY,CAAC,QAAQ,iBAAiB,CAAC,mDAAmD,QAAQ,CAAC,SAAS,QAAQ,CAAC,SAAS,CAAC,OAAO,SAAS,CAAC,WAAW,eAAe,CAAC,QAAQ,CAAC,SAAS,CAAC,SAAS,eAAe,CAAC,mDAAmD,SAAS,CAAC,aAAa,CAAC,2DAA2D,SAAS,CAAC,aAAa,CAAC,yCAAyC,SAAS,CAAC,aAAa,CAAC,qBAAqB,cAAc,CAAC,UAAU,cAAc,CAAC,+CAA+C,aAAa,CAAC,qBAAqB,CAAC,UAAU,cAAc,CAAC,WAAW,CAAC,SAAS,YAAY,CAAC,6LAA6L,uBAAuB,CAAC,oBAAoB,CAAC,eAAe,CAAC,qBAAqB,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,oBAAoB,CAAC,cAAc,CAAC,kBAAkB,CAAC,qBAAqB,CAAC,uRAAuR,6BAA6B,CAAC,kBAAkB,CAAC,iCAAiC,CAAC,0BAA0B,CAAC,2BAA2B,CAAC,uBAAuB,CAAC,0GAA0G,CAAC,wGAAwG,CAAC,8EAA8E,CAAC,oBAAoB,CAAC,mDAAmD,aAAa,CAAC,SAAS,CAAC,2DAA2D,aAAa,CAAC,SAAS,CAAC,yCAAyC,aAAa,CAAC,SAAS,CAAC,uCAAuC,SAAS,CAAC,8BAA8B,gBAAgB,CAAC,OAAO,kPAAkP,CAAC,sCAAsC,CAAC,2BAA2B,CAAC,2BAA2B,CAAC,oBAAoB,CAAC,gCAAgC,CAAC,kBAAkB,CAAC,WAAW,wBAAwB,CAAC,2BAA2B,CAAC,uBAAuB,CAAC,uBAAuB,CAAC,oBAAoB,CAAC,gCAAgC,CAAC,kBAAkB,CAAC,6BAA6B,uBAAuB,CAAC,oBAAoB,CAAC,eAAe,CAAC,SAAS,CAAC,gCAAgC,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,qBAAqB,CAAC,4BAA4B,CAAC,wBAAwB,CAAC,qBAAqB,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,aAAa,CAAC,WAAW,CAAC,UAAU,CAAC,aAAa,CAAC,qBAAqB,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,qBAAqB,CAAC,gBAAgB,eAAe,CAAC,aAAa,kBAAkB,CAAC,yCAAyC,6BAA6B,CAAC,kBAAkB,CAAC,iCAAiC,CAAC,0BAA0B,CAAC,2BAA2B,CAAC,uBAAuB,CAAC,0GAA0G,CAAC,wGAAwG,CAAC,8EAA8E,CAAC,6CAA6C,wBAAwB,CAAC,6BAA6B,CAAC,yBAAyB,CAAC,0BAA0B,CAAC,2BAA2B,CAAC,wBAAwB,qQAAqQ,CAAC,qBAAqB,mKAAmK,CAAC,kHAAkH,wBAAwB,CAAC,6BAA6B,CAAC,8BAA8B,sOAAsO,CAAC,wBAAwB,CAAC,6BAA6B,CAAC,yBAAyB,CAAC,0BAA0B,CAAC,2BAA2B,CAAC,wEAAwE,wBAAwB,CAAC,6BAA6B,CAAC,YAAY,gBAAgB,CAAC,oBAAoB,CAAC,cAAc,CAAC,eAAe,CAAC,SAAS,CAAC,eAAe,CAAC,mBAAmB,CAAC,kBAAkB,yCAAyC,CAAC,iBAAiB,kBAAkB,CAAC,kBAAkB,CAAC,aAAa,CAAC,aAAa,CAAC,aAAa,CAAC,cAAc,CAAC,cAAc,CAAC,YAAY,CAAC,YAAY,CAAC,iBAAiB,CAAC,qCAAqC,CAAC,cAAc,CAAC,mBAAmB,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,uBAAuB,CAAC,iBAAiB,CAAC,0BAA0B,CAAC,2BAA2B,CAAC,oCAAoC,CAAC,iCAAiC,CAAC,0BAA0B,CAAC,qBAAqB,CAAC,6BAA6B,CAAC,WAAW,CAAC,iBAAiB,CAAC,eAAe,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,aAAa,CAAC,eAAe,CAAC,YAAY,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,0BAA0B,CAAC,wBAAwB,CAAC,yBAAyB,CAAC,0BAA0B,CAAC,sBAAsB,CAAC,uBAAuB,CAAC,wBAAwB,CAAC,qBAAqB,CAAC,IAAI,iBAAiB,CAAC,gBAAgB,CAAC,eAAe,CAAC,qBAAqB,CAAC,IAAI,iBAAiB,CAAC,gBAAgB,CAAC,eAAe,CAAC,qBAAqB,CAAC,IAAI,iBAAiB,CAAC,gBAAgB,CAAC,qBAAqB,CAAC,eAAe,CAAC,IAAI,gBAAgB,CAAC,gBAAgB,CAAC,eAAe,CAAC,sBAAsB,CAAC,0BAA0B,IAAI,cAAc,CAAC,gBAAgB,CAAC,qBAAqB,CAAC,IAAI,iBAAiB,CAAC,gBAAgB,CAAC,qBAAqB,CAAC,CAAC,qBAAqB,mBAAmB,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,wBAAwB,CAAC,iBAAiB,CAAC,kBAAkB,CAAC,eAAe,CAAC,mBAAmB,CAAC,wCAAwC,CAAC,sDAAsD,CAAC,oGAAoG,CAAC,6JAA6J,CAAC,6IAA6I,CAAC,mMAAmM,CAAC,wBAAwB,CAAC,kDAAkD,CAAC,KAAK,qBAAqB,CAAC,QAAQ,oBAAoB,CAAC,QAAQ,qBAAqB,CAAC,uMAAuM,uBAAuB,CAAC,qFAAqF,gBAAgB,CAAC,iBAAiB,CAAC,wDAAwD,CAAC,iBAAiB,CAAC,kBAAkB,CAAC,mBAAmB,CAAC,4CAA4C,CAAC,yEAAyE,oBAAoB,CAAC,0DAA0D,qBAAqB,CAAC,wDAAwD,CAAC,oBAAoB,CAAC,mBAAmB,CAAC,wCAAwC,CAAC,sDAAsD,CAAC,oGAAoG,CAAC,kFAAkF,qBAAqB,CAAC,wDAAwD,CAAC,kFAAkF,qBAAqB,CAAC,wDAAwD,CAAC,+DAA+D,0BAA0B,CAAC,sDAAsD,CAAC,uEAAuE,0BAA0B,CAAC,sDAAsD,CAAC,qDAAqD,0BAA0B,CAAC,sDAAsD,CAAC,aAAa,oBAAoB,CAAC,2BAA2B,gBAAgB,CAAC,qBAAqB,CAAC,wDAAwD,CAAC,mBAAmB,CAAC,8CAA8C,CAAC,iCAAiC,YAAY,CAAC,cAAc,uBAAuB,CAAC,oBAAoB,CAAC,kBAAkB,uBAAuB,CAAC,oBAAoB,CAAC,eAAe,CAAC,eAAe,CAAC,iBAAiB,CAAC,UAAU,CAAC,eAAe,CAAC,kBAAkB,CAAC,kBAAkB,CAAC,wCAAwC,eAAe,CAAC,uBAAuB,CAAC,qBAAqB,CAAC,oMAAoM,CAAC,0BAA0B,CAAC,2BAA2B,CAAC,QAAQ,CAAC,iBAAiB,CAAC,cAAc,CAAC,WAAW,CAAC,UAAU,CAAC,oCAAoC,qBAAqB,CAAC,oMAAoM,CAAC,0BAA0B,CAAC,2BAA2B,CAAC,QAAQ,CAAC,WAAW,CAAC,iBAAiB,CAAC,cAAc,CAAC,WAAW,CAAC,UAAU,CAAC,6BAA6B,qBAAqB,CAAC,oMAAoM,CAAC,0BAA0B,CAAC,2BAA2B,CAAC,QAAQ,CAAC,iBAAiB,CAAC,cAAc,CAAC,WAAW,CAAC,UAAU,CAAC,oCAAoC,QAAQ,CAAC,aAAa,iBAAiB,CAAC,wBAAwB,CAAC,qBAAqB,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,UAAU,CAAC,mBAAmB,aAAa,CAAC,aAAa,CAAC,cAAc,CAAC,eAAe,CAAC,oBAAoB,CAAC,oCAAoC,iBAAiB,CAAC,aAAa,CAAC,oBAAoB,CAAC,UAAU,CAAC,WAAW,CAAC,OAAO,CAAC,QAAQ,CAAC,SAAS,CAAC,4BAA4B,CAAC,gDAAgD,iBAAiB,CAAC,uDAAuD,CAAC,iEAAiE,SAAS,CAAC,wBAAwB,GAAG,SAAS,CAAC,0BAA0B,CAAC,GAAG,SAAS,CAAC,sBAAsB,CAAC,CAAC,oBAAoB,cAAc,CAAC,QAAQ,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,qBAAqB,CAAC,wDAAwD,CAAC,kFAAkF,CAAC,kGAAkG,CAAC,oGAAoG,CAAC,kBAAkB,CAAC,YAAY,CAAC,WAAW,CAAC,2BAA2B,oBAAoB,SAAS,CAAC,oBAAoB,SAAS,CAAC,oBAAoB,aAAa,CAAC,CAAC,iCAAiC,2CAA2C,CAAC,mCAAmC,CAAC,2BAA2B,iBAAiB,CAAC,oBAAoB,CAAC,gCAAgC,UAAU,CAAC,gBAAgB,WAAW,CAAC,cAAc,WAAW,CAAC,eAAe,CAAC,eAAe,CAAC,eAAe,iBAAiB,CAAC,wDAAwD,CAAC,iBAAiB,CAAC,kBAAkB,CAAC,eAAe,CAAC,mBAAmB,CAAC,6CAA6C,CAAC,cAAc,CAAC,WAAW,CAAC,gBAAgB,CAAC,uEAAuE,WAAW,CAAC,6ZAA6Z,eAAe,CAAC,0OAA0O,mBAAmB,CAAC,+CAA+C,CAAC,0BAA0B,QAAQ,CAAC,skBAAskB,iBAAiB,CAAC,uDAAuD,CAAC,mBAAmB,CAAC,+CAA+C,CAAC,wbAAwb,iBAAiB,CAAC,wDAAwD,CAAC,mBAAmB,CAAC,+CAA+C,CAAC,kOAAkO,eAAe,CAAC,kBAAkB,kBAAkB,CAAC,eAAe,CAAC,iBAAiB,CAAC,gFAAgF,eAAe,CAAC,WAAW,CAAC,mBAAmB,CAAC,6CAA6C,CAAC,wFAAwF,SAAS,CAAC,WAAW,CAAC,gMAAgM,YAAY,CAAC,mBAAmB,CAAC,+CAA+C,CAAC,wCAAwC,iBAAiB,CAAC,wCAAwC,kBAAkB,CAAC,mCAAmC,mBAAmB,CAAC,4CAA4C,CAAC,WAAW,CAAC,mBAAmB,CAAC,yBAAyB,iBAAiB,CAAC,kBAAkB,CAAC,eAAe,CAAC,eAAe,CAAC,WAAW,CAAC,UAAU,CAAC,SAAS,CAAC,SAAS,CAAC,wCAAwC,QAAQ,CAAC,eAAe,CAAC,8CAA8C,eAAe,CAAC,wCAAwC,mBAAmB,CAAC,yBAAyB,CAAC,uBAAuB,eAAe,CAAC,sBAAsB,YAAY,CAAC,uBAAuB,gBAAgB,CAAC,eAAe,CAAC,eAAe,CAAC,mBAAmB,CAAC,+CAA+C,CAAC,uEAAuE,YAAY,CAAC,yHAAyH,0GAA0G,CAAC,wGAAwG,CAAC,yFAAyF,CAAC,SAAS,iBAAiB,CAAC,SAAS,CAAC,UAAU,CAAC,SAAS,CAAC,WAAW,CAAC,eAAe,CAAC,kBAAkB,CAAC,kBAAkB,CAAC,cAAc,CAAC,qBAAqB,mBAAmB,CAAC,WAAW,iBAAiB,CAAC,QAAQ,eAAe,CAAC,OAAO,cAAc,CAAC,UAAU,iBAAiB,CAAC,UAAU,iBAAiB,CAAC,QAAQ,uBAAuB,CAAC,eAAe,CAAC,SAAS,OAAO,CAAC,SAAS,CAAC,UAAU,CAAC,QAAQ,CAAC,UAAU,UAAU,CAAC,SAAS,SAAS,CAAC,UAAU,QAAQ,CAAC,OAAO,OAAO,CAAC,QAAQ,QAAQ,CAAC,aAAa,WAAW,CAAC,WAAW,QAAQ,CAAC,YAAY,UAAU,CAAC,QAAQ,QAAQ,CAAC,MAAM,UAAU,CAAC,MAAM,UAAU,CAAC,MAAM,UAAU,CAAC,MAAM,UAAU,CAAC,MAAM,UAAU,CAAC,eAAe,kBAAkB,CAAC,MAAM,cAAc,CAAC,SAAS,gBAAgB,CAAC,iBAAiB,CAAC,MAAM,kBAAkB,CAAC,mBAAmB,CAAC,MAAM,iBAAiB,CAAC,oBAAoB,CAAC,MAAM,gBAAgB,CAAC,mBAAmB,CAAC,MAAM,kBAAkB,CAAC,MAAM,iBAAiB,CAAC,MAAM,oBAAoB,CAAC,MAAM,kBAAkB,CAAC,MAAM,mBAAmB,CAAC,MAAM,iBAAiB,CAAC,QAAQ,kBAAkB,CAAC,MAAM,kBAAkB,CAAC,OAAO,oBAAoB,CAAC,MAAM,iBAAiB,CAAC,SAAS,qBAAqB,CAAC,MAAM,eAAe,CAAC,MAAM,kBAAkB,CAAC,SAAS,eAAe,CAAC,MAAM,mBAAmB,CAAC,MAAM,kBAAkB,CAAC,QAAQ,gBAAgB,CAAC,MAAM,mBAAmB,CAAC,OAAO,gBAAgB,CAAC,OAAO,iBAAiB,CAAC,QAAQ,mBAAmB,CAAC,MAAM,gBAAgB,CAAC,MAAM,oBAAoB,CAAC,OAAO,aAAa,CAAC,MAAM,YAAY,CAAC,aAAa,mBAAmB,CAAC,OAAO,aAAa,CAAC,MAAM,YAAY,CAAC,QAAQ,YAAY,CAAC,UAAU,YAAY,CAAC,KAAK,WAAW,CAAC,KAAK,WAAW,CAAC,MAAM,WAAW,CAAC,KAAK,aAAa,CAAC,KAAK,aAAa,CAAC,KAAK,cAAc,CAAC,MAAM,aAAa,CAAC,QAAQ,cAAc,CAAC,KAAK,YAAY,CAAC,YAAY,eAAe,CAAC,QAAQ,UAAU,CAAC,KAAK,UAAU,CAAC,KAAK,UAAU,CAAC,KAAK,YAAY,CAAC,MAAM,SAAS,CAAC,MAAM,WAAW,CAAC,KAAK,YAAY,CAAC,MAAM,WAAW,CAAC,KAAK,aAAa,CAAC,MAAM,YAAY,CAAC,QAAQ,aAAa,CAAC,KAAK,WAAW,CAAC,UAAU,cAAc,CAAC,UAAU,eAAe,CAAC,UAAU,eAAe,CAAC,UAAU,eAAe,CAAC,WAAW,eAAe,CAAC,WAAW,eAAe,CAAC,QAAQ,WAAW,CAAC,UAAU,aAAa,CAAC,MAAM,WAAW,CAAC,YAAY,iBAAiB,CAAC,kBAAkB,0BAA0B,CAAC,gBAAgB,uBAAuB,CAAC,4LAA4L,CAAC,eAAe,oBAAoB,CAAC,4LAA4L,CAAC,eAAe,oBAAoB,CAAC,4LAA4L,CAAC,iBAAiB,uBAAuB,CAAC,4LAA4L,CAAC,mBAAmB,qBAAqB,CAAC,4LAA4L,CAAC,eAAe,qBAAqB,CAAC,4LAA4L,CAAC,YAAY,kBAAkB,CAAC,4LAA4L,CAAC,WAAW,4LAA4L,CAAC,gBAAgB,cAAc,CAAC,iBAAiB,uBAAuB,CAAC,oBAAoB,CAAC,eAAe,CAAC,eAAe,qBAAqB,CAAC,cAAc,8CAA8C,CAAC,UAAU,qBAAqB,CAAC,WAAW,cAAc,CAAC,aAAa,sBAAsB,CAAC,WAAW,oBAAoB,CAAC,cAAc,kBAAkB,CAAC,eAAe,0BAA0B,CAAC,aAAa,wBAAwB,CAAC,gBAAgB,sBAAsB,CAAC,iBAAiB,6BAA6B,CAAC,OAAO,SAAS,CAAC,OAAO,UAAU,CAAC,yCAAyC,sBAAsB,CAAC,2DAA2D,CAAC,oDAAoD,CAAC,0CAA0C,sBAAsB,CAAC,sDAAsD,CAAC,+DAA+D,CAAC,wCAAwC,uBAAuB,CAAC,iEAAiE,CAAC,0DAA0D,CAAC,gDAAgD,qBAAqB,CAAC,wDAAwD,CAAC,YAAY,qBAAqB,CAAC,UAAU,mBAAmB,CAAC,aAAa,iBAAiB,CAAC,eAAe,aAAa,CAAC,iBAAiB,eAAe,CAAC,iBAAiB,eAAe,CAAC,iBAAiB,eAAe,CAAC,mBAAmB,iBAAiB,CAAC,mBAAmB,iBAAiB,CAAC,UAAU,eAAe,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,mBAAmB,kBAAkB,CAAC,cAAc,oBAAoB,CAAC,SAAS,oBAAoB,CAAC,YAAY,qBAAqB,CAAC,QAAQ,gBAAgB,CAAC,UAAU,gBAAgB,CAAC,UAAU,gBAAgB,CAAC,UAAU,uBAAuB,CAAC,UAAU,oBAAoB,CAAC,kBAAkB,qBAAqB,CAAC,wDAAwD,CAAC,kBAAkB,qBAAqB,CAAC,wDAAwD,CAAC,cAAc,qBAAqB,CAAC,wDAAwD,CAAC,eAAe,iBAAiB,CAAC,sDAAsD,CAAC,eAAe,iBAAiB,CAAC,uDAAuD,CAAC,cAAc,iBAAiB,CAAC,qDAAqD,CAAC,cAAc,iBAAiB,CAAC,wDAAwD,CAAC,UAAU,iBAAiB,CAAC,wDAAwD,CAAC,cAAc,iBAAiB,CAAC,wDAAwD,CAAC,cAAc,iBAAiB,CAAC,qDAAqD,CAAC,aAAa,iBAAiB,CAAC,wDAAwD,CAAC,cAAc,iBAAiB,CAAC,sDAAsD,CAAC,aAAa,iBAAiB,CAAC,sDAAsD,CAAC,YAAY,iBAAiB,CAAC,uDAAuD,CAAC,eAAe,iBAAiB,CAAC,wDAAwD,CAAC,eAAe,kBAAkB,CAAC,cAAc,iBAAiB,CAAC,KAAK,cAAc,CAAC,KAAK,YAAY,CAAC,KAAK,aAAa,CAAC,MAAM,oBAAoB,CAAC,qBAAqB,CAAC,MAAM,kBAAkB,CAAC,qBAAqB,CAAC,SAAS,oBAAoB,CAAC,qBAAqB,CAAC,MAAM,mBAAmB,CAAC,oBAAoB,CAAC,MAAM,iBAAiB,CAAC,kBAAkB,CAAC,MAAM,gBAAgB,CAAC,mBAAmB,CAAC,SAAS,mBAAmB,CAAC,sBAAsB,CAAC,MAAM,kBAAkB,CAAC,qBAAqB,CAAC,MAAM,mBAAmB,CAAC,oBAAoB,CAAC,MAAM,iBAAiB,CAAC,oBAAoB,CAAC,MAAM,gBAAgB,CAAC,mBAAmB,CAAC,MAAM,kBAAkB,CAAC,mBAAmB,CAAC,MAAM,iBAAiB,CAAC,MAAM,oBAAoB,CAAC,MAAM,qBAAqB,CAAC,MAAM,oBAAoB,CAAC,MAAM,mBAAmB,CAAC,MAAM,oBAAoB,CAAC,MAAM,kBAAkB,CAAC,SAAS,mBAAmB,CAAC,MAAM,kBAAkB,CAAC,MAAM,mBAAmB,CAAC,OAAO,mBAAmB,CAAC,MAAM,kBAAkB,CAAC,SAAS,mBAAmB,CAAC,MAAM,aAAa,CAAC,WAAW,eAAe,CAAC,aAAa,iBAAiB,CAAC,SAAS,iBAAiB,CAAC,kBAAkB,CAAC,UAAU,iBAAiB,CAAC,gBAAgB,CAAC,qBAAqB,CAAC,SAAS,gBAAgB,CAAC,eAAe,CAAC,SAAS,kBAAkB,CAAC,eAAe,CAAC,qBAAqB,CAAC,UAAU,gBAAgB,CAAC,gBAAgB,CAAC,qBAAqB,CAAC,WAAW,eAAe,CAAC,eAAe,eAAe,CAAC,aAAa,eAAe,CAAC,WAAW,wBAAwB,CAAC,QAAQ,iBAAiB,CAAC,cAAc,iCAAiC,CAAC,2IAA2I,CAAC,gBAAgB,mBAAmB,CAAC,4CAA4C,CAAC,YAAY,mBAAmB,CAAC,+CAA+C,CAAC,eAAe,mBAAmB,CAAC,+CAA+C,CAAC,gBAAgB,mBAAmB,CAAC,+CAA+C,CAAC,gBAAgB,mBAAmB,CAAC,+CAA+C,CAAC,gBAAgB,mBAAmB,CAAC,+CAA+C,CAAC,mBAAmB,8BAA8B,CAAC,wDAAwD,CAAC,gBAAgB,mBAAmB,CAAC,6CAA6C,CAAC,iBAAiB,mBAAmB,CAAC,6CAA6C,CAAC,iBAAiB,mBAAmB,CAAC,+CAA+C,CAAC,iBAAiB,mBAAmB,CAAC,8CAA8C,CAAC,iBAAiB,mBAAmB,CAAC,+CAA+C,CAAC,gBAAgB,mBAAmB,CAAC,4CAA4C,CAAC,mBAAmB,8BAA8B,CAAC,uDAAuD,CAAC,eAAe,mBAAmB,CAAC,6CAA6C,CAAC,gBAAgB,mBAAmB,CAAC,6CAA6C,CAAC,cAAc,mBAAmB,CAAC,8CAA8C,CAAC,gBAAgB,mBAAmB,CAAC,+CAA+C,CAAC,cAAc,mBAAmB,CAAC,+CAA+C,CAAC,eAAe,mBAAmB,CAAC,+CAA+C,CAAC,aAAa,mBAAmB,CAAC,+CAA+C,CAAC,WAAW,sCAAsC,CAAC,8BAA8B,CAAC,cAAc,yCAAyC,CAAC,iCAAiC,CAAC,yCAAyC,0BAA0B,CAAC,sDAAsD,CAAC,6CAA6C,0BAA0B,CAAC,sDAAsD,CAAC,oCAAoC,0BAA0B,CAAC,sDAAsD,CAAC,YAAY,UAAU,CAAC,WAAW,SAAS,CAAC,aAAa,SAAS,CAAC,WAAW,kFAAkF,CAAC,kGAAkG,CAAC,oGAAoG,CAAC,WAAW,wCAAwC,CAAC,sDAAsD,CAAC,oGAAoG,CAAC,SAAS,mBAAmB,CAAC,QAAQ,gLAAgL,CAAC,YAAY,6JAA6J,CAAC,6IAA6I,CAAC,mMAAmM,CAAC,kDAAkD,CAAC,wBAAwB,CAAC,oBAAoB,2BAA2B,CAAC,kDAAkD,CAAC,wBAAwB,CAAC,gBAAgB,uBAAuB,CAAC,kDAAkD,CAAC,wBAAwB,CAAC,cAAc,uBAAuB,CAAC,cAAc,wBAAwB,CAAC,cAAc,uBAAuB,CAAC,UAAU,iDAAiD,CAAC,aAAa,kDAAkD,CAAC,uBAAuB,eAAe,CAAC,2BAA2B,gBAAgB,CAAC,+BAA+B,qBAAqB,CAAC,wDAAwD,CAAC,4BAA4B,iBAAiB,CAAC,sDAAsD,CAAC,2BAA2B,iBAAiB,CAAC,wDAAwD,CAAC,0BAA0B,iBAAiB,CAAC,wDAAwD,CAAC,4BAA4B,iBAAiB,CAAC,uDAAuD,CAAC,6BAA6B,mBAAmB,CAAC,+CAA+C,CAAC,6BAA6B,mBAAmB,CAAC,+CAA+C,CAAC,6BAA6B,mBAAmB,CAAC,6CAA6C,CAAC,yBAAyB,mBAAmB,CAAC,+CAA+C,CAAC,6BAA6B,mBAAmB,CAAC,+CAA+C,CAAC,6BAA6B,mBAAmB,CAAC,4CAA4C,CAAC,4BAA4B,mBAAmB,CAAC,6CAA6C,CAAC,6BAA6B,mBAAmB,CAAC,4CAA4C,CAAC,8BAA8B,mBAAmB,CAAC,6CAA6C,CAAC,wBAAwB,sCAAsC,CAAC,8BAA8B,CAAC,+BAA+B,qBAAqB,CAAC,wDAAwD,CAAC,+BAA+B,2BAA2B,CAAC,0CAA0C,mBAAmB,CAAC,+CAA+C,CAAC,sCAAsC,mBAAmB,CAAC,+CAA+C,CAAC,0CAA0C,mBAAmB,CAAC,4CAA4C,CAAC,2CAA2C,oBAAoB,CAAC,gDAAgD,kBAAkB,CAAC,4LAA4L,CAAC,0BAA0B,gBAAgB,2BAA2B,CAAC,UAAU,eAAe,CAAC,UAAU,mBAAmB,CAAC,UAAU,cAAc,CAAC,YAAY,cAAc,CAAC,UAAU,YAAY,CAAC,mBAAmB,qCAAqC,CAAC,6BAA6B,CAAC,kBAAkB,kBAAkB,CAAC,mBAAmB,0BAA0B,CAAC,iBAAiB,wBAAwB,CAAC,qBAAqB,6BAA6B,CAAC,SAAS,cAAc,CAAC,UAAU,mBAAmB,CAAC,oBAAoB,CAAC,UAAU,kBAAkB,CAAC,mBAAmB,CAAC,CAAC,0BAA0B,cAAc,WAAW,CAAC,cAAc,UAAU,CAAC,eAAe,SAAS,CAAC,aAAa,SAAS,CAAC,YAAY,UAAU,CAAC,aAAa,oBAAoB,CAAC,cAAc,iBAAiB,CAAC,gBAAgB,CAAC,qBAAqB,CAAC,CAAC,2BAA2B,YAAY,eAAe,CAAC,eAAe,SAAS,CAAC,cAAc,QAAQ,CAAC,YAAY,YAAY,CAAC,WAAW,aAAa,CAAC,iBAAiB,mBAAmB,CAAC,YAAY,YAAY,CAAC,UAAU,UAAU,CAAC,mBAAmB,oBAAoB,CAAC,4LAA4L,CAAC,qBAAqB,eAAe,CAAC,UAAU,iBAAiB,CAAC,kBAAkB,CAAC,eAAe,SAAS,CAAC,+CAA+C,aAAa,CAAC,gDAAgD,YAAY,CAAC,gDAAgD,qBAAqB,CAAC,qDAAqD,SAAS,CAAC,CAAC,2BAA2B,gBAAgB,2BAA2B,CAAC,gBAAgB,2BAA2B,CAAC,gBAAgB,2BAA2B,CAAC,WAAW,aAAa,CAAC,CAAC,2BAA2B,cAAc,aAAa,CAAC,eAAe,YAAY,CAAC,eAAe,qBAAqB,CAAC,oBAAoB,SAAS,CAAC,CAAC,0BAA0B,WAAW,aAAa,CAAC","sourcesContent":["@import\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=fallback\";.flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;box-sizing:border-box;touch-action:manipulation;background:#fff;box-shadow:1px 0 #e6e6e6,-1px 0 #e6e6e6,0 1px #e6e6e6,0 -1px #e6e6e6,0 3px 13px #00000014}.flatpickr-calendar.open,.flatpickr-calendar.inline{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown .3s cubic-bezier(.23,1,.32,1);animation:fpFadeInDown .3s cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px)}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){box-shadow:none!important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){box-shadow:-2px 0 #e6e6e6,5px 0 #e6e6e6}.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:before,.flatpickr-calendar:after{position:absolute;display:block;pointer-events:none;border:solid transparent;content:\"\";height:0;width:0;left:22px}.flatpickr-calendar.rightMost:before,.flatpickr-calendar.arrowRight:before,.flatpickr-calendar.rightMost:after,.flatpickr-calendar.arrowRight:after{left:auto;right:22px}.flatpickr-calendar.arrowCenter:before,.flatpickr-calendar.arrowCenter:after{left:50%;right:50%}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:flex}.flatpickr-months .flatpickr-month{background:transparent;color:#000000e6;fill:#000000e6;height:34px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;flex:1}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{text-decoration:none;cursor:pointer;position:absolute;top:0;height:34px;padding:10px;z-index:3;color:#000000e6;fill:#000000e6}.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-months .flatpickr-next-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-prev-month i,.flatpickr-months .flatpickr-next-month i{position:relative}.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,.flatpickr-months .flatpickr-next-month.flatpickr-prev-month{left:0}.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,.flatpickr-months .flatpickr-next-month.flatpickr-next-month{right:0}.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover{color:#959ea9}.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:14px;height:14px}.flatpickr-months .flatpickr-prev-month svg path,.flatpickr-months .flatpickr-next-month svg path{transition:fill .1s;fill:inherit}.numInputWrapper{position:relative;height:auto}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-outer-spin-button,.numInputWrapper input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57,57,57,.15);box-sizing:border-box}.numInputWrapper span:hover{background:rgba(0,0,0,.1)}.numInputWrapper span:active{background:rgba(0,0,0,.2)}.numInputWrapper span:after{display:block;content:\"\";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57,57,57,.6);top:26%}.numInputWrapper span.arrowDown{top:50%}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57,57,57,.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto}.numInputWrapper span svg path{fill:#00000080}.numInputWrapper:hover{background:rgba(0,0,0,.05)}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0;line-height:1;height:34px;display:inline-block;text-align:center;transform:translate(0)}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:.5ch;padding:0}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\fffd;display:inline-block}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:#000000e6}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:#000000e6}.flatpickr-current-month input.cur-year{background:transparent;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 .5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:#00000080;background:transparent;pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:transparent;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0;outline:none;padding:0 0 0 .5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto}.flatpickr-current-month .flatpickr-monthDropdown-months:focus,.flatpickr-current-month .flatpickr-monthDropdown-months:active{outline:none}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0,0,0,.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:transparent;outline:none;padding:0}.flatpickr-weekdays{background:transparent;text-align:center;overflow:hidden;width:100%;display:flex;align-items:center;height:28px}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:flex;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:transparent;color:#0000008a;line-height:1;margin:0;text-align:center;display:block;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0}.flatpickr-days{position:relative;overflow:hidden;display:flex;align-items:flex-start;width:307.875px}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;box-sizing:border-box;display:inline-block;display:flex;flex-wrap:wrap;-ms-flex-wrap:wrap;justify-content:space-around;transform:translate(0);opacity:1}.dayContainer+.dayContainer{box-shadow:-1px 0 #e6e6e6}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;justify-content:center;text-align:center}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-day.today{border-color:#959ea9}.flatpickr-day.today:hover,.flatpickr-day.today:focus{border-color:#959ea9;background:#959ea9;color:#fff}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{background:#569ff7;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)){box-shadow:-10px 0 #569ff7}.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;box-shadow:-5px 0 #e6e6e6,5px 0 #e6e6e6}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{color:#3939394d;background:transparent;border-color:transparent;cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:#3939391a}.flatpickr-day.week.selected{border-radius:0;box-shadow:-5px 0 #569ff7,5px 0 #569ff7}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;box-shadow:1px 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:#3939394d;background:transparent;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:flex;box-sizing:border-box;overflow:hidden}.flatpickr-rContainer{display:inline-block;padding:0;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;box-sizing:border-box;overflow:hidden;display:flex}.flatpickr-time:after{content:\"\";display:table;clear:both}.flatpickr-time .numInputWrapper{flex:1;width:40%;height:40px;float:left}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-time input.flatpickr-hour{font-weight:700}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:inherit;float:left;line-height:inherit;color:#393939;font-weight:700;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time input:hover,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time .flatpickr-am-pm:focus{background:#eee}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translate(0)}}@keyframes fpFadeInDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translate(0)}}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: \"\"}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}[type=text],[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem;--tw-shadow:0 0 #0000}[type=text]:focus,[type=email]:focus,[type=url]:focus,[type=password]:focus,[type=number]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=month]:focus,[type=search]:focus,[type=tel]:focus,[type=time]:focus,[type=week]:focus,[multiple]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#2563eb}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}select{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;-webkit-print-color-adjust:exact;color-adjust:exact}[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;color-adjust:unset}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#2563eb;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow:0 0 #0000}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked{border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type=checkbox]:checked{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")}[type=radio]:checked{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\")}[type=checkbox]:checked:hover,[type=checkbox]:checked:focus,[type=radio]:checked:hover,[type=radio]:checked:focus{border-color:transparent;background-color:currentColor}[type=checkbox]:indeterminate{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{border-color:transparent;background-color:currentColor}[type=file]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type=file]:focus{outline:1px auto -webkit-focus-ring-color}*,:before,:after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.h1{font-size:2.25rem;line-height:1.25;font-weight:800;letter-spacing:-.05em}.h2{font-size:1.88rem;line-height:1.33;font-weight:800;letter-spacing:-.05em}.h3{font-size:1.88rem;line-height:1.33;letter-spacing:-.01em;font-weight:800}.h4{font-size:1.5rem;line-height:1.33;font-weight:800;letter-spacing:-.025em}@media (min-width: 768px){.h1{font-size:3rem;line-height:1.25;letter-spacing:-.02em}.h2{font-size:2.25rem;line-height:1.25;letter-spacing:-.02em}}.btn,.btn-sm,.btn-xs{display:inline-flex;align-items:center;justify-content:center;border-radius:.25rem;border-width:1px;border-color:transparent;font-size:.875rem;line-height:1.5715;font-weight:500;line-height:1.25rem;--tw-shadow:0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn{padding:.5rem .625rem}.btn-sm{padding:.25rem .5rem}.btn-xs{padding:.125rem .5rem}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}.form-input,.form-textarea,.form-multiselect,.form-select,.form-checkbox,.form-radio{border-width:1px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));font-size:.875rem;line-height:1.5715;--tw-text-opacity:1;color:rgb(30 41 59 / var(--tw-text-opacity))}.form-input,.form-textarea,.form-multiselect,.form-select,.form-checkbox{border-radius:.25rem}.form-input,.form-textarea,.form-multiselect,.form-select{--tw-border-opacity:1;border-color:rgb(226 232 240 / var(--tw-border-opacity));padding:.5rem .75rem;line-height:1.25rem;--tw-shadow:0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.form-input:hover,.form-textarea:hover,.form-multiselect:hover,.form-select:hover{--tw-border-opacity:1;border-color:rgb(203 213 225 / var(--tw-border-opacity))}.form-input:focus,.form-textarea:focus,.form-multiselect:focus,.form-select:focus{--tw-border-opacity:1;border-color:rgb(165 180 252 / var(--tw-border-opacity))}.form-input::-moz-placeholder,.form-textarea::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(148 163 184 / var(--tw-placeholder-opacity))}.form-input:-ms-input-placeholder,.form-textarea:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgb(148 163 184 / var(--tw-placeholder-opacity))}.form-input::placeholder,.form-textarea::placeholder{--tw-placeholder-opacity:1;color:rgb(148 163 184 / var(--tw-placeholder-opacity))}.form-select{padding-right:2.5rem}.form-checkbox,.form-radio{border-width:1px;--tw-border-opacity:1;border-color:rgb(203 213 225 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(99 102 241 / var(--tw-text-opacity))}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}input[type=range]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#ccc;border-radius:3px;height:6px;margin-top:15px;margin-bottom:15px;--thumb-size: 36px}input[type=range]::-webkit-slider-thumb{appearance:none;-webkit-appearance:none;background-color:#000;background-image:url(\"data:image/svg+xml,%3Csvg width='12' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 .5v7L12 4zM0 4l4 3.5v-7z' fill='%23FFF' fill-rule='nonzero'/%3E%3C/svg%3E\");background-position:center;background-repeat:no-repeat;border:0;border-radius:50%;cursor:pointer;height:36px;width:36px}input[type=range]::-moz-range-thumb{background-color:#000;background-image:url(\"data:image/svg+xml,%3Csvg width='12' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 .5v7L12 4zM0 4l4 3.5v-7z' fill='%23FFF' fill-rule='nonzero'/%3E%3C/svg%3E\");background-position:center;background-repeat:no-repeat;border:0;border:none;border-radius:50%;cursor:pointer;height:36px;width:36px}input[type=range]::-ms-thumb{background-color:#000;background-image:url(\"data:image/svg+xml,%3Csvg width='12' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 .5v7L12 4zM0 4l4 3.5v-7z' fill='%23FFF' fill-rule='nonzero'/%3E%3C/svg%3E\");background-position:center;background-repeat:no-repeat;border:0;border-radius:50%;cursor:pointer;height:36px;width:36px}input[type=range]::-moz-focus-outer{border:0}.form-switch{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:44px}.form-switch label{display:block;height:1.5rem;cursor:pointer;overflow:hidden;border-radius:9999px}.form-switch label>span:first-child{position:absolute;display:block;border-radius:9999px;width:20px;height:20px;top:2px;left:2px;right:50%;transition:all .15s ease-out}.form-switch input[type=checkbox]:checked+label{--tw-bg-opacity:1;background-color:rgb(99 102 241 / var(--tw-bg-opacity))}.form-switch input[type=checkbox]:checked+label>span:first-child{left:22px}@keyframes fpFadeInDown{0%{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translate(0)}}.flatpickr-calendar{border:inherit;left:50%;border-radius:.25rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(226 232 240 / var(--tw-border-opacity));--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, .08), 0 4px 6px -2px rgba(0, 0, 0, .01);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);margin-left:-150px;padding:24px;width:300px}@media (min-width: 1024px){.flatpickr-calendar{left:auto}.flatpickr-calendar{right:0px}.flatpickr-calendar{margin-left:0}}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown .2s ease-out;animation:fpFadeInDown .2s ease-out}.flatpickr-calendar.static{position:absolute;top:calc(100% + 4px)}.flatpickr-calendar.static.open{z-index:20}.flatpickr-days{width:252px}.dayContainer{width:252px;min-width:252px;max-width:252px}.flatpickr-day{--tw-bg-opacity:1;background-color:rgb(248 250 252 / var(--tw-bg-opacity));font-size:.875rem;line-height:1.5715;font-weight:500;--tw-text-opacity:1;color:rgb(71 85 105 / var(--tw-text-opacity));max-width:36px;height:36px;line-height:36px}.flatpickr-day,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay{border:none}.flatpickr-day,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange,.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange,.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:0}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{--tw-text-opacity:1;color:rgb(148 163 184 / var(--tw-text-opacity))}.rangeMode .flatpickr-day{margin:0}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{--tw-bg-opacity:1;background-color:rgb(99 102 241 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(238 242 255 / var(--tw-text-opacity))}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus,.flatpickr-day.today:hover,.flatpickr-day.today:focus{--tw-bg-opacity:1;background-color:rgb(129 140 248 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(238 242 255 / var(--tw-text-opacity))}.flatpickr-day.inRange,.flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)){box-shadow:none}.flatpickr-months{align-items:center;margin-top:-8px;margin-bottom:6px}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{position:static;height:auto;--tw-text-opacity:1;color:rgb(71 85 105 / var(--tw-text-opacity))}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:7px;height:11px}.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover,.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:inherit;--tw-text-opacity:1;color:rgb(148 163 184 / var(--tw-text-opacity))}.flatpickr-months .flatpickr-prev-month{margin-left:-10px}.flatpickr-months .flatpickr-next-month{margin-right:-10px}.flatpickr-months .flatpickr-month{--tw-text-opacity:1;color:rgb(30 41 59 / var(--tw-text-opacity));height:auto;line-height:inherit}.flatpickr-current-month{font-size:.875rem;line-height:1.5715;font-weight:500;position:static;height:auto;width:auto;left:auto;padding:0}.flatpickr-current-month span.cur-month{margin:0;font-weight:500}.flatpickr-current-month span.cur-month:hover{background:none}.flatpickr-current-month input.cur-year{font-weight:inherit;box-shadow:none!important}.numInputWrapper:hover{background:none}.numInputWrapper span{display:none}span.flatpickr-weekday{font-size:.75rem;line-height:1.5;font-weight:500;--tw-text-opacity:1;color:rgb(148 163 184 / var(--tw-text-opacity))}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{display:none}.form-input:focus,.form-textarea:focus,.form-multiselect:focus,.form-select:focus,.form-checkbox:focus,.form-radio:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.invisible{visibility:hidden}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:-webkit-sticky;position:sticky}.inset-0{top:0px;right:0px;bottom:0px;left:0px}.bottom-0{bottom:0px}.right-0{right:0px}.top-full{top:100%}.top-0{top:0px}.left-0{left:0px}.bottom-full{bottom:100%}.left-1\\/2{left:50%}.right-auto{right:auto}.top-20{top:5rem}.z-60{z-index:60}.z-10{z-index:10}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.col-span-full{grid-column:1 / -1}.-m-1{margin:-.25rem}.mx-auto{margin-left:auto;margin-right:auto}.mx-3{margin-left:.75rem;margin-right:.75rem}.my-1{margin-top:.25rem;margin-bottom:.25rem}.my-2{margin-top:.5rem;margin-bottom:.5rem}.mr-2{margin-right:.5rem}.ml-2{margin-left:.5rem}.mb-1{margin-bottom:.25rem}.mb-8{margin-bottom:2rem}.ml-5{margin-left:1.25rem}.mt-1{margin-top:.25rem}.-mb-px{margin-bottom:-1px}.ml-3{margin-left:.75rem}.mb-10{margin-bottom:2.5rem}.mt-3{margin-top:.75rem}.mb-0\\.5{margin-bottom:.125rem}.mb-0{margin-bottom:0}.ml-1{margin-left:.25rem}.mt-auto{margin-top:auto}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.-ml-px{margin-left:-1px}.mr-3{margin-right:.75rem}.-mt-4{margin-top:-1rem}.mr-16{margin-right:4rem}.-mr-48{margin-right:-12rem}.ml-4{margin-left:1rem}.mb-3{margin-bottom:.75rem}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-screen{height:100vh}.h-4{height:1rem}.h-8{height:2rem}.h-16{height:4rem}.h-6{height:1.5rem}.h-3{height:.75rem}.h-9{height:2.25rem}.h-10{height:2.5rem}.h-2\\.5{height:.625rem}.h-2{height:.5rem}.max-h-full{max-height:100%}.w-full{width:100%}.w-4{width:1rem}.w-8{width:2rem}.w-6{width:1.5rem}.w-px{width:1px}.w-64{width:16rem}.w-3{width:.75rem}.w-60{width:15rem}.w-9{width:2.25rem}.w-10{width:2.5rem}.w-2\\.5{width:.625rem}.w-2{width:.5rem}.min-w-36{min-width:9rem}.min-w-44{min-width:11rem}.min-w-56{min-width:14rem}.min-w-80{min-width:20rem}.max-w-9xl{max-width:96rem}.max-w-2xl{max-width:42rem}.flex-1{flex:1 1 0%}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.table-auto{table-layout:auto}.origin-top-right{transform-origin:top right}.-translate-y-2{--tw-translate-y:-.5rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-0{--tw-translate-y:0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x:0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-64{--tw-translate-x:-16rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-4{--tw-translate-y:1rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-flow-col{grid-auto-flow:column}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-6{gap:1.5rem}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.-space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(-.75rem * var(--tw-space-x-reverse));margin-left:calc(-.75rem * calc(1 - var(--tw-space-x-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-slate-100>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgb(241 245 249 / var(--tw-divide-opacity))}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-scroll{overflow-y:scroll}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.rounded-full{border-radius:9999px}.rounded{border-radius:.25rem}.rounded-sm{border-radius:.125rem}.border{border-width:1px}.border-2{border-width:2px}.border-0{border-width:0px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-slate-200{--tw-border-opacity:1;border-color:rgb(226 232 240 / var(--tw-border-opacity))}.border-slate-100{--tw-border-opacity:1;border-color:rgb(241 245 249 / var(--tw-border-opacity))}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.bg-yellow-500{--tw-bg-opacity:1;background-color:rgb(234 179 8 / var(--tw-bg-opacity))}.bg-indigo-500{--tw-bg-opacity:1;background-color:rgb(99 102 241 / var(--tw-bg-opacity))}.bg-slate-800{--tw-bg-opacity:1;background-color:rgb(30 41 59 / var(--tw-bg-opacity))}.bg-slate-100{--tw-bg-opacity:1;background-color:rgb(241 245 249 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-slate-200{--tw-bg-opacity:1;background-color:rgb(226 232 240 / var(--tw-bg-opacity))}.bg-slate-900{--tw-bg-opacity:1;background-color:rgb(15 23 42 / var(--tw-bg-opacity))}.bg-slate-50{--tw-bg-opacity:1;background-color:rgb(248 250 252 / var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.bg-rose-500{--tw-bg-opacity:1;background-color:rgb(244 63 94 / var(--tw-bg-opacity))}.bg-sky-500{--tw-bg-opacity:1;background-color:rgb(14 165 233 / var(--tw-bg-opacity))}.bg-indigo-200{--tw-bg-opacity:1;background-color:rgb(199 210 254 / var(--tw-bg-opacity))}.bg-opacity-30{--tw-bg-opacity:.3}.fill-current{fill:currentColor}.p-3{padding:.75rem}.p-4{padding:1rem}.p-2{padding:.5rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.px-1\\.5{padding-left:.375rem;padding-right:.375rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-4{padding-left:1rem;padding-right:1rem}.py-8{padding-top:2rem;padding-bottom:2rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-2{padding-left:.5rem;padding-right:.5rem}.pt-2{padding-top:.5rem}.pb-2{padding-bottom:.5rem}.pb-6{padding-bottom:1.5rem}.pr-3{padding-right:.75rem}.pl-3{padding-left:.75rem}.pl-9{padding-left:2.25rem}.pt-3{padding-top:.75rem}.pt-1\\.5{padding-top:.375rem}.pt-1{padding-top:.25rem}.pt-5{padding-top:1.25rem}.pl-10{padding-left:2.5rem}.pr-4{padding-right:1rem}.pt-0\\.5{padding-top:.125rem}.pt-0{padding-top:0}.text-left{text-align:left}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.5715}.text-3xl{font-size:1.88rem;line-height:1.33;letter-spacing:-.01em}.text-xs{font-size:.75rem;line-height:1.5}.text-lg{font-size:1.125rem;line-height:1.5;letter-spacing:-.01em}.text-2xl{font-size:1.5rem;line-height:1.33;letter-spacing:-.01em}.font-bold{font-weight:700}.font-semibold{font-weight:600}.font-medium{font-weight:500}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-slate-800{--tw-text-opacity:1;color:rgb(30 41 59 / var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-slate-50{--tw-text-opacity:1;color:rgb(248 250 252 / var(--tw-text-opacity))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity))}.text-slate-400{--tw-text-opacity:1;color:rgb(148 163 184 / var(--tw-text-opacity))}.text-slate-200{--tw-text-opacity:1;color:rgb(226 232 240 / var(--tw-text-opacity))}.\\!text-indigo-500{--tw-text-opacity:1 !important;color:rgb(99 102 241 / var(--tw-text-opacity))!important}.text-slate-600{--tw-text-opacity:1;color:rgb(71 85 105 / var(--tw-text-opacity))}.text-indigo-600{--tw-text-opacity:1;color:rgb(79 70 229 / var(--tw-text-opacity))}.text-indigo-200{--tw-text-opacity:1;color:rgb(199 210 254 / var(--tw-text-opacity))}.text-indigo-500{--tw-text-opacity:1;color:rgb(99 102 241 / var(--tw-text-opacity))}.text-indigo-300{--tw-text-opacity:1;color:rgb(165 180 252 / var(--tw-text-opacity))}.text-slate-700{--tw-text-opacity:1;color:rgb(51 65 85 / var(--tw-text-opacity))}.\\!text-indigo-600{--tw-text-opacity:1 !important;color:rgb(79 70 229 / var(--tw-text-opacity))!important}.text-rose-500{--tw-text-opacity:1;color:rgb(244 63 94 / var(--tw-text-opacity))}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity))}.text-sky-500{--tw-text-opacity:1;color:rgb(14 165 233 / var(--tw-text-opacity))}.text-indigo-50{--tw-text-opacity:1;color:rgb(238 242 255 / var(--tw-text-opacity))}.text-rose-50{--tw-text-opacity:1;color:rgb(255 241 242 / var(--tw-text-opacity))}.text-green-50{--tw-text-opacity:1;color:rgb(240 253 244 / var(--tw-text-opacity))}.text-sky-50{--tw-text-opacity:1;color:rgb(240 249 255 / var(--tw-text-opacity))}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.line-through{-webkit-text-decoration-line:line-through;text-decoration-line:line-through}.placeholder-slate-400::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(148 163 184 / var(--tw-placeholder-opacity))}.placeholder-slate-400:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgb(148 163 184 / var(--tw-placeholder-opacity))}.placeholder-slate-400::placeholder{--tw-placeholder-opacity:1;color:rgb(148 163 184 / var(--tw-placeholder-opacity))}.opacity-50{opacity:.5}.opacity-0{opacity:0}.opacity-100{opacity:1}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, .08), 0 4px 6px -2px rgba(0, 0, 0, .01);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-150{transition-duration:.15s}.duration-100{transition-duration:.1s}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.last\\:mb-0:last-child{margin-bottom:0}.last\\:border-0:last-child{border-width:0px}.hover\\:border-slate-300:hover{--tw-border-opacity:1;border-color:rgb(203 213 225 / var(--tw-border-opacity))}.hover\\:bg-indigo-600:hover{--tw-bg-opacity:1;background-color:rgb(79 70 229 / var(--tw-bg-opacity))}.hover\\:bg-slate-200:hover{--tw-bg-opacity:1;background-color:rgb(226 232 240 / var(--tw-bg-opacity))}.hover\\:bg-slate-50:hover{--tw-bg-opacity:1;background-color:rgb(248 250 252 / var(--tw-bg-opacity))}.hover\\:bg-indigo-500:hover{--tw-bg-opacity:1;background-color:rgb(99 102 241 / var(--tw-bg-opacity))}.hover\\:text-slate-400:hover{--tw-text-opacity:1;color:rgb(148 163 184 / var(--tw-text-opacity))}.hover\\:text-slate-500:hover{--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity))}.hover\\:text-slate-600:hover{--tw-text-opacity:1;color:rgb(71 85 105 / var(--tw-text-opacity))}.hover\\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.hover\\:text-slate-200:hover{--tw-text-opacity:1;color:rgb(226 232 240 / var(--tw-text-opacity))}.hover\\:text-slate-800:hover{--tw-text-opacity:1;color:rgb(30 41 59 / var(--tw-text-opacity))}.hover\\:text-rose-600:hover{--tw-text-opacity:1;color:rgb(225 29 72 / var(--tw-text-opacity))}.hover\\:text-slate-900:hover{--tw-text-opacity:1;color:rgb(15 23 42 / var(--tw-text-opacity))}.hover\\:text-indigo-600:hover{--tw-text-opacity:1;color:rgb(79 70 229 / var(--tw-text-opacity))}.hover\\:underline:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.focus\\:border-slate-300:focus{--tw-border-opacity:1;border-color:rgb(203 213 225 / var(--tw-border-opacity))}.focus\\:ring-transparent:focus{--tw-ring-color:transparent}.group:hover .group-hover\\:text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity))}.group:hover .group-hover\\:text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.group:hover .group-hover\\:text-slate-800{--tw-text-opacity:1;color:rgb(30 41 59 / var(--tw-text-opacity))}.group:hover .group-hover\\:text-opacity-50{--tw-text-opacity:.5}.sidebar-expanded .sidebar-expanded\\:rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media (min-width: 640px){.sm\\:col-span-6{grid-column:span 6 / span 6}.sm\\:mb-0{margin-bottom:0}.sm\\:mr-3{margin-right:.75rem}.sm\\:mr-0{margin-right:0}.sm\\:inline{display:inline}.sm\\:flex{display:flex}.sm\\:auto-cols-max{grid-auto-columns:-webkit-max-content;grid-auto-columns:max-content}.sm\\:items-center{align-items:center}.sm\\:justify-start{justify-content:flex-start}.sm\\:justify-end{justify-content:flex-end}.sm\\:justify-between{justify-content:space-between}.sm\\:p-6{padding:1.5rem}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:px-2{padding-left:.5rem;padding-right:.5rem}}@media (min-width: 768px){.md\\:bottom-8{bottom:2rem}.md\\:right-12{right:3rem}.md\\:left-auto{left:auto}.md\\:right-0{right:0px}.md\\:w-auto{width:auto}.md\\:rounded{border-radius:.25rem}.md\\:text-3xl{font-size:1.88rem;line-height:1.33;letter-spacing:-.01em}}@media (min-width: 1024px){.lg\\:static{position:static}.lg\\:left-auto{left:auto}.lg\\:top-auto{top:auto}.lg\\:z-auto{z-index:auto}.lg\\:block{display:block}.lg\\:inline-flex{display:inline-flex}.lg\\:hidden{display:none}.lg\\:w-20{width:5rem}.lg\\:translate-x-0{--tw-translate-x:0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.lg\\:overflow-y-auto{overflow-y:auto}.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:opacity-0{opacity:0}.sidebar-expanded .lg\\:sidebar-expanded\\:block{display:block}.sidebar-expanded .lg\\:sidebar-expanded\\:hidden{display:none}.sidebar-expanded .lg\\:sidebar-expanded\\:\\!w-64{width:16rem!important}.sidebar-expanded .lg\\:sidebar-expanded\\:opacity-100{opacity:1}}@media (min-width: 1280px){.xl\\:col-span-4{grid-column:span 4 / span 4}.xl\\:col-span-8{grid-column:span 8 / span 8}.xl\\:col-span-6{grid-column:span 6 / span 6}.xl\\:block{display:block}}@media (min-width: 1536px){.\\32xl\\:block{display:block}.\\32xl\\:hidden{display:none}.\\32xl\\:\\!w-64{width:16rem!important}.\\32xl\\:opacity-100{opacity:1}}@media (min-width: 480px){.xs\\:block{display:block}}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dist_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./dist.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/dist.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_tailwindcss_base_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../node_modules/tailwindcss/base.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/tailwindcss/base.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_tailwindcss_components_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../node_modules/tailwindcss/components.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/tailwindcss/components.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_additional_styles_utility_patterns_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./additional-styles/utility-patterns.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/additional-styles/utility-patterns.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_additional_styles_range_slider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./additional-styles/range-slider.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/additional-styles/range-slider.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_additional_styles_toggle_switch_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./additional-styles/toggle-switch.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/additional-styles/toggle-switch.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_additional_styles_flatpickr_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./additional-styles/flatpickr.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/additional-styles/flatpickr.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_additional_styles_theme_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./additional-styles/theme.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/additional-styles/theme.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_vendor_react_tabs_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./vendor/react-tabs.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/vendor/react-tabs.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_vendor_accordion_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./vendor/accordion.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/vendor/accordion.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_tailwindcss_utilities_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../node_modules/tailwindcss/utilities.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/tailwindcss/utilities.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");
// Imports














var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=fallback);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_dist_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_tailwindcss_base_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_tailwindcss_components_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_additional_styles_utility_patterns_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_additional_styles_range_slider_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_additional_styles_toggle_switch_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_additional_styles_flatpickr_css__WEBPACK_IMPORTED_MODULE_8__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_additional_styles_theme_css__WEBPACK_IMPORTED_MODULE_9__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_vendor_react_tabs_css__WEBPACK_IMPORTED_MODULE_10__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_vendor_accordion_css__WEBPACK_IMPORTED_MODULE_11__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_tailwindcss_utilities_css__WEBPACK_IMPORTED_MODULE_12__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_13__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/vendor/accordion.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/vendor/accordion.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n* ----------------------------------------------\n* Demo styles\n* ----------------------------------------------\n**/\n.accordion {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 2px;\n}\n\n.accordion__item + .accordion__item {\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.accordion__button {\n    background-color: white;\n    color: rgb(30 41 59);\n    cursor: pointer;\n    padding: 18px;\n    width: 100%;\n    text-align: left;\n    border: none;\n}\n\n.accordion__button:hover {\n    background-color: #f7fafc;\n}\n\n.accordion__button:before {\n    display: inline-block;\n    content: '';\n    height: 10px;\n    width: 10px;\n    margin-right: 12px;\n    border-bottom: 2px solid currentColor;\n    border-right: 2px solid currentColor;\n    transform: rotate(-45deg);\n}\n\n.accordion__button[aria-expanded='true']::before,\n.accordion__button[aria-selected='true']::before {\n    transform: rotate(45deg);\n}\n\n[hidden] {\n    display: none;\n}\n\n.accordion__panel {\n    padding: 20px;\n    animation: fadein 0.35s ease-in;\n    background: white;\n}\n\n/* -------------------------------------------------- */\n/* ---------------- Animation part ------------------ */\n/* -------------------------------------------------- */\n\n@keyframes fadein {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/vendor/accordion.css"],"names":[],"mappings":"AAAA;;;;EAIE;AACF;IACI,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,uBAAuB;IACvB,oBAAoB;IACpB,eAAe;IACf,aAAa;IACb,WAAW;IACX,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,qCAAqC;IACrC,oCAAoC;IACpC,yBAAyB;AAC7B;;AAEA;;IAEI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,iBAAiB;AACrB;;AAEA,uDAAuD;AACvD,uDAAuD;AACvD,uDAAuD;;AAEvD;IACI;QACI,UAAU;IACd;;IAEA;QACI,UAAU;IACd;AACJ","sourcesContent":["/**\n* ----------------------------------------------\n* Demo styles\n* ----------------------------------------------\n**/\n.accordion {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 2px;\n}\n\n.accordion__item + .accordion__item {\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.accordion__button {\n    background-color: white;\n    color: rgb(30 41 59);\n    cursor: pointer;\n    padding: 18px;\n    width: 100%;\n    text-align: left;\n    border: none;\n}\n\n.accordion__button:hover {\n    background-color: #f7fafc;\n}\n\n.accordion__button:before {\n    display: inline-block;\n    content: '';\n    height: 10px;\n    width: 10px;\n    margin-right: 12px;\n    border-bottom: 2px solid currentColor;\n    border-right: 2px solid currentColor;\n    transform: rotate(-45deg);\n}\n\n.accordion__button[aria-expanded='true']::before,\n.accordion__button[aria-selected='true']::before {\n    transform: rotate(45deg);\n}\n\n[hidden] {\n    display: none;\n}\n\n.accordion__panel {\n    padding: 20px;\n    animation: fadein 0.35s ease-in;\n    background: white;\n}\n\n/* -------------------------------------------------- */\n/* ---------------- Animation part ------------------ */\n/* -------------------------------------------------- */\n\n@keyframes fadein {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/vendor/react-tabs.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/vendor/react-tabs.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".react-tabs {\n    -webkit-tap-highlight-color: transparent;\n  }\n  \n  .react-tabs__tab-list {\n    border-bottom: 1px solid #aaa;\n    margin: 0 0 10px;\n    padding: 0;\n  }\n  \n  .react-tabs__tab {\n    display: inline-block;\n    border: 1px solid transparent;\n    border-bottom: none;\n    bottom: -1px;\n    position: relative;\n    list-style: none;\n    padding: 6px 12px;\n    cursor: pointer;\n  }\n  \n  .react-tabs__tab--selected {\n    background: #fff;\n    border-color: #aaa;\n    color: black;\n    border-radius: 5px 5px 0 0;\n  }\n  \n  .react-tabs__tab--disabled {\n    color: GrayText;\n    cursor: default;\n  }\n  \n  .react-tabs__tab:focus {\n    outline: none;\n  }\n  \n  .react-tabs__tab:focus:after {\n    content: '';\n    position: absolute;\n    height: 5px;\n    left: -4px;\n    right: -4px;\n    bottom: -5px;\n    background: #fff;\n  }\n  \n  .react-tabs__tab-panel {\n    display: none;\n  }\n  \n  .react-tabs__tab-panel--selected {\n    display: block;\n  }\n  ", "",{"version":3,"sources":["webpack://./src/css/vendor/react-tabs.css"],"names":[],"mappings":"AAAA;IACI,wCAAwC;EAC1C;;EAEA;IACE,6BAA6B;IAC7B,gBAAgB;IAChB,UAAU;EACZ;;EAEA;IACE,qBAAqB;IACrB,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,0BAA0B;EAC5B;;EAEA;IACE,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,WAAW;IACX,YAAY;IACZ,gBAAgB;EAClB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,cAAc;EAChB","sourcesContent":[".react-tabs {\n    -webkit-tap-highlight-color: transparent;\n  }\n  \n  .react-tabs__tab-list {\n    border-bottom: 1px solid #aaa;\n    margin: 0 0 10px;\n    padding: 0;\n  }\n  \n  .react-tabs__tab {\n    display: inline-block;\n    border: 1px solid transparent;\n    border-bottom: none;\n    bottom: -1px;\n    position: relative;\n    list-style: none;\n    padding: 6px 12px;\n    cursor: pointer;\n  }\n  \n  .react-tabs__tab--selected {\n    background: #fff;\n    border-color: #aaa;\n    color: black;\n    border-radius: 5px 5px 0 0;\n  }\n  \n  .react-tabs__tab--disabled {\n    color: GrayText;\n    cursor: default;\n  }\n  \n  .react-tabs__tab:focus {\n    outline: none;\n  }\n  \n  .react-tabs__tab:focus:after {\n    content: '';\n    position: absolute;\n    height: 5px;\n    left: -4px;\n    right: -4px;\n    bottom: -5px;\n    background: #fff;\n  }\n  \n  .react-tabs__tab-panel {\n    display: none;\n  }\n  \n  .react-tabs__tab-panel--selected {\n    display: block;\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "@rjsf/bootstrap-4":
/*!************************************!*\
  !*** external "@rjsf/bootstrap-4" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@rjsf/bootstrap-4");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "electron-unhandled":
/*!*************************************!*\
  !*** external "electron-unhandled" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("electron-unhandled");

/***/ }),

/***/ "electron/main":
/*!********************************!*\
  !*** external "electron/main" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("electron/main");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ "parse-url":
/*!****************************!*\
  !*** external "parse-url" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("parse-url");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-accessible-accordion":
/*!*********************************************!*\
  !*** external "react-accessible-accordion" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("react-accessible-accordion");

/***/ }),

/***/ "react-dom/client":
/*!***********************************!*\
  !*** external "react-dom/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/client");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-tabs":
/*!*****************************!*\
  !*** external "react-tabs" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("react-tabs");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ "sanitize-filename":
/*!************************************!*\
  !*** external "sanitize-filename" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("sanitize-filename");

/***/ }),

/***/ "tailwindcss/resolveConfig":
/*!********************************************!*\
  !*** external "tailwindcss/resolveConfig" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("tailwindcss/resolveConfig");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/main.jsx ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.jsx");





const unhandled = __webpack_require__(/*! electron-unhandled */ "electron-unhandled");

unhandled();
react_dom_client__WEBPACK_IMPORTED_MODULE_1___default().createRoot(document.getElementById('root')).render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
})();

/******/ })()
;
//# sourceMappingURL=main_app.js.map