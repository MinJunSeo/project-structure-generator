const chalk = require("chalk");

const printExceptionMessage = (message) => {
  console.error(chalk.red(message));
};

module.exports = printExceptionMessage;