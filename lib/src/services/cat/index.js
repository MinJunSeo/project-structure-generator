const { Command } = require("commander");
const program = new Command();

const catActionFunc = require("./action");

program
  .arguments("<filename>")
  .description("read file content")
  .action(catActionFunc);

module.exports = program;