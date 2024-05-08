//class Expression
// const DataStructure = class {};

// let ds = new DataStructure();
// console.log(ds);

//class declaration
class DataStructure {
  constructor() {
    this.storage = [];
  }
  insert(value) {
    this.storage.push(value);
    return this.storage;
  }
  unShift(value2) {
    this.storage.push(value2);
    return this.storage;
  }
}
let ds = new DataStructure("LinkedList", 20);
console.log(ds.insert(20));
console.log(ds.insert(23));
console.log(ds.insert(27));
console.log(ds.insert(29));
console.log(ds.unShift(100));

// let arr = [2, 3];
// arr.push(6);
// arr.push(5);
// arr.push(60);
// console.log(arr);

// let obj = {
//   name: "Taufiq",
//   age: 25,
// };

// obj.passion = "Coding";
// console.log(obj);
