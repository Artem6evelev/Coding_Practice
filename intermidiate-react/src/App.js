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
// it same as inner html dom api,

export default function App() {
  return (
    <div className="App">
      <h1>Intermidiate React </h1>
    </div>
  );
}
