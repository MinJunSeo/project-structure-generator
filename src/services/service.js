const { readFile } = require("../utils");
const { Tree } = require("../dataStructure");
const path = require("path");

const rootDir = path.resolve(__dirname, "../../");

const content = [];
for (const data of readFile(__dirname + "/sample.txt").split("\r\n")) {
  content.push({
    indention: data.split(' ').length - 1,
    name: data.replace(/ /g, '')
  });
}

const getParent = (index, name) => {
  const indention = name.split(' ').length - 1;

  if (!indention) {
    return rootDir;
  }

  while (index - 1 >= 0) {
    if (content[index - 1].split(' ').length - 1 === indention - 2) {
      return content[index - 1].replace(/ /g, '');
    }
    index -= 1;
  }

  throw new Error("규칙에 올바르게 작성되지 않은 파일입니다.");
};