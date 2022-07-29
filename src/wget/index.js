const { app, powerSaveBlocker } = require('electron');
const parseUrl = require("parse-url");
var spawn = require('child_process').spawn; 
var dir = require('node-dir'); 
const { default: parse } = require('node-html-parser');
const fs = require('fs');
const { getBasePath } = require('../utils/Utils');
const { setProjectError, getProject, setProjectCompleted } = require('../db');
const { wgetExecPath } = require('../binaries');

function getCommandArgs(project, options) {
    let path = project.base_path;

    let args = [
        '--directory-prefix=' + path,
        '--adjust-extension',
        '--convert-links',
        '--page-requisites',
        '--no-parent',
        '--no-remove-listing',
    ];

    const optionsConfig = {
        'noRecursive': {
            'flag': '--recursive',
        },
        'defaultPageName': {
            'flag': '--default-page',
            'includeValue': true
        },
        'numRetries': {
            'flag': '--tries',
            'includeValue': true,
            'min': 0
        },
        'limitDownloadSpeed': {
            'flag': '--limit-rate',
            'includeValue': true
        },
        'waitTime': {
            'flag': '--wait',
            'includeValue': true,
            'min': 0
        },
        'randomWait': {
            'flag': '--random-wait'
        },
        'waitRetryTime': {
            'flag': '--waitretry',
            'includeValue': true,
            'min': 0
        },
        'downloadQuota': {
            'flag': '--quota',
            'includeValue': true
        },
        'maxRedirects': {
            'flag': '--max-redirect',
            'includeValue': true,
            'min': 0
        },
        'referer': {
            'flag': '--referer',
            'includeValue': true
        },
        'userAgent': {
            'flag': '--user-agent',
            'includeValue': true
        },
        'httpUser': {
            'flag': '--user',
            'includeValue': true
        },
        'httpPassword': {
            'flag': '--password',
            'includeValue': true
        },
        'disableCookies': {
            'flag': '--no-cookies',
            'includeValue': true
        },
        'bindAddress': {
            'flag': '--bind-address',
            'includeValue': true
        },
        'noDNSCache': {
            'flag': '--no-dns-cache'
        },
        'retryConnectionRefused': {
            'flag': '--retry-connrefused'
        },
        'noHttpKeepAlive': {
            'flag': '--no-http-keep-alive'
        },
        'noCache': {
            'flag': '--no-cache'
        },
        'ignoreContentLength': {
            'flag': '--ignore-length'
        },
        'noSSL': {
            'flag': '--no-check-certificate'
        },
        'ignoreCase': {
            'flag': '--ignore-case'
        },
        'noDirectories': {
            'flag': '--no-directories'
        }
    };

    // set these flags

    for (var key in optionsConfig) {
        if (!optionsConfig.hasOwnProperty(key)) {
            continue;
        }
        if (typeof options[key] !== 'undefined' && options[key]) {
            if (optionsConfig[key].includeValue) {
                let val = options[key];
                if (typeof optionsConfig[key].min !== 'undefined') {
                    if (val < optionsConfig[key].min) {
                        val = optionsConfig[key].min;
                    }
                }
                let add = true;
                if (typeof val === 'string') {
                    if (!val.trim()) {
                        add = false;
                    }
                }
                if (add) {
                    args.push(optionsConfig[key].flag + '=' + val);
                }
            }
            else {
                args.push(optionsConfig[key].flag);
            }
        }
    }

    // set the rest of the flags that aren't as simple

    // --level
    if (typeof options.recursiveDepthLevel !== 'undefined') {
        if (options.recursiveDepthLevel < 0) {
            args.push('--level=inf');
        }
        else {
            args.push('--level=' + options.recursiveDepthLevel);
        }
    }

    // --save-cookies
    if (typeof options.saveCookies !== 'undefined' && options.saveCookies) {
        args.push('--save-cookies');
        let saveCookiesPath = getBasePath(project, options);
        saveCookiesPath += '/cookies.txt';
        args.push(saveCookiesPath);
    }

    // --keep-session-cookies
    if (typeof options.saveSessionCookies !== 'undefined' && options.saveSessionCookies) {
        args.push('--keep-session-cookies=on');
    }

    // --load-cookies
    if (typeof options.cookiesFilePath !== 'undefined' && options.cookiesFilePath) {
        args.push('--load-cookies');
        args.push(options.cookiesFilePath);
    }

    // --dns-timeout, --connect-timeout, --read-timeout
    if (typeof options.timeout !== 'undefined' && options.timeout) {
        if (typeof options.timeout.dnsTimeout !== 'undefined') {
            args.push('--dns-timeout=' + options.timeout.dnsTimeout);
        }
        if (typeof options.timeout.connectTimeout !== 'undefined') {
            args.push('--connect-timeout=' + options.timeout.connectTimeout);
        }
        if (typeof options.timeout.readTimeout !== 'undefined') {
            args.push('--read-timeout=' + options.timeout.readTimeout);
        }
    }

    // --restrict-file-names
    let fileNameModes = '';
    if (typeof options.fileNamesMode !== 'undefined' && options.fileNamesMode) {
        fileNameModes += options.fileNamesMode;
    }
    if (typeof options.fileNamesForce !== 'undefined' && options.fileNamesForce && options.fileNamesForce !== 'none') {
        if (fileNameModes.length) {
            fileNameModes += ',';
        }
        fileNameModes += options.fileNamesForce;
    }
    if (typeof options.fileNamesNoControl !== 'undefined' && options.fileNamesNoControl) {
        if (fileNameModes.length) {
            fileNameModes += ',';
        }
        fileNameModes += "nocontrol";
    }
    if (typeof options.fileNamesAscii !== 'undefined' && options.fileNamesAscii) {
        if (fileNameModes.length) {
            fileNameModes += ',';
        }
        fileNameModes += "ascii";
    }
    if (fileNameModes.length) {
        args.push('--restrict-file-names=' + fileNameModes);
    }

    // --ignore-robots
    if (typeof options.ignoreRobots !== 'undefined' && options.ignoreRobots) {
        args.push('-e');
        args.push('robots=off');
    }

    // --accept 
    if (typeof options.acceptFilters !== 'undefined' && options.acceptFilters) {
        let filtersStr = '';
        let filtersArray = options.acceptFilters.split('\n');
        for (let i = 0; i < filtersArray.length; i++) {
            let f = filtersArray[i].trim();
            if (!f.length) {
                continue;
            }
            if (filtersStr.length) {
                filtersStr += ',';
            }
            filtersStr += f;
        }
        if (filtersStr.length) {
            args.push('--accept');
            args.push(filtersStr);
        }
    }

    // --reject 
    if (typeof options.rejectFilters !== 'undefined' && options.rejectFilters) {
        let filtersStr = '';
        let filtersArray = options.rejectFilters.split('\n');
        for (let i = 0; i < filtersArray.length; i++) {
            let f = filtersArray[i].trim();
            if (!f.length) {
                continue;
            }
            if (filtersStr.length) {
                filtersStr += ',';
            }
            filtersStr += f;
        }
        if (filtersStr.length) {
            args.push('--reject');
            args.push(filtersStr);
        }
    }

    // --include-directories 
    if (typeof options.includeDirs !== 'undefined' && options.includeDirs) {
        let filtersStr = '';
        let filtersArray = options.includeDirs.split('\n');
        for (let i = 0; i < filtersArray.length; i++) {
            let f = filtersArray[i].trim();
            if (!f.length) {
                continue;
            }
            if (filtersStr.length) {
                filtersStr += ',';
            }
            filtersStr += f;
        }
        if (filtersStr.length) {
            args.push('--include-directories=' + filtersStr);
        }
    }
    
    // --exclude-directories 
    if (typeof options.excludeDirs !== 'undefined' && options.excludeDirs) {
        let filtersStr = '';
        let filtersArray = options.excludeDirs.split('\n');
        for (let i = 0; i < filtersArray.length; i++) {
            let f = filtersArray[i].trim();
            if (!f.length) {
                continue;
            }
            if (filtersStr.length) {
                filtersStr += ',';
            }
            filtersStr += f;
        }
        if (filtersStr.length) {
            args.push('--exclude-directories=' + filtersStr);
        }
    }

    function getDomainFromURL(url) {
        let parsed = parseUrl(url);
        return parsed.resource || parsed.pathname;
    }

    // --domains
    if (typeof options.domains !== 'undefined' && options.domains) {
        let domainsArray = options.domains.split('\n');
        let domainString = getDomainFromURL(project.url);

        for (let i = 0; i < domainsArray.length; i++) {
            let d = domainsArray[i].trim();
            if (!d.length) {
                continue;
            }
            domainString = domainString + ',';
            domainString += getDomainFromURL(d);
        }

        args.push('--domains=' + domainString);

        args.push('--span-hosts');
    }

    // --header
    if (typeof options.headers !== 'undefined' && options.headers) {
        let headersArray = options.headers.split('\n');

        for (let i = 0; i < headersArray.length; i++) {
            let h = headersArray[i].trim();
            if (!h.length) {
                continue;
            }
            args.push('--header=' + h);
        }
    }

    // base url
    args.push(project.url);

    return args;
}

