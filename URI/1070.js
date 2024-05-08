const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a positive integer value: ", (X) => {
  X = parseInt(X);
  if (X % 2 === 0) X++;
  for (let i = 0; i < 6; i++, X += 2) {
    console.log(X);
  }
  rl.close();
});
