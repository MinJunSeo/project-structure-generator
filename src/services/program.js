const program = require("commander");

program
  .usage("<command> [option]")
  .version("1.0.0", "-v, --version")

module.exports = program;