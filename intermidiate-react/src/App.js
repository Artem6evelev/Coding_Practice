import "./App.css";

// TODO QUESTIONS:
//? 1. let vs const, what each one is o and when to use.
// ANSWER: both keywords create a binding, but differents that const prevents reassignment,
const something = {};
something.some = 5; // will not work
//? 2. REDUX - when should I use in react project
// ANSWER:
//1. - already using it.
//2. - team know it
//3. - server/data -> should go in cache --> 2 pieces of ui use the same data, etc.
// --> if data, better to use apollo, relay, react-query
//4. - share state across components.
//? 3. DANGEROUSLY SET INNER HTML - when should I use that in React
// ANSWER:
// 1. - you get HTML from server
//? 4. Binary tree question from google
// {value:5, left: {...}, right: {...}}
// SOLUTION:
// {left: 'a', right: 'b'}
// {left: 'b', right: 'a'}
function invertTree(node) {
  let left = node.left; //a
  node.left = node.right; // both 'a'
  node.right = left;
  invertTree(node.left);
  invertTree(node.right);
}
//? BONUS
//  - - - - -
//  0 1 ... 99

//* there are 100 holes in a line, and there is a rabbit hiding in one of the holes

//* you can only look in one hole at a time, and every time you look in a hole, the rabbit jumps to an adjacent hole find the rabbit

//* a good solution finds the right algorithm with the best O bonus points for providing the exact number of worst case searches for 100 holes.




export default function App() {
  return <div>center me</div>;
}
