#!/usr/bin/env node

const { psgApp } = require("../lib/src/services")
const { MessagePrinter } = require("../lib/src/utils");

psgApp
  .usage("command")
  .version("1.0.0", "-v, --version");

psgApp
  .action(() => MessagePrinter.NotFoundCommand(psgApp));

try {
  psgApp.parse();
} catch (error) {
  MessagePrinter.Exception(error.message);
}