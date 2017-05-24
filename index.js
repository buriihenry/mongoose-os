#!/usr/bin/env node
// Add https://github.com/mikaelbr/node-notifier
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
		figlet.textSync('MOS-TOOl', {
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
	.description('Show Version of MOS Tool')
	.option("--machineType", "return machine type")
	.action(function (cmd) {
		log(chalk.green('Mongoose-os Tool Version ' + pkg.version))

	});

program.command('version')
	.version('Version ' + pkg.version)
	.description('Mos Version')
	.option("--machineType", "return machine type")
	.action(
		function (cmd) {
		
	log(chalk.green('Version ' + pkg.version))
		
	}
	);

// Start MOS UI
program.command('ui')
	.version('Mongoose OS Gui')
	.description('Start Mongoose OS User Interface')
	// .option("--help", "Return Mongoose OS Version")
	.action(function () {

		const cmd = '~/.mos/bin/mos ui';
		exec(cmd, function (error, stdout, stderr) {
			// command output is in stdout

		});
		log(chalk.yellow('MOS UI running at', chalk.underline.bgRed('http://127.0.0.1:1992/')));

	});

// Init a Directory for mos app
program.command('init')
	.description('Initialise firmware directory structure in the current directory')
	// .option("--help", "Return Mongoose OS Version")
	.action(function () {
		const cmd = '~/.mos/bin/mos init';
		exec(cmd, function (error, stdout, stderr) {
			// command output is in stdout

			log(chalk.green(stdout));
			log(chalk.red(stderr));
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

//Build
program.command('build')
	.description('Build a firmware from the sources located in the current directory')
	// .option("--help", "Return Mongoose OS Version")
	.action(function () {

		const cmd = '~/.mos/bin/mos build';
		exec(cmd, function (error, stdout, stderr) {
			// command output is in stdout
	log(chalk.green(stdout));
			log(chalk.red(stderr));
		});
		log(chalk.yellow('Building Firmware'));

	});

// flash
	program.command('flash')
	.description('Build a firmware from the sources located in the current directory')
	// .option("--help", "Return Mongoose OS Version")
	.action(function () {

		const cmd = '~/.mos/bin/mos falsh';
		exec(cmd, function (error, stdout, stderr) {
			// command output is in stdout
	log(chalk.green(stdout));
			log(chalk.red(stderr));
		});
		log(chalk.yellow('Flashing Firmware'));

	});
program.command('flash-read')
	.description('Read a region of flash')
	// .option("--help", "Return Mongoose OS Version")
	.action(function () {

		const cmd = '~/.mos/bin/mos flash-read';
		exec(cmd, function (error, stdout, stderr) {
			// command output is in stdout
	log(chalk.green(stdout));
			log(chalk.red(stderr));
		});
		log(chalk.yellow('Reading A Region of Flash'));

	});

program.command('console')
	.description('Simple serial port console')
	// .option("--help", "Return Mongoose OS Version")
	.action(function () {

		const cmd = '~/.mos/bin/mos console';
		exec(cmd, function (error, stdout, stderr) {
			// command output is in stdout
	log(chalk.green(stdout));
			log(chalk.red(stderr));
		});
		log(chalk.yellow('Serial port console output'));

	});	
	
program.command('ls')
	.description('List files at the local device`s filesystem')
	// .option("--help", "Return Mongoose OS Version")
	.action(function () {

		const cmd = '~/.mos/bin/mos ls';
		exec(cmd, function (error, stdout, stderr) {
			// command output is in stdout
	log(chalk.green(stdout));
			log(chalk.red(stderr));
		});
		log(chalk.yellow('All Files in local Device Firmaware'));

	});	
		
program.command('get')
	.description('Read file from the local device`s filesystem and print to stdout')
	// .option("--help", "Return Mongoose OS Version")
	.action(function () {

		const cmd = '~/.mos/bin/mos get';
		exec(cmd, function (error, stdout, stderr) {
			// command output is in stdout
	log(chalk.green(stdout));
			log(chalk.red(stderr));
		});
		log(chalk.yellow('Read file from the local device`s filesystem and print to stdout'));

	});	
	program.command('put')
	.description('Put file from the host machine to the local device`s filesystem')
	// .option("--help", "Return Mongoose OS Version")
	.action(function () {

		const cmd = '~/.mos/bin/mos put';
		exec(cmd, function (error, stdout, stderr) {
			// command output is in stdout
	log(chalk.green(stdout));
			log(chalk.red(stderr));
		});
		log(chalk.yellow('Put file from the host machine to the local device`s filesystem'));

	});	
		program.command('rm')
	.description(' Delete a file from the device`s filesystem')
	// .option("--help", "Return Mongoose OS Version")
	.action(function () {

		const cmd = '~/.mos/bin/mos rm';
		exec(cmd, function (error, stdout, stderr) {
			// command output is in stdout
	log(chalk.green(stdout));
			log(chalk.red(stderr));
		});
		log(chalk.yellow('Delete a file from the device`s filesystem'));

	});	

		program.command('config-get')
	.description('Get config value from the locally attached device')
	// .option("--help", "Return Mongoose OS Version")
	.action(function () {

		const cmd = '~/.mos/bin/mos config-get';
		exec(cmd, function (error, stdout, stderr) {
			// command output is in stdout
	log(chalk.green(stdout));
			log(chalk.red(stderr));
		});
		log(chalk.yellow('Get config value from the locally attached device'));

	});	
		program.command('config-set')
	.description('Set config value at the locally attached device')
	// .option("--help", "Return Mongoose OS Version")
	.action(function () {

		const cmd = '~/.mos/bin/mos config-set';
		exec(cmd, function (error, stdout, stderr) {
			// command output is in stdout
	log(chalk.green(stdout));
			log(chalk.red(stderr));
		});
		log(chalk.yellow('Set config value at the locally attached device'));

	});	
	program.command('call')
	.description('Perform a device API call. "mos call RPC.List" shows available methods')
	// .option("--help", "Return Mongoose OS Version")
	.action(function () {

		const cmd = '~/.mos/bin/mos call';
		exec(cmd, function (error, stdout, stderr) {
			// command output is in stdout
	log(chalk.green(stdout));
			log(chalk.red(stderr));
		});
		log(chalk.yellow('Perform a device API call. "mos call RPC.List" shows available methods'));

	});	
	program.command('aws-iot-setup')
	.description('Provision the device for AWS IoT cloud')
	// .option("--help", "Return Mongoose OS Version")
	.action(function () {

		const cmd = '~/.mos/bin/mos aws-iot-setup';
		exec(cmd, function (error, stdout, stderr) {
			// command output is in stdout
	log(chalk.green(stdout));
			log(chalk.red(stderr));
		});
		log(chalk.yellow('Provision the device for AWS IoT cloud'));

	});
	program.command('update')
	.description('Self-update mos tool')
	// .option("--help", "Return Mongoose OS Version")
	.action(function () {

		const cmd = '~/.mos/bin/mos update';
		exec(cmd, function (error, stdout, stderr) {
			// command output is in stdout
	log(chalk.green(stdout));
			log(chalk.red(stderr));
		});
		log(chalk.yellow('Self-update mos tool'));

	});	
	program.command('wifi')
	.description('Setup WiFi - shortcut to config-set wifi...')
	// .option("--help", "Return Mongoose OS Version")
	.action(function () {

		const cmd = '~/.mos/bin/mos wifi';
		exec(cmd, function (error, stdout, stderr) {
			// command output is in stdout
	log(chalk.green(stdout));
			log(chalk.red(stderr));
		});
		log(chalk.yellow('Setup WiFi - shortcut to config-set wifi...'));

	});	

program.parse(process.argv);


if (program.args.length === 0) program.help();

