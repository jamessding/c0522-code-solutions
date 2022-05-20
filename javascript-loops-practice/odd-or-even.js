/* exported oddOrEven */
// create an empty array
// for each value in numbers array from index 0 to final index
// if numbers at current index mod 2 is strictly equal to 0
// add the string even to the end of array arr
// else add the string odd to the end of array arr
// return final array arr
function oddOrEven(numbers) {
  var arr = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      arr.push('even');
    } else {
      arr.push('odd');
    }
  }
  return arr;
}
