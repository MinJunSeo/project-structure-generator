const { readFile, makeDir, makeFile } = require("../utils");
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

const tree = new Tree(rootDir);

const getParent = (index, data) => {
  const indention = data.indention;

  if (!indention) {
    return rootDir;
  }

  while (index - 1 >= 0) {
    if (content[index - 1].indention === indention - 2) {
      return content[index - 1].name;
    }
    index -= 1;
  }

  throw new Error("규칙에 맞게 작성된 파일이 아닙니다.");
};

for (let i = 0; i < content.length; i++) {
  tree.add(content[i].name, getParent(i, content[i]), tree.traverseDF);
}

const getFullPath = (node) => {
  let fullPath = node.data;

  while (true) {
    node = node.parent;
    if (!node) {
      break;
    }
    
    if (fullPath[0] !== '/') {
      fullPath = node.data + '/' + fullPath;
    } else {
      fullPath = node.data + fullPath;
    }
  }

  return fullPath;
};

tree.traverseBF((node) => {
  const fullPath = getFullPath(node);

  if (node.parent) {
    if (node.data[0] !== '/') {
      makeFile(fullPath);
    } else {
      makeDir(fullPath);
    }
  }
});