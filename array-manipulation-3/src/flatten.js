/* exported flatten */
// assign empty array to variable arr
// for each index i from 0 to less than array length
// for each index j from 0 to less than array at i length
// if array at i is an array, then add array at i at j to end of arr
// if array at i is not an array, then add array at i to end of arr
// return final arr
function flatten(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (Array.isArray(array[i])) {
        arr.push(array[i][j]);
      }
    }
    if (!Array.isArray(array[i])) {
      arr.push(array[i]);
    }
  }
  return arr;
}
