const program = require("commander");

const touchActionFunc = require("./action");

program
  .command("touch <filename>")
  .description("make new empty file")
  .action(touchActionFunc);

module.exports = touchActionFunc;