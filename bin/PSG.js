#!/usr/bin/env node

const { psgApp } = require("../lib/src/services")
const { printExceptionMessage } = require("../lib/src/utils");

psgApp
  .usage("command")
  .version("1.0.0", "-v, --version");

psgApp
  .action(() => {
    printExceptionMessage("Error: Command not found");
    psgAPp.help();
  });

try {
  psgApp.parse();
} catch (err) {
  printExceptionMessage(`Error: ${err}`);
}