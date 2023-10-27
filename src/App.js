import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [
        {
          name: 'Mexico',
          id: 'ab12cd43'
        },
        {
          name: 'England',
          id: 'gx324fe6'
        },
        {
          name: 'Uruguay',
          id: 'u92p89g2'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.countries.map((country) => {
          return <h1 key={country.id}>{country.name}</h1>
        })}
      </div>
    );
  }
}

export default App;
