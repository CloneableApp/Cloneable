'use strict';
import path from 'path';
import { remote, app } from 'electron';
import { rootPath } from 'electron-root-path';
import getPlatform from './get-platform';
const IS_PROD = process.env.NODE_ENV === 'production';
const root = rootPath;
const isPackaged =
  process.mainModule.filename.indexOf('app.asar') !== -1;
const binariesPath =
  IS_PROD && isPackaged
    ? path.join(path.dirname(app.getAppPath()), '..', './Resources', './bin')
    : path.join(root, './build', getPlatform(), './bin');
export const wgetExecPath = path.resolve(path.join(binariesPath, getPlatform() === 'win' ? './wget.exe' : './wget')); 