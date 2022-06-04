//? What is Pointer?

let obj1 = { a: true };
let obj2 = obj1; // pointer

// change object
obj1.a = "boooya"; // both object will be changed
delete obj1;
obj2 = "hello";

console.log("1", obj1);
console.log("2", obj2);
