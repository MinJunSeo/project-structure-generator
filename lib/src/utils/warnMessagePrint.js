const chalk = require("chalk");

const printSuccessMessage = message => {
  console.log(chalk.bgYellow("Warn"));
  console.log(chalk.yellow(message));
};

module.exports = printSuccessMessage;