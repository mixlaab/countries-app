import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            App is now a class component
          </p>
        </header>
      </div>
    );
  }
}

export default App;
