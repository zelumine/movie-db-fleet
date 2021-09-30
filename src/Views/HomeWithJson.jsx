import React, { Component } from 'react';

import moviesList from '../movies.json';

// Components
import NavBar from '../Components/NavBar';
import SearchBar from '../Components/SearchBar';
import MoviesList from '../Components/MoviesList';

class HomeWithJson extends Component {
  state = { 
    movies: moviesList.results,
    searchValue: '',
    searchResults: [...moviesList.results],
  }

  handleSearch = (searchValue) => {
    this.setState({ searchValue: searchValue });
    this.searchMovie(searchValue);
  }

  searchMovie = (searchValue) => {
    const searchRes = this.state.movies.filter((movie) => {
      movie.title.includes(searchValue);
    });
    this.setState({searchResults: [...searchRes]});
    console.log("result:", searchRes);
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>Coucou depuis la home avec json</h1>
        <SearchBar 
          searchValue={this.state.searchValue}
          handleSearch={this.handleSearch}
        />
        <p>{this.state.searchValue}</p>
        <MoviesList movies={this.state.searchResults} />
      </div>
    )
  }
}

export default HomeWithJson;