import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Artem", lastName: "Shevelev" },
      company: "Artcodesh",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at{" "}
            {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState({
                name: { firstName: "Alina", lastName: "Shevelev" },
              });
              console.log(this.state);
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
