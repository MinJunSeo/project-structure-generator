const program = require("commander");

const ProjectStructureGeneratorService = require("./projectStructGenerator");
const { AlreadyServiceInit, NotInitService } = require("../exceptions");
const {
  makeDir,
  makeFile,
  readFile,
  writeFile,
  isExists,
  printSuccessMessage
} = require("../utils");

const servicePath = process.cwd() + "/.projectStructures";

program
  .usage("<command>")
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
    writeFile(servicePath + "/README.txt", data);

    printSuccessMessage("Success: init project-generator service");
  });

program
  .command("project-generator <filename>")
  .description("project structure generator")
  .action((filename) => {
    if (!isExists(servicePath)) {
      throw NotInitService;
    }

    const service = new ProjectStructureGeneratorService();
    service.generateProjectStructure(filename);
  });

program
  .command("mkdir <path>")
  .description("make new directory")
  .action((path) => {
    makeDir(path);
  });

program
  .command("touch <filename>")
  .description("make new empty file")
  .action((filename) => {
    makeFile(filename);
  });

module.exports = program;