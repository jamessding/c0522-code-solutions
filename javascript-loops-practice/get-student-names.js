/* exported getStudentNames */
// create an empty array
// for each value in the students array from index 0 to the final index
// add the name property of the object at index i of the student array to the end of the array arr
// return the final array arr
function getStudentNames(students) {
  var arr = [];
  for (var i = 0; i < students.length; i++) {
    arr.push(students[i].name);
  }
  return arr;
}
