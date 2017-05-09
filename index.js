#!/usr/bin/env node
'use strict';
const chalk       = require('chalk');
const clear       = require('clear');
const CLI         = require('clui');
const figlet      = require('figlet');
const inquirer    = require('inquirer');
const Preferences = require('preferences');
const Spinner     = CLI.Spinner;
const _           = require('lodash');
const touch       = require('touch');
const fs          = require('fs');
const files = require('./lib/files');
const path = require('path');
const program = require('commander');



path.basename(path.dirname(fs.realpathSync(__filename)));
path.basename(process.cwd());

// clear();
// console.log(
//   chalk.yellow(
//     figlet.textSync('MOS CLI', { horizontalLayout: 'full' })
//   )
// );
program
  .version('0.0.1')
  .command('')
  .description('')
  .option('','')
  .option('','')
  .action('');
program.parse(process.argv);