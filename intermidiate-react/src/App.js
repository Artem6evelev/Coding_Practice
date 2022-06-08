import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

//TODO :
// 1. Fetch data from api : https://randomuser.me/api/?results=20

function App() {
  const [data, setData] = useState([]);
  const [flattenedLocations, setFlattenedLocations] = useState([]);


  const fetchData = () => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((res) => setData(res.data.results))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data.map((user, idx) => {
        return (
        <div key={idx}>
        {user.name.first}
        </div>
        )
      })}
    </div>
  );
}

export default App;
