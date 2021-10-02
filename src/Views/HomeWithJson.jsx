import React, { Component } from 'react';

import moviesList from '../movies.json';

// Components
import NavBar from '../Components/NavBar';
import SearchBar from '../Components/SearchBar';
import MoviesList from '../Components/MoviesList';
import MovieDetails from '../Components/MovieDetails';

import '../styles/Home.css';

class HomeWithJson extends Component {
  state = { 
    movies: moviesList.results,
    searchValue: '',
    searchResults: [...moviesList.results],
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
        <h1>Welcome to the MovieDB - JSON version</h1>
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
        {this.state.selectedMovie.length === 0 &&
          <h2 className="Home__bigtext">Click on a movie to see its details!</h2>
        }
      </div>
    )
  }
}

export default HomeWithJson;