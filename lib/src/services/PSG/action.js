const fs = require("fs");
const { copyFile } = require("fs").promises;
const path = require("path");
const PSGService = require("./service");
const { MessagePrinter } = require("../../utils");
const {
  AlreadyServiceInit,
  InternalProgramError,
  NotInitService,
} = require("../../exceptions");

exports.PSGInit = async () => {
  const initDirPath = path.resolve('') + "/.projectStructures";
  copyFile(__dirname + "/../../../../README.md", `${initDirPath}/../README.txt`)
    .then(() => {
      if (fs.existsSync(initDirPath)) {
        MessagePrinter.Exception(AlreadyServiceInit.message);
        return;
      }

      fs.mkdir(initDirPath, error => {
        if (error) {
          MessagePrinter.Exception(InternalProgramError.message);
          return;
        }
      });
      
      MessagePrinter.Success("PSG init");
    })
    .catch(() => MessagePrinter.Exception(
      `Please check next conditions\n` +
      `1. Did you delete the README.md that were in the library when you downloaded?\n` + 
      `   In this case, you can redownload this libary, then you can solve.\n` +
      `2. Did you enter this command at your project root directory?`
    ));
};

exports.PSGService = filename => {
  const initDirPath = path.resolve('') + "/.projectStructures";
  if (!fs.existsSync(initDirPath)) {
    MessagePrinter.Exception(NotInitService.message);
    return;
  }

  const service = new PSGService();
  service.generateProjectStructure(path.basename(filename));
  MessagePrinter.Success("Project structure generate");
};