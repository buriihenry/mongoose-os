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
const welcometxt = log(
	chalk.yellow(
		figlet.textSync('MOS-CLI', {
			horizontalLayout: 'full'
		})
	)
);

const getMachineType = function () {
	log('Returning Machine Type');
};
const update = function () {
	log('Fetching Update');
};
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

			log(stdout);
			log(stderr);
			if (error !== null) {
				log('exec error: ' + error);
			}


		});
		const dir = function () {
			exec('pwd', function (error, stdout, stderr) {
				log(stdout);
				log(stderr);
				if (error !== null) {
					log('Execution error: ' + error);
				}

			});
		}

		log(chalk.yellow('Initializing Firmware project in : '));   dir();

	});

program.parse(process.argv);

if (program.args.length === 0) program.help();

