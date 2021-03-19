const program = require("commander");

const ProjectStructureGeneratorService = require("./projectStructGenerator");
const { AlreadyServiceInit, NotInitService } = require("../exceptions");
const {
  makeDir,
  makeFile,
  readFile,
  writeFile,
  isExists
} = require("../utils");

const servicePath = process.cwd() + "/.projectStructures";

program
  .usage("<command> [option]")
  .version("1.0.0", "-v, --version")

program
  .command("init")
  .description("Project Structure Generator service init.")
  .action(() => {
    if (isExists(servicePath)) {
      throw AlreadyServiceInit;
    }

    makeDir(servicePath);
    makeFile(servicePath + "/README.txt");
    const data = readFile(__dirname + "/README.txt");
    writeFile(path + "/README.txt", data);
  });

module.exports = program;