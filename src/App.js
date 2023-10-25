import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: 'John', lastName: 'Lennon' },
      country: 'England',
    };
  }

  render() {
    const { firstName, lastName } = this.state.name;
    const { country } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Hi {firstName} {lastName}! Greetings to {country}
          </p>
          <button
            onClick={() => {
              this.setState(
                { name: { firstName: 'Paul', lastName: 'McCartney' } },
                () => console.log(this.state)
              );
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
