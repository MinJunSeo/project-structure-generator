const { Command } = require('commander');
const program = new Command();

const touchActionFunc = require("./action");

program
  .arguments("<filename>")
  .description("make new empty file")
  .action(touchActionFunc);

module.exports = program;