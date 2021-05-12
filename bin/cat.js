#!/usr/bin/env node

const { catApp } = require("../lib/src/services");
const { MessagePrinter } = require("../lib/src/utils");

catApp
  .usage("<filename>")
  .version("1.0.0", "-v, --version");

try {
  if (!process.argv.slice(2).length) {
    throw new Error("Missing required argument 'filename'");
  }
  catApp.parse(process.argv);
} catch (error) {
  MessagePrinter.Exception(error.message);
}