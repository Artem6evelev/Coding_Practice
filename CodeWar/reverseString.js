// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  let result = ""; // '' // w // ow // row ...
  for (let i of str) {
    result = i + result; // w + '' // o + w // r + ow //
  }

  return result;
}

console.log(solution("world"));
