const program = require("commander");

const { AlreadyServiceInit, NotInitService } = require("../exceptions");
const { makeDir, makeFile, readFile, writeFile } = require("../utils");

const ProjectStructureGeneratorService = require("./projectStructGenerator");
let projectStructureGeneratorService = null;

program
  .usage("<command> [option]")
  .version("1.0.0", "-v, --version")

program
  .command("init")
  .description("Project Structure Generator service init.")
  .action(() => {
    if (projectStructureGeneratorService) {
      throw AlreadyServiceInit;
    }

    projectStructureGeneratorService = new ProjectStructureGeneratorService(process.cwd());
    const path = process.cwd() + "/.projectStructure";
    makeDir(path);
    makeFile(path + "/README.txt");
    const data = readFile(__dirname + "/README.txt");
    writeFile(path + "/README.txt", data);
  });

program
  .command("project-generator <filename>")
  .description("project structure generator")
  .action((filename) => {
    if (!projectStructureGeneratorService) {
      throw NotInitService;
    }
    projectStructureGeneratorService.generateProjectStructure(filename);
  });

module.exports = program;