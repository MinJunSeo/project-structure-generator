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
  const initDirPath = process.cwd() + "/.projectStructures";
  copyFile("./README.md", `${initDirPath}/../README.txt`)
    .then(() => {
      if (existsSync(initDirPath)) {
        printExceptionMessage(AlreadyServiceInit.message);
        return;
      }

      mkdir(initDirPath, error => {
        if (error) {
          printExceptionMessage(InternalProgramError.message);
          return;
        }
      });
      
      printSuccessMessage("Success: PSG init")
    })
    .catch(() => printExceptionMessage(`
      Error: Please check next conditions
      1. Did you delete the README.md that were in the library when you downloaded?
         In this case, you can redownload this libary, then you can solve.
      2. Did you enter this command at your project root directory?
    `));
};

exports.PSGService = filename => {
  const initDirPath = process.cwd() + "/.projectStructures";
  if (!existsSync(initDirPath)) {
    printExceptionMessage(NotInitService.message);
    return;
  }

  const service = new PSGService();
  // service.generateProjectStructure(filename);
  printSuccessMessage("Finish: generate project structure");
};