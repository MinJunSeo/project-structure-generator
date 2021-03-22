const fs = require("fs");

const { DirectoryIsExists } = require("../exceptions");
const isExists = require("./isExists");

const makeDir = (dirPath) => {
  if (isExists(dirPath)) {
    throw DirectoryIsExists;
  }

  fs.mkdirSync(dirPath);
};

module.exports = makeDir;