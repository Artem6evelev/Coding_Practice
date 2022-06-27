import logo from "./logo.svg";
import "./App.css";

//* Interview Questions:
//? 1. Difference map vs forEach
// const arr = [2, 5, 3, 4];
// // map - will return a new array
// const mapResult = arr.map((arr) => {
//   return arr + 2;
// }).filter()
// console.log("mapResult", mapResult);
// // forEach - doesn't return anything, better to use to modify array
// const forEachResult = arr.forEach((arr, i) => {
//   arr[i] = arr + 2;
// });
// console.log("forEachResult", forEachResult);
//? 2. null vs undefined
// null - is an js primitive value
// undefined - means that variable is declared but not initialized yet.
// console.log(typeof null); //object
// console.log(typeof undefined); //undefined
//? 3. Flatten the Array
// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6, 7, 8, 9],
//   [10, 11, 12],
// ];
// // [1,2,3,4,5,6,7,8,9,10,11,12]
// // let flattened = [].concat(...arr); // it will result one level of flattening
// // console.log("flattened", flattened);
// // BETTER
// // console.log(arr.flat(2));
// // WITH A FUNCTION
// function customFlat(arr, depth = 1) {
//   let result = [];
//   arr.forEach((arr) => {
//     if (Array.isArray(arr) && depth > 0) {
//       result.push(...customFlat(arr, depth - 1));
//     } else result.push(arr);
//   });

//   return result;
// }

// console.log("customFlat", customFlat(arr, 2));
//? var vs let vs const
// var - is functional scoope, let and const block scoope
// {
//   var a = "hello";
//   var b = "try hello";
//   const c = "damn hello";
// }
// console.log("a", a);
// console.log("b", b); // not defined
// console.log("c", c); // not defind
//? setTimeout Output
// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged // 0, 1, 2
//     }, i + 1000);
//   }
// }
// console.log("a()", a());
// // a() undefined
// // 3 - after 1 sec 3 times
//? Explain Call, Apply, Bind
// // we can manipulater the context for function
// var person = {
//   name: "Artem Shevelev",
//   hello: function (thing) {
//     console.log(this.name + " says hello " + thing);
//   },
// };

// var alterEgo = {
//   name: "Alina Sheveleva",
// };

// person.hello.call(alterEgo, "word"); // call takes an oject, that becomes a contaxt for the function
// person.hello.apply(alterEgo, ["world"]); // will be provided to thing
// const newHello = person.hello.bind(alterEgo); // return completely new function with a context
// newHello("world");
//? Implement Promise.all
function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}
Promise.all([showText("hello", 1000), Promise.resolve("hi")]).then((value) =>
  console.log(value)
);

function App() {
  return <div className="App"></div>;
}

export default App;
