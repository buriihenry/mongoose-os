// Run the actual installation script for mos
'use strict';
const exec = require('child_process').exec;
const os = require('os');
const log = console.log;
const fs = require('fs');
const Ora = require('ora');

const cmd = 'curl -fsSL https://mongoose-os.com/downloads/mos/install.sh | /bin/sh';

const spinner = new Ora({
	text: 'Downloading MOS-TOOL',
	spinner: 'bouncingBar',
    color: 'yellow'


});

            spinner.start();

// log('Downloading MOS ...')
		exec(cmd, function (error, stdout, stderr) {
			// command output is in stdout


			log(stdout);
            if (stdout !== null){
	spinner.succeed();
            }
			log(stderr);
			if (error !== null) {
				log('exec error: ' + error);
			}


		});