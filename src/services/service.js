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

tree.traverseBF((node) => {
  console.log(`저는 ${node.data} 입니다.`);
  if (node.parent) {
    console.log(`저의 부모는 ${node.parent.data} 입니다.`);
  }
});