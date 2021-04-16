const { mkdir, appendFile, existsSync } = require("fs");
const { dirname, basename } = require("path");
const { Tree } = require("../../dataStructure");
const { NotAlrightFileForm, InternalProgramError } = require("../../exceptions");
const { warnMessagePrint, printExceptionMessage } = require("../../utils");

class ProjectStructureGeneratorService {
  constructor() {
    this._rootDir = process.cwd();
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
    const filename = basename(fullPath);
    const filePath = dirname(fullPath) + '/' + filename;
    if (existsSync(filePath)) {
      warnMessagePrint(`${filename} already exists`);
      return;
    }
    appendFile(filePath, '', error => {
      printExceptionMessage(InternalProgramError.message);
    });
  }

  _makeDir(fullPath, dirName) {
    if (existsSync(fullPath)) {
      dirName = dirName.split('/')[1];
      warnMessagePrint(`${dirName} directory already exists`);
      return;
    }
    mkdir(fullPath, error => {
      printExceptionMessage(InternalProgramError.message);
    });
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
    if (filename.split('.').pop() != "txt") {
      throw NotAlrightFileForm;
    }
    return this._rootDir + "/.projectStructures/" + filename;
  }

  _initPlan(filename) {
    const planPath = this._getPlanPath(filename);
    for (const data of readFile(planPath).split("\r\n")) {
      this._plan.push({
        indention: data.split(' ').length - 1,
        name: data.replace(/ /g, '')
      });
    }
  }

  _initTree() {
    for (let i = 0; i < this._plan.length; i++) {
      this._tree.add(this._plan[i].name, this._getParent(i, this._plan[i]), this._tree.traverseDF);
    }
  }
}

module.exports = ProjectStructureGeneratorService;