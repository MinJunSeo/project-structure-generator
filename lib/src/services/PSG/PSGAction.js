const { existsSync, mkdir } = require("fs");
const { copyFile } = require("fs").promises;
const { printSuccessMessage, printExceptionMessage } = require("../../utils");
const PSGService = require("./PSGService");
const {
  AlreadyServiceInit,
  InternalProgramError,
  NotInitService,
} = require("../../exceptions");

exports.PSGInit = async () => {
  const servicePath = process.cwd() + "/.projectStructures";
  if (existsSync(servicePath)) {
    printExceptionMessage(AlreadyServiceInit.message);
    return;
  }

  mkdir(servicePath, error => {
    if (error) throw InternalProgramError;
  });

  copyFile("./README.md", `${servicePath}/../README.txt`)
  .then(() => printSuccessMessage("Success: PSG init"))
  .catch(error => printExceptionMessage(InternalProgramError.message));
};

exports.PSGService = filename => {
  const servicePath = process.cwd() + "/.projectStructures";
  if (!existsSync(servicePath)) {
    throw NotInitService;
  }

  const service = new PSGService();
  service.generateProjectStructure(filename);
  printSuccessMessage("Finish: generate project structure");
};