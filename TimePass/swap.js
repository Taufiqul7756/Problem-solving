const swapNum = (a, b) => {
  console.log("Before swapping:");
  console.log("Num 1 =", a);
  console.log("Num 2 =", b);

  a = a + b;
  b = a - b;
  a = a - b;
  console.log("After swapping:");
  console.log("Num 1 =", a);
  console.log("Num 2 =", b);
};

const result = swapNum(5, 2);
console.log(result);

// let temp = a;
//     a = b;
//     b = temp;
