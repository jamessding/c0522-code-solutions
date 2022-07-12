function reduce(array, reducer, initialValue) {
  let currentIndex = 0;
  let previousValue = initialValue;
  if (initialValue === undefined) {
    previousValue = array[0];
    currentIndex++;
  }
  while (currentIndex < array.length) {
    const currentValue = array[currentIndex];
    previousValue = reducer(previousValue, currentValue);
    currentIndex++;
  }
  return previousValue;
}
