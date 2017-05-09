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


path.basename(path.dirname(fs.realpathSync(__filename)));
path.basename(process.cwd());

clear();
console.log(
  chalk.yellow(
    figlet.textSync('MOS CLI', { horizontalLayout: 'full' })
  )
);