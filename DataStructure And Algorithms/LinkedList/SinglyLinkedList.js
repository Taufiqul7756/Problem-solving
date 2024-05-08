class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    let newNode = {
      value: value,
      next: null,
    };
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
}

let list = new SinglyLinkedList();
console.log(list);
console.log(list.isEmpty());
list.push(10);
list.push(15);
list.push(25);

console.log(list);
console.log(list.isEmpty());
