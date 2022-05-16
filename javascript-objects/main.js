var student = {
  firstName: 'James',
  lastName: 'Ding',
  age: 25
};

var fullName = student.firstName + student.lastName;
console.log('value of fullName: ', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'athlete';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Toyota',
  model: 'Prius Prime',
  year: '2022'
};
vehicle['color'] = 'metallic grey';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'xiao miao',
  type: 'cat'
};
delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
