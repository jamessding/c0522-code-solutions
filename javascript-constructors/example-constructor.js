function ExampleConstructor() {}
console.log('ExampleConstructor prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor prototype:', typeof ExampleConstructor.prototype);

var OtherConstructor = new ExampleConstructor();
console.log('OtherConstructor:', OtherConstructor);
var instanceOf = OtherConstructor instanceof ExampleConstructor;
console.log('instanceof:', instanceOf);
