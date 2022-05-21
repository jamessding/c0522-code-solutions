/* exported addSuffixToAll */
// create an empty array
// for each value from index 0 to the final index of the given array
// concatenate string value of array words at current index with string suffix
// add the result of that expression to the end of the newly created array arr
// return the final array
function addSuffixToAll(words, suffix) {
  var arr = [];
  for (var i = 0; i < words.length; i++) {
    arr.push(words[i] + suffix);
  }
  return arr;
}
