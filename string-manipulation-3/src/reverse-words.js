/* exported reverseWords */
// split the string into an array with each word named stringArr
// create an empty array named finalArr
// for each index i from 0 to less than stringArr length, add an empty array to the end of finalArr
// for each index j from 0 to less than stringArr at i length, add stringArr at i at j to beginning of finalArr at i
// after the inner for loop concludes, join the string values of finalArr at i
// after the outer for loop concludes, join finalArr with a space between each word
function reverseWords(string) {
  var stringArr = string.split(' ');
  var finalArr = [];
  for (var i = 0; i < stringArr.length; i++) {
    finalArr.push([]);
    for (var j = 0; j < stringArr[i].length; j++) {
      finalArr[i].unshift(stringArr[i][j]);
    }
    finalArr[i] = finalArr[i].join('');
  }
  return finalArr.join(' ');
}
