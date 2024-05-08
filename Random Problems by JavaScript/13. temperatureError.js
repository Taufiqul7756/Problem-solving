const arr = [20, -1, -2, 3, 5, "Error", 36, 32, 44, 45];

function tempError(arr) {
  let higher = arr[0];
  let lower = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") continue;
    console.log(typeof arr[i]);

    if (higher < arr[i]) {
      higher = arr[i];
    }
    if (lower > arr[i]) {
      lower = arr[i];
    }
  }
  return console.log(higher, lower);
}
tempError(arr);
