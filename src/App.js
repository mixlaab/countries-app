import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      country1: {
        name: "Mexico"
      },
      country2: {
        name: "England"
      },
      country3: {
        name: "Uruguay"
      },
    }
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.country1.name}</h1>
        <h1>{this.state.country2.name}</h1>
        <h1>{this.state.country3.name}</h1>
      </div>
    );
  }
}

export default App;
