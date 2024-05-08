var longestPalindrome = function (string) {
  let longestPal = "";

  var getLongestPalindrome = function (leftPosition, rightPosition) {
    while (
      leftPosition >= 0 &&
      rightPosition < string.length &&
      string[leftPosition] === string[rightPosition]
    ) {
      leftPosition--;
      rightPosition++;
    }

    if (rightPosition - leftPosition > longestPal.length) {
      longestPal = string.slice(leftPosition + 1, rightPosition);
    }
  };

  for (let i = 0; i < string.length; i++) {
    getLongestPalindrome(i, i + 1);

    getLongestPalindrome(i, i);

    if ((string.length - i) * 2 < longestPal.length) {
      break;
    }
  }

  return longestPal;
};
