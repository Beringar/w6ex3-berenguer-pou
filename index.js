const configuration = require("dotenv").config();

const chalk = require("chalk");
const { program } = require("commander");
const debug = require("debug")("index.js");

program.option("-a <number>");
program.option("-b <number>");

program.parse();

const CLIoptions = program.opts();

const suma = +CLIoptions.a + +CLIoptions.b;

debug(chalk.red("Results:"));
debug(chalk.green(`${CLIoptions.a} + ${CLIoptions.b} = ${suma}`));
