const program = require("./services");
const { printExceptionMessage } = require("./utils");

program
  .usage("command")
  .version("1.0.0", "-v, --version");

program
.action(() => {
  printExceptionMessage("Error: Command not found");
  program.help();
});

try {
  program.parse();
} catch (err) {
  printExceptionMessage(`Error: ${err}`);
}