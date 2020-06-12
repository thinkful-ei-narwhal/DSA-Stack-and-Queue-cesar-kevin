const _Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
    return this.top;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.value;
  }
}

module.exports = Stack;