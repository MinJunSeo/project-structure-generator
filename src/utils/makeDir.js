const fs = require("fs");
const { DirectoryIsExist } = require("../exceptions");

const makeDir = (dirPath) => {
  if (fs.existsSync(dirPath)){
    throw DirectoryIsExist;
  }
  
  fs.mkdirSync(dirPath, { recursive: true });
};

module.exports = makeDir;