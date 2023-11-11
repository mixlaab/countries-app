import { Component } from 'react';
import styled from 'styled-components';

const SearchBoxContainer = styled.input`
  -webkit-appearance: none;
  border: none;
  outline: none;
  padding: 10px;
  width: 150px;
  line-height: 30px;
  margin-bottom: 30px;
`

class SearchBox extends Component {
  render() {
    const { className, placeholder, onChangeHandler } = this.props;
    return (
      <SearchBoxContainer
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
