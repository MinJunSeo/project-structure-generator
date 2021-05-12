const path = require("path");
const fs = require("fs");
const { MessagePrinter } = require("../../utils");

const readFile = filename => {
  const dirname = path.dirname(path.resolve(filename));
  const basename = path.basename(filename);
  filename = dirname + '\\' + basename;

  if (!fs.existsSync(filename)) {
    MessagePrinter.Exception(`${basename} is not exists`);
    return;
  }
  if (fs.lstatSync(filename).isDirectory()) {
    MessagePrinter.Exception(`${filename} is directory`);
    return;
  }
  
  console.log(fs.readFileSync(filename).toString());
  MessagePrinter.Success(`${filename} read success\n`);
};

function cat(filenames) {
  filenames = arguments[2].rawArgs.slice(2);
  
  for (const filename of filenames) {
    readFile(filename);
  }
}

module.exports = cat;