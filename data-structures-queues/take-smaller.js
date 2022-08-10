/* exported takeSmaller */

function takeSmaller(queue) {
  if (typeof queue.peek() === 'undefined') {
    return;
  }
  const first = queue.dequeue();
  if (typeof queue.peek() === 'undefined') {
    return first;
  }
  const second = queue.dequeue();
  if (first >= second) {
    queue.enqueue(first);
    return second;
  }
  if (first < second) {
    queue.enqueue(second);
    return first;
  }
}
