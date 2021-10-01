import React, { Component } from 'react';

import moviesList from '../movies.json';

// Components
import NavBar from '../Components/NavBar';
import SearchBar from '../Components/SearchBar';
import MoviesList from '../Components/MoviesList';
import MovieDetails from '../Components/MovieDetails';

class HomeWithJson extends Component {
  state = { 
    movies: moviesList.results,
    searchValue: '',
    searchResults: [...moviesList.results],
    showMovieDetails: false,
    selectedMovie: []
  }

  handleSearch = (searchValue) => {
    this.setState({ searchValue: searchValue });
    this.searchMovie(searchValue);
  }

  handleClick = (event) => {
    const selectedMovie = this.state.movies.filter((movie) => {
      return movie.id == event.target.dataset.id;
    });

    this.setState({ 
      showMovieDetails: !this.state.showMovieDetails,
      selectedMovie: [...selectedMovie]
    });
  }

  searchMovie = (searchValue) => {
    const searchRes = this.state.movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchValue);
    });
    searchRes.length > 0 ? 
        this.setState({ searchResults: [...searchRes] }) 
        : this.setState({ searchResults: [] });  // if there is no match, show an empty list
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
        <MoviesList 
          movies={this.state.searchResults}
          callback={this.handleClick}
        />
        {this.state.selectedMovie.length > 0 &&
          <MovieDetails movie={this.state.selectedMovie[0]} />
        }
      </div>
    )
  }
}

export default HomeWithJson;