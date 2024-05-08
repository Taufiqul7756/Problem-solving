//Stack Implementation by Array -  LIFO

class Stack {
  constructor() {
    this.arr = [];
  }
  //push
  push(value) {
    this.arr.push(value);
    return this.arr;
  }
  //pop
  pop() {
    this.arr.pop();
    return this.arr;
  }

  //LookUp
  lookUp() {
    return this.arr[this.arr.length - 1];
  }
}
let stack = new Stack();
// console.log(stack.push(5));
// console.log(stack.push(15));
// console.log(stack.push(25));
// console.log(stack.lookUp());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

// Another Stack Implementation - Object

class AnotherStack {
  constructor() {
    this.database = {};
    this.count = 0;
  }

  push(value) {
    this.count++;
    this.database[this.count] = value;
    return this.database;
  }

  pop() {
    let deleteItem = this.database[this.count];
    delete this.database[this.count];
    this.count--;
    return deleteItem;
  }

  peek() {
    return this.database[this.count];
  }
}

let stack1 = new AnotherStack();
console.log(stack1.push(10));
console.log(stack1.push(20));
console.log(stack1.pop());
console.log(stack1.peek());
