const chalk = require("chalk");

const printExceptionMessage = (message) => {
  console.error(chalk.bgRed("Error") + ' ' + chalk.red(message));
};

module.exports = printExceptionMessage;