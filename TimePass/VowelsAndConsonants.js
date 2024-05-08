const VowelsAndConsonants = (str) => {
  str = str.toLowerCase();
  let vowels = 0;
  let consonants = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u" ||
        char === "A" ||
        char === "E" ||
        char === "I" ||
        char === "O" ||
        char === "U"
      ) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }
  return { vowels, consonants };
};
const inputString = "Hello, World!";
const result = VowelsAndConsonants(inputString);
console.log("input String:", inputString);
console.log("Vowels:", result.vowels);
console.log("Consonants:", result.consonants);
