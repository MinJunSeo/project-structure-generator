const fs = require("fs");
const path = require("path");

const { FileIsExists } = require("../exceptions");
const { printExceptionMessage } = require("../utils");

const makeFile = (filename) => {
  const name = path.dirname(filename) + '/' + path.basename(filename);

  if (fs.existsSync(name)) {
    printExceptionMessage(FileIsExists.message);
    return;
  }

  fs.appendFileSync(name, '');
};

module.exports = makeFile;