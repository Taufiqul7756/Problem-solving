// const addNum = (num1, num2) => {
//   return num1 + num2;
// };

// console.log("Total:", addNum(10, 20));

// const highestNum = (num1, num2, num3) => {
//   let highN = [num1];
//   if (num1 >= num2 && num1 >= num3) {
//     highN = highN[num1];
//     return num1;
//   } else if (num2 >= num1 && num2 >= num3) {
//     highN = highN[num2];
//     return num2;
//   } else {
//     return num3;
//   }
// };

// const result = highestNum(3, 8, 5);

// console.log("Highest Number:", result);

const howManyCharacter = (input) => {
  let digitCount = 0;
  let charCount = 0;
  for (let i = 0; i < input.length; i++) {
    if (input.charCodeAt(i) >= 48 && input.charCodeAt(i) <= 57) {
      digitCount++;
    } else {
      charCount++;
    }
  }
  return { digits: digitCount, characters: charCount };
};

const result = howManyCharacter("5c9CHA");

console.log("Digit count:", result.digits);
console.log("Character  count:", result.characters);
