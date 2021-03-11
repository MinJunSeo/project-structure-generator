const fs = require("fs");
const path = require("path");

const readFile = (filename) => {
  const name = path.dirname(filename) + "/" + path.basename(filename);
  
  if (!fs.existsSync(name)) {
    return console.error("File not exists");
  }

  return fs.readFileSync(name, "utf-8");
};

module.exports = readFile;