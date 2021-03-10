const program = require("commander");
const { makeDir } = require("./utils");

program
  .version("0.0.1", "-v, --version")
  .usage("[option]");

program
  .arguments("<path>")
  .option("-n=dir, --new=dir", "Make new directory")
  .action((path) => {
    makeDir(path);
  })
  .parse(process.argv);