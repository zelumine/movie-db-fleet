import React from 'react';
import './../styles/SearchBar.css';

const SearchBar = (props) => {
  const { searchValue, handleSearch } = props;

  return (
    <div className="SearchBar">
      <i className="fa-solid fa-magnifying-glass fa-2x SearchBar__icon"></i>
      <input
        className="SearchBar__input" 
        type="text" 
        placeholder="Search"
        value={searchValue}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  )
};

export default SearchBar;
