/* exported removeTail */

function removeTail(list) {
  if (list.next === null) {
    return;
  }
  let previous = null;
  let current = list;
  while (current.next !== null) {
    previous = current;
    current = current.next;
  }
  previous.next = null;
}
