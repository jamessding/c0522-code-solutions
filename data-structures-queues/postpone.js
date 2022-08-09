/* exported postpone */

function postpone(queue) {
  if (typeof queue.peek() === 'undefined') {
    return;
  }
  const front = queue.dequeue();
  queue.enqueue(front);
}
