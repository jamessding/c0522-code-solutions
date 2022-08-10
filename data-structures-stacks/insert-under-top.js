/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return;
  }
  const pop = stack.pop();
  stack.push(value);
  stack.push(pop);
}
