import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: []
    }
  }

  componentDidMount() {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((countries) =>
        this.setState(
          () => ({ countries: countries }),
          () => console.log(countries)
        )
      )
  }

  render() {
    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='Search countries'
          onChange={(event) => {
            const searchString = event.target.value.toLowerCase()
            const filteredCountries = this.state.countries.filter((country) => {
              return country.name.common.toLowerCase().includes(searchString)
            })
            this.setState(
              () => ({ countries: filteredCountries }),
              () => console.log(this.state.countries)
            )
          }}
        />
        {this.state.countries.map((country, index) => {
          return <h1 key={country.cca3}>{index + 1}: {country.name.common} ({country.cca3})</h1>
        })}
      </div>
    );
  }
}

export default App;
