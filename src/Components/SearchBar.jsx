import React from 'react';

const SearchBar = (props) => {
  const { searchValue, handleSearch } = props;

  return (
    <div>
      <i class="fa-solid fa-magnifying-glass"></i>
      <input
        className="search-bar" 
        type="text" 
        placeholder="Search"
        value={searchValue}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  )
};

export default SearchBar;
