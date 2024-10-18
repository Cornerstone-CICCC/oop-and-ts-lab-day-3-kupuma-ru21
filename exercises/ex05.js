// Create a function called mixQueue that rearranges the queue so that the first half is interleaved/mixed with the second half
// For example: 1 2 3 4 5 6 becomes 1 4 2 5 3 6
// Make sure to implement the Queue principle (FIFO)

const Queue = require("../lib/Queue");

function mixQueue(queue) {
  const mid = Math.round(queue.size() / 2);

  const tempQueueA = new Queue();
  while (queue.size() > mid) {
    tempQueueA.enqueue(queue.dequeue());
  }

  const tempQueueB = new Queue();
  while (!queue.isEmpty()) {
    tempQueueB.enqueue(queue.dequeue());
  }

  while (!tempQueueA.isEmpty() && !tempQueueB.isEmpty()) {
    queue.enqueue(tempQueueA.dequeue());
    queue.enqueue(tempQueueB.dequeue());
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

mixQueue(queue);
console.log(queue.printQueue()); // Output: 1 4 2 5 3 6
