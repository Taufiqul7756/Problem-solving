function bubbleSort(arr) {
  let isSwap;
  for (let i = 0; i < arr.length; i++) {
    isSwap = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log("To see", arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // [arr[j], (arr[j + 1] = arr[j + 1]), arr[j]];
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }

  return arr;
}

console.log(bubbleSort([2, 53, 23, 5, -2]));
