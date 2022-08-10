/* exported swapFront */

function swapFront(list) {
  if (list.next == null) {
    return list;
  }
  var newHead = list.next;
  list.next = list.next.next;
  newHead.next = list;
  return newHead;
}
