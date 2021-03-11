const program = require("commander");
const { makeDir } = require("./utils");

program
  .version("0.0.1", "-v, --version");

program
  .option("-n=dir, --new=dir <path>", "Make new directory");

program.parse();

const options = program.opts();

if (options["new=dir"]) {
  makeDir(options["new=dir"]);
}