#!/usr/bin/env node

const { touchApp, psgApp } = require("../lib/src/services");
const { printCommandNotFound, printExceptionMessage } = require("../lib/src/utils");

touchApp
  .version("1.0.0", "-v, --version");

touchApp
  .action(printCommandNotFound(touchApp));

try {
  touchApp.parse();
} catch (err) {
  printExceptionMessage(`Error: ${err}`);
}