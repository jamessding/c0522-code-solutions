/* exported getLength */

function getLength(list) {
  let count = 1;
  var next = list.next;
  while (next !== null) {
    count++;
    next = next.next;
  }
  return count;
}
