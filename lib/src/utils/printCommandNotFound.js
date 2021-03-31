const printExceptionMessage = require("./printExceptionMessage");

const printCommandNotFound = (program) => {
  printExceptionMessage("Error: Command not found");
  program.help();
};

module.exports = printCommandNotFound;