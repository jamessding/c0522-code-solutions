/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (typeof queue.peek() === 'undefined') {
    return;
  }
  let first = queue.dequeue();
  if (typeof queue.peek() === 'undefined') {
    return first;
  }
  let second = queue.peek();
  while (first > second) {
    queue.dequeue();
    queue.enqueue(first);
    first = second;
    second = queue.peek();
  }
  return first;
}
