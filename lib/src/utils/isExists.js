const { existsSync } = require("fs");

const isExists = (path) => {
  return existsSync(path);
};

module.exports = isExists;