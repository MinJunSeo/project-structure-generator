#!/usr/bin/env node

const { killServerApp } = require("../lib/src/services");
const { MessagePrinter } = require("../lib/src/utils");

killServerApp
  .usage("<port>")
  .version("1.0.0", "-v, --version");

try {
  if (!process.argv.slice(2).length) {
    throw new Error("Missing required argument 'port'");
  }
  killServerApp.parse(process.argv);
} catch (error) {
  MessagePrinter.Exception(error.message);
}