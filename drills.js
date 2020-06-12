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

function display(stack){
  let temp= stack.top;
  if (temp === null) {
    console.log('nothing in stack');
  } 
  while(temp !==null){
    console.log(temp.value);
    temp= temp.next;
  }
}

function main(){
  const starTrek = new Stack;
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  console.log(peek(starTrek));
  console.log(isEmpty(starTrek));
  display(starTrek);
//   starTrek.pop();
//   starTrek.pop();
  display(starTrek);

  //3. Check for palindromes using a stack
  console.log('//////////////3. Check for palindromes using a stack////////////////');
  is_palindrome('A man, a plan, a canal: Panama');
  is_palindrome('1001');
  is_palindrome('dad');
  is_palindrome('Tauhida');
  //4.Matching parentheses in an expression
  console.log('//////////////4.Matching parentheses in an expression////////////////');
  console.log(matchParentheses('()'));
  console.log(matchParentheses('(()'));
  //5. Sort stack
  console.log('//////////////5. Sort stack////////////////');
  display(starTrek);
  sortStack();

}
const mainRun = main();

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const stringStack = new Stack;
  for (let i = 0; i < s.length; i++) {
    stringStack.push(s[i]);
  }
  let reversedString = '';
  while (stringStack.top) {
    reversedString += stringStack.pop();
  }
  console.log(reversedString === s);
}

function matchParentheses(str){
  const marcher = new Stack;
  let map = {
    '(':')'
  };
  for(let i = 0; i < str.length; i++){
    if(str[i]=== '('){
      marcher.push(str[i]);
    }else{
      let last = marcher.pop(); 
      if(str[i]!== map[last]) {
        return false;
      }
    }
  }
  if (marcher.top) {
    return false;
  }
  return true;
}


function sortStack(stack){

}