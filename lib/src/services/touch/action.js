const path = require("path");
const fs = require("fs");
const { InternalProgramError } = require("../../exceptions");
const { MessagePrinter } = require("../../utils");

const touch = filename => {
  const dirname = path.dirname(path.resolve(filename));
  const basename = path.basename(filename);

  fs.appendFile(dirname + '/' + basename, '', error => {
    if (error) {
      MessagePrinter.Exception(InternalProgramError.message);
    } else {
      MessagePrinter.Success(`${basename} is created`);
    }
  });
};

module.exports = touch;