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
