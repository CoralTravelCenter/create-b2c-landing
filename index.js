#!/usr/bin/env node

const path = require('path')
const copy = require('recursive-copy');

const cwd = process.cwd();

console.log("+++ create-b2c-landing: %o", cwd);

copy(path.join(__dirname, 'project-scaffold'), cwd, { dot: true }, (error, results) => {
    if (error) {
        console.error('Copy failed: ' + error);
    } else {
        console.info('Copied ' + results.length + ' files');
    }
});