//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

const array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array2 = [2, 5, 5, 2, 3, 5, 1, 2, 4];

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; i++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
} // O(n^2) How we can solve it using hashtables...
// console.log(firstRecurringCharacter(array));

// Solving with Hashtable:
function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    // console.log(map[input[i]]); //output:
    // //2First_Recurring_Character.js:29 undefined
    // // First_Recurring_Character.js:29 0
    // // 2First_Recurring_Character.js:29 undefined
    // // First_Recurring_Character.js:29 1
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map); // we will see ht actual itteration
  }
  console.log(map); // no log
  return undefined;
} // O(n)

// console.log(firstRecurringCharacter2(array));
console.log(firstRecurringCharacter2(array2));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
