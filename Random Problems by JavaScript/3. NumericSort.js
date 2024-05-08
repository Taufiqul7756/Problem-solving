const rollNumbers = [1, 8, 55, 6, 7, 21, 12, 3, 4, 14, 5];

// increasing
console.log(
  rollNumbers.sort(function (a, b) {
    return a - b;
  })
);

// decreasing
console.log(
  rollNumbers.sort(function (a, b) {
    return b - a;
  })
);
