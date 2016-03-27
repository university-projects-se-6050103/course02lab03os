#!/usr/bin/env node

'use strict';

const program = require('commander');
const _ = require('lodash');

program
    .command('evsw')
    .description('List environment variables that start with a given character')
    .option('-x, --xchar', 'Character used to search env vars')
    .action((xchar) => {
        _
            .chain(process.env)
            .pickBy((value, key) => _.startsWith(key, xchar))
            .forOwn((value, key) => console.log(`${key}=${value}`))
            .value();
    })
    .on('--help', () => {
        console.log('  Examples:');
        console.log('    $ node index evsw -x N');
    });

program.parse(process.argv);
