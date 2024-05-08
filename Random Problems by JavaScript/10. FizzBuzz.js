// Divisible by 3 or 5.
// divisible by 3 and 5 both

function fizzBuzz(number) {
  for (let index = 1; index <= number; index++) {
    if (index % 15 === 0) {
      console.log(`${index} is FizzBuzz`);
    } else if (index % 3 === 0) {
      console.log(`${index} is Fizz`);
    } else if (index % 5 === 0) {
      console.log(`${index} is Buzz`);
    } else {
      console.log(`${index}`);
    }
  }
}

fizzBuzz(10);
