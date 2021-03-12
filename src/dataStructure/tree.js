const Queue = require("./queue");

class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
  }
}

class Tree {
  constructor(data) {
    this._root = new Node(data);
  }

  traverseDF(cb) {
    (function recurse(currentNode) {
      for (const node of currentNode.children) {
        recurse(node);
      }

      cb(currentNode);
    })(this._root);
  }

  traverseBF(cb) {
    const queue = new Queue();

    queue.enqueue(this._root);

    let currentTree = queue.dequeue();

    while (currentTree) {
      for (const node of currentTree.children) {
        queue.enqueue(node);
      }

      cb(currentTree);
      currentTree = queue.dequeue();
    }
  }
  
  contains(cb, traversal) {
    traversal.call(this, cb);
  }

  add(data, toData, traversal) {
    const child = new Node(data);
    let parent = null;
    const cb = (node) => {
      if (node.data === toData) {
        parent = node;
      }
    };

    this.contains(cb, traversal);

    if (parent) {
      parent.children.push(child);
      child.parent = parent;
    } else {
      console.error("Cannot add node to a non-existent parent");
    }
  }
}

module.exports = Tree;