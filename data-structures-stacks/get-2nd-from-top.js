/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return;
  }
  const pop = stack.pop();
  const peek = stack.peek();
  stack.push(pop);
  return peek;
}
