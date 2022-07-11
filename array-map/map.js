function map(array, transform) {
  const finalArr = [];
  for (let i = 0; i < array.length; i++) {
    finalArr.push(transform(array[i]));
  }
  return finalArr;
}
