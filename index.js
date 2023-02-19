#!/usr/bin/env node

const { path: app_root_path } = require("app-root-path");
const path = require('path')
const copy = require('recursive-copy');

const cwd = process.cwd();

console.log("+++ create-b2c-landing: %o", cwd);

copy(path.join(app_root_path, 'project-scaffold', '**'), cwd, (error, results) => {
    if (error) {
        console.error('Copy failed: ' + error);
    } else {
        console.info('Copied ' + results.length + ' files');
    }
});