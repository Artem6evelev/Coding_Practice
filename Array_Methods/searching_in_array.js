//* indexOf/lastIndexOf and includes
// The methods arr.indexOf, arr.lastIndexOf and arr.includes have the same syntax and do essentially the same as their string counterparts, but operate on items instead of characters:
// arr.indexOf(item, from) -- looks for item starting from index from, and returns the index where it was found, otherwise -1.
// arr.lastIndexOf(item, from) -- same, but looks for from right to left.
// arr.includes(item, from) -- looks for item starting from index from, returns true if found.

// const fruits = ["apple", "banana", "orange", "kiwi"];

// console.log(fruits.indexOf("apple")); // 0
// console.log(fruits.indexOf("kiwi")); // 3
// console.log(fruits.indexOf(null)); // -1

//? find and findIndex - Imagine we have an array of objects. How do we find an object with the specific condition?
// let result = fruits.find(function (item, index, array) {
//   // if true is returned, item is returned and iteration is stopped
//   // for falsy scenario returns undefined
// });
// The function is called for elements of the array, one after another:

// let object_Fruits = [
//     {id: 1, fruit: "apple"},
//     {id: 2, fruit: "banana"},
//     {id: 3, fruit: "orange"},
// ]

// let find_Fruit = object_Fruits.find(item => item.id === 1)
// console.log(find_Fruit) // {id: 1, fruit: 'apple'}

//? filter - The find method looks for a single (first) element that makes the function return true. If there may be many, we can use arr.filter(fn).
// let results = fruits.filter(function (item, index, array) {
//   // if true item is pushed to results and the iteration continues
//   // returns empty array if nothing found
// });

// let object_Fruits = [
//     {id: 1, fruit: "apple"},
//     {id: 2, fruit: "banana"},
//     {id: 3, fruit: "orange"},
//     {id: 3, fruit: "kiwi"},
// ]

// let filter_Fruits = object_Fruits.filter(item => item.id < 3)
// console.log(filter_Fruits) // {id: 1, fruit: 'apple'} , {id: 2, fruit: 'banana'}
