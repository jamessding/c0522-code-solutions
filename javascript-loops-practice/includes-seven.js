/* exported includesSeven */
// create a variable bool with a default value of false
// for each value in the array array from index 0 to final index
// if array at current index is strictly equal to 7
// assign true to variable bool
// return final value of bool variable
function includesSeven(array) {
  var bool = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      bool = true;
    }
  }
  return bool;
}
