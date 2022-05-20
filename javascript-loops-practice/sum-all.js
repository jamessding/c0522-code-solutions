/* exported sumAll */
// create a variable to hold the sum with an initial value of 0
// for each number in the given array from index 0 to the final index
// add the number at each index to the variable sum and store that value in sum
// return the final sum value
function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
