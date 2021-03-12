const { readFile } = require("../utils");
const { Tree } = require("../dataStructure");
const path = require("path");

let content = readFile(__dirname + "/sample.txt");
content = content.split("\r\n");

const rootDir = path.resolve(__dirname, "../../");

const getParent = (index, name) => {
  const indention = name.split(' ').length - 1;

  if (!indention) {
    return rootDir;
  }

  while (index - 1 >= 0) {
    if (content[index - 1].split(' ').length - 1 === indention - 2) {
      return content[index - 1];
    }
    index -= 1;
  }

  throw new Error("규칙에 올바르게 작성되지 않은 파일입니다.");
};