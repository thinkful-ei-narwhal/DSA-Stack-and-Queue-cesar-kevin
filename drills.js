const Stack = require('./stack');
const Queue = require('./queue');


function main(){
  const starTrek = new Stack;
  
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
}

const mainRun = main();