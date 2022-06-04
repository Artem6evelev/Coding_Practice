// 10 --> 5 --> 16

//? Our model of linked list
// let mylinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

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
  append(value) {}
}

const mylinkedList = new LinkedList(10);
mylinkedList.append(5);
mylinkedList.append(16);

console.log(mylinkedList);
