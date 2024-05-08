const reverseString = (str) => {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
};

const result = reverseString("Hello abc");
console.log(result);
