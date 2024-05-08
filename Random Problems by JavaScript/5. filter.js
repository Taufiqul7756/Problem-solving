const numbers = [1, 2, 6, 8, 4, 5, 6, 7, 7, 8, 9, 5, 2, 63, 55, 44, 55, 22];

//duplicates
const duplicates = numbers.filter(function (value, index, array) {
  return array.indexOf(value) !== index;
});

//unique
const unique = numbers.filter(function (value, index, array) {
  return array.indexOf(value) !== index;
});
console.log(duplicates); //duplicates
console.log(unique); //unique
