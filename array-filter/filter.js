function filter(array, predicate) {
  const finalArr = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      finalArr.push(array[i]);
    }
  }
  return finalArr;
}
