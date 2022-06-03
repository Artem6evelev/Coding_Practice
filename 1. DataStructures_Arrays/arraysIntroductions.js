const strings = ["a", "b", "c", "d"];
//4*4 = 16 bytes of starage

//push
strings.push("e"); //O(1) - very fast

//pop
strings.pop();
strings.pop(); // O(1)

//unshift
strings.unshift("x"); //O(n) - indexcies was changes and it takes more time to reassign

//splice
strings.splice(2, 0, "alien"); //O(n/2) - because we loop half of the array, simplify it O(n)

console.log(strings);
