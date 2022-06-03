//* Iterate: forEach - The arr.forEach method allows to run a function for every element of the array.
const fruits = ["apple", "banana", "orange", "kiwi"];

fruits.forEach(function (item, index, array) {
  // ... do something with item
});
//? For instance, this shows each element of the array:
// fruits.forEach(console.log) // /alert

//? And this code is more elaborate about their positions in the target array:
// fruits.forEach((item, index, array) => {
//   console.log(`${item} is at index ${index} in ${array}`);
// });
// Output:
// apple is at index 0 in apple,banana,orange,kiwi
// banana is at index 1 in apple,banana,orange,kiwi
// orange is at index 2 in apple,banana,orange,kiwi
// kiwi is at index 3 in apple,banana,orange,kiwi