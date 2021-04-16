const chalk = require("chalk");

const printExceptionMessage = (message) => {
  console.error(chalk.bgRed("Error: "));
  console.error(chalk.red(message));
};

module.exports = printExceptionMessage;