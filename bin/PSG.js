#!/usr/bin/env node

const { psgApp } = require("../lib/src/services")
const { printCommandNotFound, printExceptionMessage } = require("../lib/src/utils");

psgApp
  .usage("command")
  .version("1.0.0", "-v, --version");

psgApp
  .action(() => printCommandNotFound(psgApp));

try {
  psgApp.parse();
} catch (err) {
  printExceptionMessage(`Error: ${err}`);
}