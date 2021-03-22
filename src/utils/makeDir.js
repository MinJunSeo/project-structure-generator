const fs = require("fs");

const { DirectoryIsExists } = require("../exceptions");
const isExists = require("./isExists");
const printSuccessMessage = require("./printSuccessMessage");

const makeDir = (dirPath) => {
  if (isExists(dirPath)) {
    throw DirectoryIsExists;
  }

  fs.mkdirSync(dirPath);
  printSuccessMessage("Success: make directory");
};

module.exports = makeDir;