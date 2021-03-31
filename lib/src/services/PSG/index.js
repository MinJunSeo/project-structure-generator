const { Command } = require('commander');
const program = new Command();

const { PSGInit, PSGService } = require("./PSGAction");

program
  .command("init")
  .description("PSG service init")
  .action(PSGInit);

program
  .command("make <filename>")
  .description("generate for structure as is stated file")
  .action(PSGService);

module.exports = program;