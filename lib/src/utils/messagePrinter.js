const chalk = require("chalk");

class MessagePrinter {
  static Success(message) {
    console.log(
      `${chalk.bgGreen(chalk.white("Success"))}` +
      ' ' +
      `${chalk.green(message)}`
    );
  }

  static Exception(message) {
    console.error(
      `${chalk.bgRed(chalk.white("Error"))}` +
      ' ' +
      `${chalk.red(message)}`
    );
  }
}

module.exports = MessagePrinter;