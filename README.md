# Cloneable

[![License](https://img.shields.io/github/license/CloneableApp/Cloneable?label=License&color=brightgreen&cacheSeconds=3600)](./LICENSE)

> The all-in-one website downloader tool for offline browsing, archiving, backups, and more.

## Screenshots

[![Screenshot](https://cloneable.app/images/dashboard.png)](https://cloneable.app)
[![Screenshot](https://cloneable.app/images/downloads.png)](https://cloneable.app)
[![Screenshot](https://cloneable.app/images/settings.png)](https://cloneable.app)

## Downloads

Downloadable binaries are currently not available, but will be soon. For now, follow the steps in the Installation section.

### Requirements

If you want to use your own version of `wget`, your system must have that installed and you must set that path in your settings. Binaries of `wget` is included with this software but they're not guaranteed to work properly on all systems.

## Installation

To run Cloneable locally in development mode:

```
git clone git@github.com:CloneableApp/Cloneable.git
cd Cloneable
nvm install
nvm use
npm install
npm start
```

To get a working binary created in `dist/`:

```
nvm install
nvm use
npm install
npm postinstall # might be necessary
npm run app:dist
```

## Information

Cloneable is a free and open source desktop application that can clone websites to your local computer automatically, with smart handling of links, images, files, stylesheets, and more, so sites load seamlessly for offline browsing.

It is built with [Electron](https://www.electronjs.org/) and [React](https://reactjs.org). Check the [package.json](./package.json) for a list of all dependencies.

Behind the scenes, Cloneable relies heavily on [wget](https://www.gnu.org/software/wget/).

## TODO

- Add dark mode
- Add internationalization
- Add pagination to Clones page
- Add different format options to supply cookies (instead of just Netscape cookies.txt format)
- Add ability to stop and continue Clones, saving progress

## Getting Help

Feel free to open an issue here, or email me at [cloneableapp@gmail.com](mailto:cloneableapp@gmail.com).

## ❤️ Donating

If you would like to support development of this project, please consider donating. We currently prefer Ko-fi to accept donations. [Here's our Ko-fi page](https://ko-fi.com/cloneable).
## License

Cloneable is released under the [GNU General Public License v3.0](./LICENSE).

---

## For further information check [cloneable.app](https://cloneable.app)
