const fs = require("fs");

const makeDir = (dirPath) => {
  if (fs.existsSync(dirPath)){
    return console.error("It has already created");
  }
  
  fs.mkdirSync(dirPath, { recursive: true });
};

module.exports = makeDir;