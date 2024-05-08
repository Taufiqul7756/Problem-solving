const prompt = require("prompt-sync")();

const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

const countVowels = (sentence) => {
  let count = 0;
  const letters = Array.from(sentence);
  letters.forEach(function (value) {
    if (vowels.includes(value)) {
      count += 1;
    }
  });
  return count;
};

const sentence = prompt("Enter Sentence: ");
console.log(countVowels(sentence));

// const letter = (sentence) => {
//   if (
//     sentence == "a" ||
//     sentence == "e" ||
//     sentence == "i" ||
//     sentence == "o" ||
//     sentence == "u"
//   ) {
//     return "Your letter is a vowel";
//   } else {
//     return "Your letter is a consonant";
//   }
// };
// const sentence = prompt("Your Letter : ");
// console.log(letter(sentence));
