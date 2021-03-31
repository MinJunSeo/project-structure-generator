const { makeFile } = require("../../utils")

const touch = filename => {
  makeFile(filename);
};

module.exports = touch;