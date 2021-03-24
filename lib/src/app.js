const program = require("./services");
const { printExceptionMessage } = require("./utils");

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