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
const exec = require('child_process');
const pkg = require('./package.json');
const os = require('os');
const sys = require('sys')
path.basename(path.dirname(fs.realpathSync(__filename)));
path.basename(process.cwd());

// clear();
const welcometxt = console.log(
  chalk.yellow(
    figlet.textSync('MOS CLI', { horizontalLayout: 'full' })
  )
);
/**
 * list function definition
 *
 */
let list = (directory,options)  => {
    const cmd = 'ls';
    let params = [];
    
    if (options.all) params.push("a");
    if (options.long) params.push("l");
    let parameterizedCommand = params.length 
                                ? cmd + ' -' + params.join('') 
                                : cmd ;
    if (directory) parameterizedCommand += ' ' + directory ;
    
    let output = (error, stdout, stderr) => {
        if (error) console.log(chalk.red.bold.underline("exec error:") + error);
        if (stdout) console.log(chalk.green.bold.underline("Result:") + stdout);
        if (stderr) console.log(chalk.red("Error: ") + stderr);
    };
    
    exec(parameterizedCommand,output);
    
};
var getMachineType = function(){
    // return os.platform();
    console.log('oya');
};
const update = function(){
    // return os.platform();
    console.log('oya');
};
const mosversion = function(){
    console.log('Version Called');
}
// program
//     .version(pkg.version)
//     .command('list [directory]')
//     .option('-a, --all', 'List all')
//     .option("--machineType","return machine type")
//     .option('-l, --long','Long list format')
//     // .action(hi)
//     .action(welcometxt)
//     .action(function(cmd){
//         var resultObject = {};
       
//         if(cmd.machineType){
//             resultObject.machineType = getMachineType();
//         }
//         return resultObject;
//     });
program.command ('info')
.version('Version ' +  pkg.version)
.description('Main')
.option("--machineType","return machine type")
.action(function(cmd){
        var resultObject = {};
       
        if(cmd.machineType){
            resultObject.machineType = getMachineType();
        }
        return resultObject;
    });

program.command ('version')
.version('Version ' +  pkg.version)
.description('Mos Version')
.option("--machineType","return machine type")
.action(function(cmd){
        var resultObject = {};
       
        if(cmd.machineType){
            resultObject.machineType = getMachineType();
        }
        return resultObject;
    });
program.parse(process.argv);


// if program was called with no arguments, show help.
if (program.args.length === 0) program.help();