#!/usr/bin/env node

const { touchApp } = require("../lib/src/services");
const { MessagePrinter } = require("../lib/src/utils");

touchApp
  .usage("<filename>")
  .version("1.0.0", "-v, --version");

try {
  if (!process.argv.slice(2).length) {
    throw new Error("Missing required argument 'filename'");
  }
  touchApp.parse(process.argv);
} catch (error) {
  MessagePrinter.Exception(error.message);
}