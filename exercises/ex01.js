// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require("../lib/Stack");

function calcDistance(a, b) {
  const tempStack = new Stack();
  let aIndex = -1;
  let bIndex = -1;
  let index = 0;

  const copyStack = new Stack();

  while (students.size() > 0) {
    copyStack.push(students.pop());
  }

  while (copyStack.size() > 0) {
    const student = copyStack.pop();
    students.push(student);
    tempStack.push(student);

    if (student === a) {
      aIndex = index;
    }
    if (student === b) {
      bIndex = index;
    }
    index++;
  }

  // Check if both elements were found
  if (aIndex === -1 || bIndex === -1) {
    return -1; // return -1 if one of the elements was not found
  }

  return Math.abs(bIndex - aIndex);
}

const students = new Stack();
students.push("John");
students.push("Joe");
students.push("Jane");
students.push("Jill");
students.push("Jim");

const distance = calcDistance("Joe", "Jim");
console.log(distance); // 3
const distance2 = calcDistance("Joe", "Jill");
console.log(distance2); // 2
