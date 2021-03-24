const chalk = require("chalk");

const printExceptionMessage = (message) => {
  console.log(chalk.red(message));
};

module.exports = printExceptionMessage;