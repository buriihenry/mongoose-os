#!/usr/bin/env node

'use strict';
const chalk = require('chalk');
const clear = require('clear');
const CLI = require('clui');
const figlet = require('figlet');
const inquirer = require('inquirer');
const Preferences = require('preferences');
const Spinner = CLI.Spinner;
const _ = require('lodash');
const touch = require('touch');
const fs = require('fs');
const files = require('./lib/files');
const path = require('path');
const program = require('commander');
const exec = require('child_process').exec;
const pkg = require('./package.json');
const os = require('os');
// const sys = require('sys')
path.basename(path.dirname(fs.realpathSync(__filename)));
path.basename(process.cwd());
const spawn = require('child_process').spawn;
const log = console.log;

// clear();
const welcometxt = console.log(
	chalk.yellow(
		figlet.textSync('MOS-CLI', {
			horizontalLayout: 'full'
		})
	)
);
//List Files  
// const ls = spawn('ls', ['./']);

// ls.stdout.on('data', data => {
// 	console.log(`stdout: ${data}`);
// });
/**
//  * list function definition
//  *
//  */
let list = (directory, options) => {
	const cmd = 'ls';
	let params = [];

	if (options.all) params.push("a");
	if (options.long) params.push("l");
	let parameterizedCommand = params.length ?
		cmd + ' -' + params.join('') :
		cmd;
	if (directory) parameterizedCommand += ' ' + directory;

	let output = (error, stdout, stderr) => {
		if (error) console.log(chalk.red.bold.underline("exec error:") + error);
		if (stdout) console.log(chalk.green.bold.underline("Result:") + stdout);
		if (stderr) console.log(chalk.red("Error: ") + stderr);
	};

	exec(parameterizedCommand, output);

};
const getMachineType = function () {
	// return os.platform();
	console.log('oya');
};
const update = function () {
	// return os.platform();
	console.log('oya');
};
// const gui = function(){
// console.log("Starting Gui");
// const ls = spawn( 'ls', [  './' ] );

// ls.stdout.on( 'data', data => {
//     console.log( `stdout: ${data}` );
// });
// }

// // program
// //     .version(pkg.version)
// //     .command('list [directory]')
// //     .option('-a, --all', 'List all')
// //     .option("--machineType","return machine type")
// //     .option('-l, --long','Long list format')
// //     // .action(hi)
// //     .action(welcometxt)
// //     .action(function(cmd){
// //         var resultObject = {};

// //         if(cmd.machineType){
// //             resultObject.machineType = getMachineType();
// //         }
// //         return resultObject;
// //     });
program.command('info')
	.version('Version ' + pkg.version)
	.description('Main')
	.option("--machineType", "return machine type")
	.action(function (cmd) {
		var resultObject = {};

		if (cmd.machineType) {
			resultObject.machineType = getMachineType();
		}
		return resultObject;
	});

program.command('version')
	.version('Version ' + pkg.version)
	.description('Mos Version')
	.option("--machineType", "return machine type")
	.action(function (cmd) {
		var resultObject = {};

		if (cmd.version) {
			resultObject.machineType = getMachineType();
		}
		return resultObject;
	});

// Start MOS UI
program.command('ui')
	.version('Mongoose OS Gui')
	.description('Start Mongoose OS User Interface')
	// .option("--help", "Return Mongoose OS Version")
	.action(function () {
		// gui();
		// 	const gui = spawn('~/.mos/bin/mos ui');

		// gui.stdout.on('data', data => {
		// 		console.log(`stdout: ${data}`);
		// 	});

		// child = exec("pwd", function (error, stdout, stderr) {
		//   sys.print('stdout: ' + stdout);
		//   sys.print('stderr: ' + stderr);
		//   if (error !== null) {
		//     console.log('exec error: ' + error);
		//   }

		// });

		const cmd = '~/.mos/bin/mos ui';
		exec(cmd, function (error, stdout, stderr) {
			// command output is in stdout

		});
log(chalk.yellow('MOS UI running at', chalk.underline.bgRed('http://127.0.0.1:1992/')));

	});

    // Init a Directory for mos app
program.command('init')
	.version(1)
	.description('Initialise firmware directory structure in the current directory')
	// .option("--help", "Return Mongoose OS Version")
	.action(function () {
		// gui();
		// 	const gui = spawn('~/.mos/bin/mos ui');

		// gui.stdout.on('data', data => {
		// 		console.log(`stdout: ${data}`);
		// 	});

		// child = exec("pwd", function (error, stdout, stderr) {
		//   sys.print('stdout: ' + stdout);
		//   sys.print('stderr: ' + stderr);
		//   if (error !== null) {
		//     console.log('exec error: ' + error);
		//   }

		// });

		const cmd = '~/.mos/bin/mos init';
		exec(cmd, function (error, stdout, stderr) {
			// command output is in stdout

		  console.log(stdout);
		  console.log(stderr);
		  if (error !== null) {
		    console.log('exec error: ' + error);
		  }


		});
log(chalk.yellow('MOS UI running at', chalk.underline.bgRed('http://127.0.0.1:1992/')));

	});

program.parse(process.argv);


// if program was called with no arguments, show help.
if (program.args.length === 0) program.help();

