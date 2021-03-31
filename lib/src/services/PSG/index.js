const { isExists, makeDir, makeFile, readFile, writeFile, printSuccessMessage } = require("../../utils");
const { AlreadyServiceInit, NotInitService } = require("../../exceptions");
const PSGService = require("./projectStructGenerator");

exports.PSGInit = () => {
  const servicePath = process.cwd() + "/.projectStructures";
  if (isExists(servicePath)) {
    throw AlreadyServiceInit;
  }

  makeDir(servicePath);

  makeFile(servicePath + "../README.txt");
  const data = readFile("README.md");
  writeFile(servicePath + "../README.txt", data);

  printSuccessMessage("Success: init PSG service");
};

exports.PSGService = filename => {
  if (!isExists(servicePath)) {
    throw NotInitService;
  }

  const service = new PSGService();
  service.generateProjectStructure(filename);
  printSuccessMessage("Finish: generate project structure");
};