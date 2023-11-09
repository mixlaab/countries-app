import './App.css';
import { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((countries) => this.setState(() => ({ countries: countries })))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase()
    this.setState(() => ({ searchField }))
  }

  render() {
    const { countries, searchField } = this.state
    const { onSearchChange } = this
    const filteredCountries = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(searchField)
    })
    return (
      <div className="App">
        <SearchBox
          className='search-box'
          placeholder='Search countries'
          onChangeHandler={onSearchChange}
        />
        <CardList countries={filteredCountries}/>
      </div>
    );
  }
}

export default App;
