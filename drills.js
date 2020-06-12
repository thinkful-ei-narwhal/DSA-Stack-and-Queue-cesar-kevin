const Stack = require('./stack');
const Queue = require('./queue');

const peek = (stack) => {
  return stack.top;
};

const isEmpty = (stack) => {
  if (stack.top === null) {
    return true;
  } else {
    return false;
  }
};

const display = (stack) => {
  let temp = stack.top;
  if (temp === null) {
    return 'nothing in stack';
  } else {
    while (temp.next !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
};

function main(){
  const starTrek = new Stack;
  
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  console.log(peek(starTrek));
  console.log(isEmpty(starTrek));
  console.log(display(starTrek));
}

const mainRun = main();