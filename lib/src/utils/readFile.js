const fs = require("fs");
const path = require("path");
const MessagePrinter = require("./messagePrinter");

const readFile = filename => {
  const dirname = path.dirname(path.resolve(filename));
  const basename = path.basename(filename);
  filename = dirname + '\\' + basename;

  if (!fs.existsSync(filename)) {
    MessagePrinter.Exception(`${filename} is not exists\n`);
    return;
  }
  if (fs.lstatSync(filename).isDirectory()) {
    MessagePrinter.Exception(`${filename} is directory\n`);
    return;
  }
  
  return fs.readFileSync(filename).toString();
};

module.exports = readFile;