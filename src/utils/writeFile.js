const fs = require("fs");

const writeFile = (filename, data) => {
  fs.writeFileSync(filename, data);
};

module.exports = writeFile;