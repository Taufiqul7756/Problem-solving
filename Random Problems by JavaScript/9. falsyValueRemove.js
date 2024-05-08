//Falsy value - false , '', NaN , undefined , null , 0
// Remove Falsy Value From an Array.

const mixedArray = [
  "My",
  "Name",
  undefined,
  false,
  "is",
  0,
  "taufiq",
  "UserName",
  7756,
  "",
  NaN,
];

const finalArray = mixedArray.filter(function (ele) {
  if (ele) {
    return true;
  } else {
    return false;
  }
});

// const finalArray = mixedArray.filter(Boolean); // By using Boolean

//Falsy Value Remove from Object

const mixedObj = {
  name: "Taufiqul",
  middleName: false,
  lastName: "Islam",
  Age: 25,
  sex: NaN,
  std: undefined,
  alive: true,
  gf: "",
};

const finalObj = function (mixedObj) {
  for (let finalArray in mixedObj) {
    if (!mixedObj[finalArray]) {
      delete mixedObj[finalArray];
    }
  }
  return mixedObj;
};

// console.log(finalArray);
console.log(finalObj(mixedObj));
