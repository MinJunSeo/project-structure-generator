const fs = require("fs");

const writeFile = (filename, data) => {
  fs.writeFile(filename, data, (err) => {
    if (err) throw err;
  });
};

module.exports = writeFile;