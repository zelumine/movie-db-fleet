import React, { Component } from 'react';

// Components
import NavBar from '../Components/NavBar';
import SearchBar from '../Components/SearchBar';
import MoviesList from '../Components/MoviesList';
import MovieDetails from '../Components/MovieDetails';

// API
import apiHandler from '../API';

class HomeWithApi extends Component {
  state = {
    movies: [],
    searchValue: '',
    searchResults: [],
    selectedMovie: []
  }

  handleSearch = (searchValue) => {
    this.setState({ searchValue: searchValue});
    this.searchMovie(searchValue);
    if (this.state.searchValue === '') this.setState({ searchResults: [...this.state.movies]});
  }

  searchMovie = (searchValue) => {
    let searchRes;
    if (searchValue !== '') {
      searchRes = 
      apiHandler.searchMovie(searchValue)
        .then(result => {
          if (result.results) this.setState({ searchResults: [...result.results] });
        });  
    } else {
      searchRes = apiHandler.getMovies()
      .then(data => {
        this.setState({ 
          searchResults: [...data.results],
          selectedMovie: []
        }); 
      });
    }
    
    searchRes.length > 0 ? 
        this.setState({ searchResults: [...searchRes] }) 
        : this.setState({ searchResults: [] });  // if there is no match, show an empty list
  }

  handleClick = (event) => {
    const selectedMovie = this.state.searchResults.filter((movie) => {
        return movie.id == event.target.dataset.id;
      });
    
    this.setState({ selectedMovie: [...selectedMovie] });
  }

  componentDidMount() {
    apiHandler.getMovies()
      .then(data => {
        this.setState({ 
          movies: [...data.results],    // got a bit of help from a YouTube tutorial as I had trouble extracting the results
          searchResults: [...data.results]
        }); 
      });
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>Welcome to the MovieDB - API version</h1>
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

export default HomeWithApi;
