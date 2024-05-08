const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter two numbers: ", (input) => {
  const [x, y] = input.split(" ").map((num) => parseInt(num));

  let sum = 0;
  let min, max;

  if (x < y) {
    min = x;
    max = y;
  } else {
    max = x;
    min = y;
  }

  for (let i = min + 1; i < max; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }

  console.log(sum);
  rl.close();
});
