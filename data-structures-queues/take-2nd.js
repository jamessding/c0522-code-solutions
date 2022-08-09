/* exported take2nd */

function take2nd(queue) {
  if (typeof queue.peek() === 'undefined') {
    return;
  }
  const front = queue.dequeue();
  if (typeof queue.peek() === 'undefined') {
    return front;
  }
  const second = queue.dequeue();
  queue.enqueue(front);
  return second;
}