function fixFiles(project, options) {
    let p = project.base_path;
    p += '/';
    let parsed = parseUrl(project.url);
    p += parsed.resource || parsed.pathname;
    try {
        var filenames = dir.files(p, {
            sync: true,
            recursive: true,
            match: /.html?$/,
        });
        for (let i = 0; i < filenames.length; i++) {
            let filename = filenames[i];
            if (filename.match(/.html?$/gi) === null) {
                continue;
            }
            const data = fs.readFileSync(filename, 'utf8');
            const root = parse(data);
            let changed = false;

            // remove 'integrity' attribute
            if (!(typeof options.keepIntegrityAttributes !== 'undefined' && options.keepIntegrityAttributes)) {
                let integrityEls = root.querySelectorAll('[integrity]');
                for (let j = 0; j < integrityEls.length; j++) {
                    integrityEls[j].removeAttribute('integrity');
                    changed = true;
                }
            }

            if (changed) {
                fs.writeFileSync(filename, root.toString());
            }
        }
    } catch (err) {
        
    }
}

module.exports = (mainWindow, store, project, options, timeElapsedIntervalId, powerSaveBlockerId) => {
    function handleError(err) {
        setProjectError(project.id, err);
        const p = getProject(project.id);
        mainWindow.webContents.send("clone-finished", p);
        clearInterval(timeElapsedIntervalId);
    }
    
    var cmd;
    try {
        let wgetPath = wgetExecPath;
        if (typeof options.wgetPath !== 'undefined' && options.wgetPath.trim()) {
            wgetPath = options.wgetPath.trim();
        }
        cmd = spawn(wgetPath, getCommandArgs(project, options));
    } catch(err) {
        clearInterval(timeElapsedIntervalId);
        handleError(err);
        return;
    }

    cmd.on('error', function(err) {
        clearInterval(timeElapsedIntervalId);
        powerSaveBlocker.stop(powerSaveBlockerId);
        handleError(err);
    });

    cmd.stdout.on('data', function (data) {
        mainWindow.webContents.send("clone-data", project.id, data.toString());
    });
      
    cmd.stderr.on('data', function (data) {
        mainWindow.webContents.send("clone-data", project.id, data.toString());
    });
      
    cmd.on('exit', function (code) {
        clearInterval(timeElapsedIntervalId);
        powerSaveBlocker.stop(powerSaveBlockerId);
        if (code === null) {
            return;
        }
        
        if (
            code === 0 ||
            code === 8 // 8 is WGET_EXIT_SERVER_ERROR but it happens sometimes when there's no error
        ) {
            fixFiles(project, options);
            setProjectCompleted(project.id);
            const p = getProject(project.id);
            mainWindow.webContents.send("clone-finished", p);
        }
        else {
            handleError(code.toString());
        }
    });

    return cmd.pid;
}