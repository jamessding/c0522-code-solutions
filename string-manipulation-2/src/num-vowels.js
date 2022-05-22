/* exported numVowels */
// create variable vowelNum to count number of vowels
// assign the value of string converted to all lowercase to a new variable lowerString
// for each value from index 0 to the last index of string parameter
// if lowerString at current index is equal to any val, increment vowelNum
// return final vowelNum value after loop concludes
function numVowels(string) {
  var vowelNum = 0;
  var lowerString = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (lowerString[i] === 'a' || lowerString[i] === 'e' || lowerString[i] === 'i' || lowerString[i] === 'o' || lowerString[i] === 'u') {
      vowelNum++;
    }
  }
  return vowelNum;
}
