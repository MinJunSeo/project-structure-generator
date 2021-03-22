const chalk = require("chalk");

const printSuccessMessage = (message) => {
  console.log(chalk.green(message));
};

module.exports = printSuccessMessage;