const array = [2, 3, 8, 12, 45, 40, 56, 5, 58, 59, 80, 90];
const sortedArray = array.sort(function (a, b) {
  return a - b;
});
console.log(`Sorted Array: ` + sortedArray);

function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.round((start + end) / 2);
    if (arr[mid] === value) {
      return mid;
    }
    if (value > arr[mid]) {
      start = mid + 1;
    } else if (value < arr[mid]) {
      end = mid - 1;
    }
  }
  return "Not Found";
}

console.log(binarySearch(sortedArray, 40));
