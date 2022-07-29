import resolveConfig from 'tailwindcss/resolveConfig';
const moment = require('moment');
import { app } from "electron";
import parseUrl from 'parse-url';
var sanitize = require("sanitize-filename");

export const tailwindConfig = () => {
  // Tailwind config
  return resolveConfig('./src/css/tailwind.config.js')
}

export const hexToRGB = (h) => {
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

export const formatValue = (value) => Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 3,
  notation: 'compact',
}).format(value);

export const getTimeElapsedFunc = (project) => {
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
}

export const getBasePath = (project, options) => {
  let name = sanitize(project.name) || 'default';
  let path = app.getPath('userData') + '/downloads/' + name;
  if (options.basePath) {
    path = options.basePath + '/' + name;
  }
  return path;
}

export const getFolderFromProject = (project) => {
  let p = null;
  if (project && project.base_path && project.url) {
    p = project.base_path;
    if (!project.no_directories) {
      p += '/';
      let parsed = parseUrl(project.url);
      p += parsed.resource || parsed.pathname;
    }
  }
  return p;
}