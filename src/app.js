const program = require("commander");
const { makeDir, makeFile } = require("./utils");

program
  .version("0.0.1", "-v, --version");

program
  .option("-n=dir, --new=dir <path>", "Make new directory")
  .option("-n=file, --new=file <filename>", "Make a new file at current working directroy");

program.parse();

const options = program.opts();

if (options["new=dir"]) {
  makeDir(options["new=dir"]);
} else if (options["new=file"]) {
  makeFile(options["new=file"]);
} else {
  program.help({ error: true });
}