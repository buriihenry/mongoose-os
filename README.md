##  Mongoose OS Installer

Nodejs Wrapper for Mongoose-OS 🎁 📦 🎉.

    npm install -g mongoose-os


Use the Mongoose OS tool's commands 🙃

Mongoose OS docs [https://mongoose-os.com/docs/](https://mongoose-os.com/docs/)

`$ mos --help`

Set port to use: 

`export MOS_PORT=YOUR_SERIAL_PORT  # E.g. /dev/ttyUSB0`

 Usage:
 ` mos <command>`

Commands:
---------

 ` ui `     Start GUI

  `init   `        Initialise firmware directory structure in the current directory

  `build  `        Build a firmware from the sources located in the current directory

 ` flash  `        Flash firmware to the device

 ` flash-read  `   Read a region of flash

  `console`        Simple serial port console

  `ls `            List files at the local device's filesystem

  `get`            Read file from the local device's filesystem and print to stdout

 ` put `           Put file from the host machine to the local device's filesystem

  `rm `            Delete a file from the device's filesystem

  `config-get`     Get config value from the locally attached device

  `config-set`     Set config value at the locally attached device

  `call`           Perform a device API call. "mos call RPC.List" shows available methods

  `aws-iot-setup`  Provision the device for AWS IoT cloud

  `update `        Self-update mos tool
  `wifi`           Setup WiFi - shortcut to config-set wifi...

Global Flags:

 ` --verbose `     Verbose output. Optional, default value: "false"

  `--logtostderr`  log to standard error instead of files. Optional, default value: "false"`
