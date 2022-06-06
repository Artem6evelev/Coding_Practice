import React, { useState, useEffect } from "react";
// useEffect - in class component its mounting and updating in order to create a different side effects
// with this hook we want to do some kind of side effects whenever something happends

export const Effect = () => {
  //! start Example 1:
  //   const [resourceType, setResourceType] = useState("posts");
  //   const [items, setItems] = useState([]);

  //   console.log("render");

  // //   everything inside of this function will be executed everysingle time our app renders
  //     useEffect(() => {
  //       console.log("render type changed");
  //       fetch("https://jsonplaceholder.typicode.com/todos/")
  //         .then((response) => response.json())
  //         .then((json) => setItems(json));

  //         return () => { // will render first
  //             console.log('return from resource change')
  //         }
  //     }, [resourceType]); // whatever you pass into this array, is gonna be values that whatever they change you hook gonna to run

  //   useEffect(() => {
  //     console.log("onMount");
  //   }, [1, 2, 3]); // wahtever of numbers is changed it will run our useEffect hook
  //! finish Example 1:
  /////////////////////////
  //! start Example 2:
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // return () => {
    //   //this function will cal whatever is useffect is cleaned up
    //   window.addEventListener("resize", handleResize);
    // };
  }, []);

  //! finish Example 2

  return (
    <>
      {/* start Example 1: */}
      {/* <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <h1>{resourceType}</h1>
      {items.map((item, idx) => {
        return <pre key={idx}>{JSON.stringify(item)}</pre>;
      })} */}
      {/* finish Example 1: */}

      {/* start Example 2: */}
      {windowWidth}

      {/* finish Example 2: */}
    </>
  );
};
