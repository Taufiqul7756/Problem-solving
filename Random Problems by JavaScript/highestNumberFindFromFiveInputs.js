const numbers = [10, 12, 9, 11, 16];

let highestNum = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > highestNum) {
    highestNum = numbers[i];
  }
}

console.log("The highest number is:", highestNum);

const numbersEasySolution = [10, 5, 8, 15, 3];
const highestNumber = Math.max(...numbersEasySolution);

console.log("The highest number is:", highestNumber);
