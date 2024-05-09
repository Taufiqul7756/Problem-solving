const checkPalindrome = (str) => {
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return "it is not palindrome";
    }
  }
  return "it is palindrome";
};

const result = checkPalindrome("madam");
console.log(result);
