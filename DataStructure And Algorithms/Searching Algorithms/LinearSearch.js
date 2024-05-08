function LinearSearch(array, value) {
  const length = array.length;
  for (let index = 0; index < length; index++) {
    if (array[index] === value) {
      return index;
    }
  }
  return " Not Found";
}

console.log(LinearSearch(["a", "b", "c", "d", "e"], "c"));
