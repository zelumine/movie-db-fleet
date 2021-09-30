import React from 'react';

const MoviesList = (props) => {
  const { movies } = props;
  
  return (
    <ul className="movies-list">
      {movies.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
};

export default MoviesList;
