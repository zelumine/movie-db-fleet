import React from 'react';
import '../styles/MoviesList.css';

const MoviesList = (props) => {
  const { movies, handleClick, handleLoadMore } = props;
  
  return (
    <ul className="MoviesList__list">
      {movies.map(movie => (
        <li 
          key={movie.id}
          onClick={handleClick}
          data-id={movie.id}
        >
          {movie.title}
        </li>
      ))}
    </ul>
  )
};

export default MoviesList;
