const fs = require("fs");
const path = require("path");

const { FileIsExists } = require("../exceptions");
const printSuccessMessage = require("./printSuccessMessage");

const makeFile = (filename) => {
  const name = path.dirname(filename) + '/' + path.basename(filename);

  if (fs.existsSync(name)) {
    throw FileIsExists;
  }

  fs.appendFileSync(name);
  printSuccessMessage("Success: make file");
};

module.exports = makeFile;