//* Add/remove items

const fruits = ["apple", "banana", "orange", "kiwi"];

//? 1. push - add item to the end of array
// fruits.push("mango")
// console.log(fruits) // ['apple', 'banana', 'orange', 'kiwi', 'mango']
//? 2. pop - extract item from the end of array
// fruits.pop()
// console.log(fruits) // ['apple', 'banana', 'orange', 'kiwi']
//? 3. shift - extract an item from the beginning of array
// fruits.shift()
// console.log(fruits) // ['banana', 'orange', 'kiwi']
//? 4. unshift - add items to the beginning of array
// fruits.unshift("melon")
// console.log(fruits) // ['melon', 'banana', 'orange', 'kiwi']
//? 5. splice - it can do everything: insert, remove, replace elements
// fruits.splice(1,1) // from index 1 delet 1 element
// console.log(fruits) // ['apple', 'orange', 'kiwi']

// In the next example we remove 3 elements and replace them with the other two:
// fruits.splice(0,3, "cucumber", "pepper")
// console.log(fruits) // ['cucumber', 'pepper', 'kiwi']

// Here we can see that splice returns the array of removed elements:
// let removed = fruits.slice(0,3)
// console.log(removed) // ['apple', 'banana', 'orange']

// The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:
// from index 2
// delete 0
// then insert "complex" and "language"
// fruits.splice(2, 0, "yummy", "delicious")
// console.log(fruits) // ['apple', 'banana', 'yummy', 'delicious', 'orange', 'kiwi']

// Here and in other array methods, negative indexes are allowed. They specify the position from the end of the array, like here:
// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
// fruits.splice(-1, 0, 3, 4)
// console.log(fruits) // ['apple', 'banana', 'orange', 3, 4, 'kiwi']
//? slice - It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed. It's similar to a string method str.slice, but instead of substrings it makes subarrays.
//? We can also call it without arguments: arr.slice() creates a copy of arr. That's often used to obtain a copy for further transformations that should not affect the original array.
// const newFruits = fruits.slice(0,2)
// console.log(fruits) // ['apple', 'banana', 'orange', 'kiwi']
// console.log(newFruits) // ['apple', 'banana']
//? concat - The method arr.concat creates a new array that includes values from other arrays and additional items.
// create an array from: arr and [3,4]
// let concatArr = fruits.concat([3,4])
// console.log(fruits) // ['apple', 'banana', 'orange', 'kiwi']
// console.log(concatArr) //['apple', 'banana', 'orange', 'kiwi', 3, 4]

// create an array from: arr and [3,4] and [5,6]
// let concatArray = fruits.concat([3,4], [5,6])
// console.log(fruits) // ['apple', 'banana', 'orange', 'kiwi']
// console.log(concatArray) // ['apple', 'banana', 'orange', 'kiwi', 3, 4, 5, 6]

// create an array from: arr and [3,4], then add values 5 and 6
// let concatArr = fruits.concat([3,4], 5,6)
// console.log(fruits) // ['apple', 'banana', 'orange', 'kiwi']
// console.log(concatArr) // ['apple', 'banana', 'orange', 'kiwi', 3, 4, 5, 6]

