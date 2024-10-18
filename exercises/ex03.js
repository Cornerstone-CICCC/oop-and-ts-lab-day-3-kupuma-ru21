// Create a function called insertAfterTarget that inserts a new element after a target element
// Make sure to implement the Stack principle (LIFO)

const Stack = require("../lib/Stack");

function insertAfterTarget(target, newElement) {
  const tempStack = new Stack();
  let targetFound = false;

  while (stack.size() > 0) {
    const element = stack.pop();
    tempStack.push(element);

    if (element === target) {
      targetFound = true;
      tempStack.push(newElement);
    }
  }

  while (tempStack.size() > 0) {
    stack.push(tempStack.pop());
  }

  if (!targetFound) {
    console.log("Target not found");
  }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

insertAfterTarget("B", "X");
console.log(stack.printStack()); // A B X C D
