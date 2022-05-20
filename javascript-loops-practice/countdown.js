/* exported countdown */
// create an empty array for output
// for each number from number to 0
// add the current number to the array
// then return the array
function countdown(number) {
  var arr = [];
  for (var i = number; i >= 0; i--) {
    arr.push(i);
  }
  return arr;
}
