import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "John",
      country: "England"
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Hi {this.state.name}! Greetings to {this.state.country}
          </p>
          <button
            onClick={() => {
              //Shallow-merge: Only update name, not country
              this.setState({ name: "Paul" }, () => {
                console.log(this.state);
              });
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
