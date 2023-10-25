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
            /*1st argument: You can pass setState a function that
            returns an object to achieve the same shallow merge as
            before. However, with this approach, you gain a level
            of control and predictability over the asynchronous behavior.

            2nd argument: You can also pass a second callback function
            as an argument, which runs after the state has been fully
            updated, offering more precise control over the order of
            execution.
            */
            onClick={() => {
              /* Optimal way we should write our setState code in class
              components: Using functions on both arguments */
              this.setState(
                (_state, _props) => ({
                  name: {
                    firstName: 'Paul',
                    lastName: 'McCartney',
                  },
                }),
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
