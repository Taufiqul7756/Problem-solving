var mapOfNumbers = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

var letterCombinations = function (digits) {
  if (!digits.length) {
    return [];
  }

  let lastDigitPossibilities = [""];

  for (let i = 0; i < digits.length; i++) {
    let newPossibilities = [];

    for (let x = 0; x < lastDigitPossibilities.length; x++) {
      for (let letter of mapOfNumbers[digits[i]]) {
        newPossibilities.push(lastDigitPossibilities[x].concat(letter));
      }
    }

    if (i == digits.length - 1) {
      return newPossibilities;
    }

    lastDigitPossibilities = newPossibilities;
  }
};
