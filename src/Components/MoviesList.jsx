import React from 'react';

const MoviesList = (props) => {
  const { movies, callback } = props;
  
  return (
    <ul className="movies-list">
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
