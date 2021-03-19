const { mkdirSync } = require("fs");
const { DirectoryIsExist } = require("../exceptions");
const isExists = require("./isExists");

const makeDir = (dirPath) => {
  if (isExists(dirPath)) {
    throw DirectoryIsExist;
  }
  mkdirSync(dirPath);
};

module.exports = makeDir;