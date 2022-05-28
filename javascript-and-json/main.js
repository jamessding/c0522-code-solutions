var arr = [{
  isbn: '1372461286',
  title: 'JavaScript',
  author: 'Tim'
}, {
  isbn: '113463156',
  title: 'CSS',
  author: 'James'
}, {
  isbn: '13162546436',
  title: 'HTML',
  author: 'Nathan'
}];
console.log('array of books:', arr);
console.log('type of array:', typeof arr);
var arrayJSON = JSON.stringify(arr);
console.log('arrayJSON:', arrayJSON);
console.log('type of arrayJSON:', typeof (JSON.stringify(arr)));
var studentJSON = '{"id":272410, "name":"James Ding"}';
console.log('studentJSON', studentJSON);
console.log('type of studentJSON:', typeof studentJSON);
var studentParse = JSON.parse(studentJSON);
console.log('studentParse', studentParse);
console.log('typeof studentParse:', typeof studentParse);
