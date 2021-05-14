const { MessagePrinter, readFile } = require("../../utils");

function cat(filenames) {
  filenames = arguments[2].rawArgs.slice(2);
  
  for (const filename of filenames) {
    const content = readFile(filename);
    console.log(content);
    MessagePrinter.Success(`${filename} read success\n`);
  }
}

module.exports = cat;