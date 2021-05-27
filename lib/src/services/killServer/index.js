const { Command } = require("commander");
const program = new Command();

const killServerAction = require("./action");

program
  .arguments("<port>")
  .description("kill server that use user defined port")
  .action(killServerAction);

module.exports = program;