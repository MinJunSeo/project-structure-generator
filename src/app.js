const { program } = require("./services");
const chalk = require("chalk");

program
.action(() => {
  console.error(chalk.red("command not found"));
  program.help();
});

try {
  program.parse();
} catch (err) {
  console.error(chalk.red(`Error: ${err}`));
}