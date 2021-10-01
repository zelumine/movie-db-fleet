import React from 'react';
import '../styles/MoviesList.css';

const MoviesList = (props) => {
  const { movies, callback } = props;
  
  return (
    <ul className="MoviesList__list">
      {movies.map(movie => (
        <li 
          key={movie.id}
          onClick={callback}
          data-id={movie.id}
        >
          {movie.title}
        </li>
      ))}
    </ul>
  )
};

export default MoviesList;
