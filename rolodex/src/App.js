import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
        },
        {
          name: "Frank",
        },
        {
          name: "Jacky",
        },
        {
          name: "Artem",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, idx) => {
          return (
            <div key={idx}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
