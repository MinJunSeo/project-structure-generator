#!/usr/bin/env node

const { touchApp } = require("../lib/src/services");
const { printCommandNotFound, printExceptionMessage } = require("../lib/src/utils");

touchApp
  .version("1.0.0", "-v, --version");

touchApp
  .action(() => printCommandNotFound(touchApp));

try {
  touchApp.parse();
} catch (err) {
  printExceptionMessage(`Error: ${err}`);
}