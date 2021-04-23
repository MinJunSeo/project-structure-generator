const chalk = require("chalk");

class MessagePrinter {
  static Success(message) {
    console.log(
      `${chalk.bgGreen(chalk.white("Success"))}` +
      ' ' +
      `${chalk.green(message)}`
    );
  }
}

module.exports = MessagePrinter;