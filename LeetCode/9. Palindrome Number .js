var isPalindrome = function (x) {
  let initialX = x,
    reverseNumber = 0;

  while (x != 0) {
    reverseNumber = parseInt(reverseNumber * 10 + parseInt(x % 10));
    x = parseInt(x / 10);
  }

  if (initialX < 0) {
    return initialX === -1 * reverseNumber;
  }

  return initialX === reverseNumber;
};
