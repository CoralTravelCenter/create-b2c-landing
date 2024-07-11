#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
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

const git_ignores = ['/.idea/', '/.parcel-cache/', '/dev/', '/prod/'];
const git_ignore_path = path.join(cwd, '.gitignore');
fs.writeFileSync(git_ignore_path, git_ignores.join("\n") + "\n", { encoding: 'utf8' });
