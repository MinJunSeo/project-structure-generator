const program = require("commander");

const { AlreadyServiceInit } = require("../exceptions");
const { makeDir, makeFile } = require("../utils");

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
    makeDir(process.cwd() + "/.projectStructure");
    makeFile(process.cwd() + "/.projectStructure/README.TXT");
  });

module.exports = program;