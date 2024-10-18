// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require("../lib/Queue");

function isPalindrome(queue) {
  const stack = [];
  while (!queue.isEmpty()) {
    const item = queue.dequeue();
    stack.push(item);
  }

  const middle = Math.floor(stack.length / 2);
  if (stack[middle] - 1 !== stack[middle - 1]) return false;

  const stackA = [];
  for (let index = middle; index >= 0; index--) {
    stackA.push(stack[index]);
  }

  const stackB = [];
  for (let index = middle; index < stack.length; index++) {
    stackB.push(stack[index]);
  }

  let flag = false;
  for (let index = 0; index <= middle; index++) {
    flag = stackA[index] === stackB[index];
  }
  return flag;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true
