/* exported swapChars */
// assign the substring of string from index 0 to firstIndex to variable result
// assign the value of string at first index to variable firstIndexChar
// for values from firstIndex to last index of string
// if current index is strictly equal to firstIndex, concatenate and assign result with value of string at secondIndex
// else if current index is strictly equal to secondIndex, concatenate and assign result with value of stored firstIndexChar variable
// else concatenate and assign result with value of string at current index
// return final result
function swapChars(firstIndex, secondIndex, string) {
  var result = string.substring(0, firstIndex);
  var firstIndexChar = string[firstIndex];
  for (var i = firstIndex; i < string.length; i++) {
    if (i === firstIndex) {
      result += string[secondIndex];
    } else if (i === secondIndex) {
      result += firstIndexChar;
    } else {
      result += string[i];
    }
  }
  return result;
}
