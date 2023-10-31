import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      query: ''
    }
  }

  componentDidMount() {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((countries) =>
        this.setState(
          () => ({ countries }),
          () => console.log(countries)
        )
      )
  }

  handleChange = (event) => {
    const searchQuery = event.target.value;
    this.setState(() => ({ query: searchQuery }))
  }

  render() {
    const filterCallback = (country) => {
      return country.name.common.toLowerCase().includes(this.state.query.toLowerCase())
    }
    const filteredCountries = this.state.countries.filter(filterCallback)
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search country"
          onChange={this.handleChange}
        />
        {filteredCountries.map((country, index) => {
          return (
            <h1 key={country.cca3}>
              {index + 1}: {country.name.common} ({country.cca3})
            </h1>
          );
        })}
      </div>
    );
  }
}

export default App;
