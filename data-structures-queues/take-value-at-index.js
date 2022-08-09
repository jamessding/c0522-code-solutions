/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let count = 0;
  if (typeof queue.peek() === 'undefined') {
    return;
  }
  while (count !== index) {
    const front = queue.dequeue();
    queue.enqueue(front);
    count++;
  }
  return queue.dequeue();
}
