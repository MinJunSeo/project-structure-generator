const { makeFile, printSuccessMessage } = require("../../utils");
const { basename } = require("path");

const touch = filename => {
  makeFile(filename);
  printSuccessMessage(`Success: '${basename(filename)}' is created`);
};

module.exports = touch;