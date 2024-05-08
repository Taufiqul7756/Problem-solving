function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowestNum = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowestNum] > arr[j]) {
        lowestNum = j;
      }
    }
    if (i !== lowestNum) {
      let temp = arr[i];
      arr[i] = arr[lowestNum];
      arr[lowestNum] = temp;
    }
  }
  return arr;
}
console.log(selectionSort([12, 25, 14, 65, 63, -25, 9, 78, 99]));
