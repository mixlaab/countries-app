import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [
        {
          name: "Mexico"
        },
        {
          name: "England"
        },
        {
          name: "Uruguay"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.countries.map((country) => {
          return <h1>{country.name}</h1>
        })}
      </div>
    );
  }
}

export default App;
