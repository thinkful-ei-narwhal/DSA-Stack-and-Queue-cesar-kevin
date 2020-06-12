class _Node {
  constructor(value, next, prev) {
    this.value=value,
    this.next=next,
    this.prev = prev;
  }
}

class DLinkedQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node; 
    }
    if (this.last) {
      node.prev = this.last;
      this.last.next = node;
      this.last = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }

}

const peekQ = (queue) => {
  return queue.first;
};

const isEmptyQ = (queue) => {
  if (queue.first === null) {
    return true;
  } else {
    return false;
  }
};

function displayQ(queue){
  let temp= queue.first;
  if (temp === null) {
    console.log('nothing in stack');
  } 
  while(temp){//if ticket ask (temp !==null) not work
    console.log(temp.value);
    temp= temp.next;
  }
}

function main(){
  //7. Create a queue class using Doubly linked List
  console.log('////////////////6.queue using Doubly linked list////////////////');
  const starTrekQ = new DLinkedQueue;
  const emptyQ = new DLinkedQueue;
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  console.log(peekQ(starTrekQ));
  console.log(isEmptyQ(starTrekQ));
  console.log(isEmptyQ(emptyQ));
  displayQ(starTrekQ);
  console.log('///////////remove////////////');
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  displayQ(starTrekQ);
  console.log(peekQ(starTrekQ));
}
const mainRun = main();