//* Transform an array - Let's move on to methods that transform and reorder an array.

//? map - The arr.map method is one of the most useful and often used. It calls the function for each element of the array and returns the array of results.
// Syntax:
// let result = arr.map(function (item, index, array) {
//   // returns the new value instead of item
// });
// Example:
// const fruits = ["apple", "banana", "orange", "kiwi"];
// let map_length = fruits.map(item => item.length)
// console.log(map_length)

//? sort(fn) - The call to arr.sort() sorts the array in place, changing its element order. It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.
// Example:
// let numbers = [ 1, 2, 15 ];
// numbers.sort()
// console.log(numbers) // [1, 15, 2]

// The items are sorted as strings by default.
// Literally, all elements are converted to strings for comparisons. For strings, lexicographic ordering is applied and indeed "2" > "15".
// To use our own sorting order, we need to supply a function as the argument of arr.sort().
// The function should compare two arbitrary values and return:
function compare(a, b) {
  if (a > b) return 1; // if the first value s greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}

// For instance, to sort as numbers:
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

// let arr = [1,2,15]
// arr.sort(compareNumeric)
// console.log(arr) // [1, 2, 15]

//? Actually, a comparison function is only required to return a positive number to say "greater" and a negative number to say "less".
// That allows to write shorter functions:
// let arr = [ 1, 2, 15 ];
// arr.sort(function(a, b) { return a - b; });
// alert(arr);  // *!*1, 2, 15*/!*

//? Remember [arrow functions](info:arrow-functions-basics)? We can use them here for neater sorting:
// arr.sort((a, b) => a - b);
// This works exactly the same as the longer version above.

//? smart header="Use localeCompare for strings" Remember strings comparison algorithm? It compares letters by their codes by default.
// For many alphabets, it's better to use str.localeCompare method to correctly sort letters, such as Ö.
// For example, let's sort a few countries in English:
// let countries = ["America", "Russia", "Bulgaria"];
// console.log(countries.sort((a, b) => (a > b ? 1 : -1))); // ['America', 'Bulgaria', 'Russia']
// console.log(countries.sort((a, b) => a.localeCompare(b))); // ['America', 'Bulgaria', 'Russia']

//? reverse - The method [arr.reverse](mdn:js/Array/reverse) reverses the order of elements in `arr`.
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr); // [5, 4, 3, 2, 1]
// It also returns the array `arr` after the reversal.

//? split and join
// Here's the situation from real life. We are writing a messaging app, and the person enters the comma-delimited list of receivers: `John, Pete, Mary`. But for us an array of names would be much more comfortable than a single string. How to get it?
// The [str.split(delim)](mdn:js/String/split) method does exactly that. It splits the string into an array by the given delimiter `delim`.
// In the example below, we split by a comma followed by space:
// let names = "Artem, Alina, Noy";
// let arr = names.split(", ");

// for (let name of arr) {
//   console.log(`A message to ${name}.`); // A message to Artem (and other names)
// }

// The `split` method has an optional second numeric argument -- a limit on the array length. If it is provided, then the extra elements are ignored. In practice it is rarely used though:
// let arr = "Artem, Alina, Noy, Tatyana".split(", ", 2); // ['Artem', 'Alina']
// console.log(arr);

// The call to `split(s)` with an empty `s` would split the string into an array of letters:
// let str = "test";
// console.log(str.split("")); // ['t', 'e', 's', 't']

//? join The call arr.join(glue) does the reverse to split. It creates a string of arr items joined by glue between them.
// Example:
// let arr = ["Artem", "Alina", "Noy"];
// let str = arr.join("; "); // glue the array into a string using
// console.log(str); // Artem; Alina; Noy

//? reduce/reduceRight - When we need to iterate over an array -- we can use forEach, for or for..of.
// When we need to iterate and return the data for each element -- we can use map.
// The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. They are used to calculate a single value based on the array.

// Example:
// let value = arr.reduce(function(accumulator, item, index, array) {
//     // ...
// }, [initial])

// The function is applied to all array elements one after another and "carries on" its result to the next call.
// Arguments:
// accumulator -- is the result of the previous function call, equals initial the first time (if initial is provided).
// item -- is the current array item.
// index -- is its position.
// array -- is the array.

// As function is applied, the result of the previous function call is passed to the next one as the first argument.
// So, the first argument is essentially the accumulator that stores the combined result of all previous executions. And at the end it becomes the result of reduce.
// Sounds complicated?
// The easiest way to grasp that is by example.
// Here we get a sum of an array in one line:

// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum + current, 0);
// console.log(result); // 15

// The function passed to reduce uses only 2 arguments, that's typically enough.
// On the first run, sum is the initial value (the last argument of reduce), equals 0, and current is the first array element, equals 1. So the function result is 1.
// On the second run, sum = 1, we add the second array element (2) to it and return.
// On the 3rd run, sum = 3 and we add one more element to it, and so on...

//! sum	current	result
//    sum cur result
// the first call	0	1	1
// the second call	1	2	3
// the third call	3	3	6
// the fourth call	6	4	10
// the fifth call	10	5	15
// Here we can clearly see how the result of the previous call becomes the first argument of the next one.

// We also can omit the initial value:

// let arr = [1, 2, 3, 4, 5];
// //removed initial value from reduce (no 0)
// let result = arr.reduce((sum, current) => sum + current);
// console.log(result); // 15

//? Array.isArray - Arrays do not form a separate language type. They are based on objects.
// // So typeof does not help to distinguish a plain object from an array:
// console.log(typeof {}); // object
// console.log(typeof []); // object
// // ...But arrays are used so often that there's a special method for that: Array.isArray(value). It returns true if the value is an array, and false otherwise.
// console.log(Array.isArray({})); // false
// console.log(Array.isArray([])); // true
