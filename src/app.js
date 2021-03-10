const program = require("commander");
const { makeDir } = require("./utils");

program
  .version("0.0.1", "-v, --version");

program
  .option("-n=dir, --new=dir [path]", "Make new directory");

program.parse();

const options = program.opts();

if (options["new=dir"]) {
  if (options["new=dir"] !== true) {
    // call makeDir functions with [path] value
    makeDir(options["new=dir"]);
  } else {
    console.error("Please enter [path]");
    program.help();
  }
}