const fs = require("fs");
const path = require("path");

const makeFile = (filename) => {
  const name = __dirname + '/' + path.basename(filename);

  if (fs.existsSync(name)) {
    return console.error(`${path.basename(name)} file is already creaetd`);
  }

  fs.appendFileSync(name);
};

module.exports = makeFile;