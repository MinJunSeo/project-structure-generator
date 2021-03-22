const { mkdirSync } = require("fs");
const { DirectoryIsExists } = require("../exceptions");
const isExists = require("./isExists");

const makeDir = (dirPath) => {
  if (isExists(dirPath)) {
    throw DirectoryIsExists;
  }
  mkdirSync(dirPath);
};

module.exports = makeDir;