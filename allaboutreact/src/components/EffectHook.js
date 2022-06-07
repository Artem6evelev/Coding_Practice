import React, { useEffect, useState } from "react";

export const EffectHook = () => {
  //? useEffect - to understand you need to understand component lifecycle
  //? it is a function that takes a function udefine as it's first argument
  //? react then will run your function or side effect after that updated a dom
  //? RUN when mounted, when state changes. after it will run if data changes on the component
  //? it run first when component is initializded and after when state will be changes
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  //! componentDidMount
  //   useEffect(() => {
  //     alert("hello side effect!");
  //   });

  //! componentDidUpdate
  //   useEffect(() => {
  //     fetch("foo").then(() => setLoaded(true));
  //   }, [count]); // array of dependencies, not  to run it infinite
  //   // RUN when count changes

  //! componentWillUnmount - run some code when component destroyed
  //   useEffect(() => {
  //     alert("hello side effect!");

  //     return () => alert("goodbye component");
  //   });

  //? Lifecycle events:
  // componentDidMount() {
  //     // initialized
  // }
  // componentDidUpdate() {
  //     // state updated
  // }
  // componentWillUnmount() {
  //     // destroyed
  // }

  return (
    <>
      <div>EffectHook</div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
};
