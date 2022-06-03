//* 3 things that are important with objects:
//? 1. reference type
//? 2. context
//? 3. instantiation

//? 1. REFERENCE TYPE
// ([] === [][1]) === // false // create date structure and create 2nd data structure
//   [1]; // false

// var object1 = { value: 10 };
// var object2 = object1;
// var object3 = { value: 10 };
// object1 === object2; // true
// object1 === object3; // false

// console.log((object1.value = 15)); // 15
// console.log(object2.value); //15
// console.log(object3.value); //! 10 ... why 10? // object3 it's a new object because it's a new brackets

//? CONTEXT VS SCOPE - context tells you where we are with in the object
// function b() {
//   let a = a;
// }
// console.log(a); // classesInJS.js:24 Uncaught ReferenceError: a is not defined

// console.log(this);
// // waht is this? this - is a window object
// console.log(this === window); // true
// // this - means is what is the object environment that we are in right now.
// // or simple saying what is on left of the dot
// //! this is refers to whats object it's inside of
// // window.alert();

// function a() {
//   console.log(this);
// }
// a(); // window object
// window.a(); // to the left thats a windows

// const object4 = {
//   a: function () {
//     console.log(this);
//   },
// };
// object4.a(); // {a: ƒ}

//? INSTANTIATION - is when you're doing a copy of the object and reuse the code.
class Player {
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type); // access to the player name and type
    console.log("wizard", this);
  }
  play() {
    console.log(`WEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");
