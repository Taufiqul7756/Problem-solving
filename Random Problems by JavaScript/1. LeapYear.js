const prompt = require("prompt-sync")();

const isLeapYear = (year) => {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
};
const year = prompt("Enter a year:");
isLeapYear(year);

// function checkLeapYear(year) {
//   if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
//     console.log(year + " is a leap year");
//   } else {
//     console.log(year + " is not a leap year");
//   }
// }

// const year = prompt("Enter a year:");

// checkLeapYear(year);

// const year = prompt("Enter a year:");
// console.log(year + "leap year check");
