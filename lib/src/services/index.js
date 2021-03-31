const program = require("commander");

const { PSGInit, PSGService } = require("./PSG");
const touch = require("./touch");

// PSG service
program
  .command("init")
  .description("PSG service init")
  .action(PSGInit);

program
  .command("make <filename>")
  .description("generate for structure as is stated file")
  .action(PSGService);

// touch command
program
  .command("touch <filename>")
  .description("make new empty file")
  .action(touch);

module.exports = program;