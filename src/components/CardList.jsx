import { Component } from 'react';

class CardList extends Component {
  render() {
    const { countries } = this.props;
    return (
      <div>
        {countries.map((country, index) => {
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

export default CardList;
