function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    for (j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        // let temp = arr[j];
        // arr[j] = arr[j - 1];
        // arr[j - 1] = temp;

        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else break;
    }
  }
  return arr;
}
console.log(insertionSort([3, 12, -5, 4, 2]));
