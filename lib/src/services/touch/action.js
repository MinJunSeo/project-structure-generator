const path = require("path");
const fs = require("fs");
const { InternalProgramError } = require("../../exceptions");
const { MessagePrinter } = require("../../utils");

const makeFile = filename => {
  const dirname = path.dirname(path.resolve(filename));
  const basename = path.basename(filename);

  if (fs.existsSync(dirname + '/' + basename)) {
    MessagePrinter.Warn(`${basename} is already exists`);
    return;
  }

  fs.appendFile(dirname + '/' + basename, '', error => {
    if (error) {
      MessagePrinter.Exception(InternalProgramError.message);
    } else {
      MessagePrinter.Success(`${basename} is created`);
    }
  });
};

function touch(filenames) {
  const args = arguments[2].rawArgs.slice(2);
  for (const filename of args) {
    makeFile(filename);
  }
}

module.exports = touch;