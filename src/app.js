const program = require("commander");

program
  .usage("<command> [option]")
  .version("1.0.0", "-v, --version")

program.parse();


const command = process.argv[2];

if (!command) {
  program.help({ error: true });
}