const { Command } = require('commander');
const program = new Command();

const touchActionFunc = require("./action");

program
  .command("<filename>")
  .description("make new empty file")
  .action(touchActionFunc);

module.exports = program;