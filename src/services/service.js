const { readFile, makeDir, makeFile } = require("../utils");
const { Tree } = require("../dataStructure");
const { NotAlrightFileForm } = require("../exceptions");

class ProjectStructureGeneratorService {
  constructor(rootDir) {
    this._rootDir = rootDir;
    this._tree = new Tree(rootDir);
  }

  initContent(path) {
    this._content = [];
    for (const data of readFile(path).split("\r\n")) {
      this._content.push({
        indention: data.split(' ').length - 1,
        name: data.replace(/ /g, '')
      });
    }
  }

  initTree() {
    for (let i = 0; i < this._content.length; i++) {
      this._tree.add(this._content[i].name, this.getParent(i, this._content[i]), this._tree.traverseDF);
    }
  }

  getParent(index, data) {
    const indention = data.indention;

    if (!indention) {
      return this._rootDir;
    }
  
    while (index - 1 >= 0) {
      if (this._content[index - 1].indention === indention - 2) {
        return this._content[index - 1].name;
      }
      index -= 1;
    }
  
    throw NotAlrightFileForm;
  }

  getFullPath(node) {
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
  }

  generateProjectStructure(path) {
    this.initContent(path);
    this.initTree();

    this._tree.traverseBF((node) => {
      const fullPath = this.getFullPath(node);
    
      if (node.parent) {
        if (node.data[0] !== '/') {
          makeFile(fullPath);
        } else {
          makeDir(fullPath);
        }
      }
    });
  }
}

module.exports = ProjectStructureGeneratorService;