const fs = require("fs");
const path = require("path");
const { Tree } = require("../../dataStructure");
const { NotAlrightFileForm, InternalProgramError } = require("../../exceptions");
const { MessagePrinter } = require("../../utils");

class ProjectStructureGeneratorService {
  constructor() {
    this._rootDir = path.resolve('');
    this._plan = [];
    this._tree = new Tree(this._rootDir);
  }

  generateProjectStructure(filename) {
    this._initPlan(filename);
    this._initTree();

    this._tree.traverseBF((node) => {
      const fullPath = this._getFullPath(node);
    
      if (node.parent) {
        if (node.data[0] !== '/') {
          this._makeFile(fullPath);
        } else {
          this._makeDir(fullPath, node.data);
        }
      }
    });
  }

  _makeFile(fullPath) {
    const fileName = path.basename(fullPath);
    const filePath = path.dirname(fullPath) + '/' + fileName;
    
    if (fs.existsSync(filePath)) {
      MessagePrinter.Warn(`${fileName} already exists`);
      return;
    }

    fs.appendFile(filePath, '', error => {
      if (error) {
        MessagePrinter.Exception(InternalProgramError.message);
      }
    });
  }

  _makeDir(fullPath, dirName) {
    if (fs.existsSync(fullPath)) {
      dirName = dirName.split('/')[1];
      MessagePrinter.Warn(`${dirName} directory already exists`);
      return;
    }
    fs.mkdirSync(fullPath);
  }

  _getFullPath(node) {
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

  _getParent(index, data) {
    const indention = data.indention;

    if (!indention) {
      return this._rootDir;
    }
  
    while (index - 1 >= 0) {
      if (this._plan[index - 1].indention === indention - 2) {
        return this._plan[index - 1].name;
      }
      index -= 1;
    }
  
    throw NotAlrightFileForm;
  }

  _getPlanPath(filename) {
    if (path.extname(filename) != ".txt") {
      throw NotAlrightFileForm;
    }

    const planPath = this._rootDir + "/.projectStructures/" + filename;
    if (!fs.existsSync(planPath)) {
      throw new Error(`${filename} file is not exists`);
    }

    return planPath;
  }

  _initPlan(filename) {
    const planPath = this._getPlanPath(filename);
    const fileData = fs.readFileSync(planPath, { encoding: "utf-8" });
    
    if (!fileData) {
      throw new Error(`${filename} is empty`);
    }

    for (const data of fileData.split("\r\n")) {
      if (data) {
        this._plan.push({
          indention: data.split(' ').length - 1,
          name: data.replace(/ /g, '')
        });
      }
    }
  }

  _initTree() {
    for (let i = 0; i < this._plan.length; i++) {
      this._tree.add(this._plan[i].name, this._getParent(i, this._plan[i]), this._tree.traverseDF);
    }
  }
}

module.exports = ProjectStructureGeneratorService;