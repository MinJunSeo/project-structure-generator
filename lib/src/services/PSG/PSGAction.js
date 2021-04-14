const { existsSync, mkdir } = require("fs");
const { copyFile } = require("fs").promises;
const { printSuccessMessage } = require("../../utils");
const PSGService = require("./PSGService");
const {
  AlreadyServiceInit,
  InternalProgramError,
  NotInitService,
} = require("../../exceptions");

exports.PSGInit = () => {
  const servicePath = process.cwd() + "/.projectStructures";
  if (existsSync(servicePath)) {
    throw AlreadyServiceInit;
  }

  mkdir(servicePath, error => {
    if (err) throw InternalProgramError;
  });

  copyFile(`${__dirname}/../../README.md`, `${servicePath}/../README.txt`)
  .then(() => {
    printSuccessMessage("Success: init PSG service");
  })
  .catch(error => {
    throw InternalProgramError;
  });
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