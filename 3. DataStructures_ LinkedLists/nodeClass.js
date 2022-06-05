// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  // create append method
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    // Instead -->
    // const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this; // linked list back
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  //print our list as an array
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {}
}

const mylinkedList = new LinkedList(10);
console.log(mylinkedList.append(5)); // LinkedList {head: {…}, tail: {…}, length: 2}head: {value: 10, next: {…}}length: 2tail: {value: 5, next: null}[[Prototype]]: Object
console.log(mylinkedList.append(16));
console.log(mylinkedList.prepend(1)); // add 1 to the beginning of the list
console.log(mylinkedList.printList()); // [1, 10, 5, 16]
// console.log(mylinkedList.insert(2, 99));
// 1 --> 10 --> 99 --> 5 --> 16

// console.log(mylinkedList);
