import React, { useState } from "react";

export const State = () => {
  //? useState - it's for to handle reactive data, when state is changes re-render the UI
  //? hook takes one optional argument which is default state
  //? the reson why it returns an array, because we can restructure them with a javascript to assign them to local variable with the name we want

  const [count, setCount] = useState(0);

  return (
    <>
      <div>UseState</div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
};
