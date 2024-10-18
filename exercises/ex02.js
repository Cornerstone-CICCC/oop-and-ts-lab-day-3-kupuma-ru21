// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require("../lib/Stack");

function removeBetween(a, b) {
  const tempStack = new Stack();
  let aIndex = -1;
  let bIndex = -1;
  let index = 0;

  const copyStack = new Stack();

  while (fruits.size() > 0) {
    copyStack.push(fruits.pop());
  }

  while (copyStack.size() > 0) {
    const fruit = copyStack.pop();
    fruits.push(fruit);
    tempStack.push(fruit);

    if (fruit === a) {
      aIndex = index;
    }
    if (fruit === b) {
      bIndex = index;
    }
    index++;
  }

  // Check if both elements were found
  if (aIndex === -1 || bIndex === -1) {
    return -1; // return -1 if one of the elements was not found
  }

  let isBetween = false;
  while (tempStack.size() > 0) {
    const fruit = tempStack.pop();
    if (fruit === a) {
      isBetween = !isBetween;
    }
    if (isBetween) {
      fruits.pop();
    }
    if (fruit === b) {
      isBetween = !isBetween;
    }
  }
}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween("Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry
