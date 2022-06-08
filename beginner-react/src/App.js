import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

//api:
// https://raw.githubusercontent.com/mledoze/countries/master/countries.json

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/mledoze/countries/master/countries.json"
      )
      .then((res) => {
        // console.log("res.data", res.data);
        setData(res.data);
      });
  }, []);

  return (
    <div className="App">
      {data.map((country, idx) => {
        {
          console.log(data);
        }
        return (
          <div key={idx}>
            <h1>{country.name.common}</h1>
            <h1>{country.cca2}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
