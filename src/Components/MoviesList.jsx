import React from 'react';
import '../styles/MoviesList.css';

const MoviesList = (props) => {
  const { movies, handleClick, handlePrevClick, handleNextClick, page } = props;
  
  return (
    <div className="MoviesList__list">
      <ul>
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
      <div className="MoviesList__list-btns">
        {page > 1 &&
          <button onClick={handlePrevClick} className="MoviesList__btn-prev">
            &lt; Prev
          </button>
        }
        {page < 100 &&
          <button onClick={handleNextClick} className="MoviesList__btn-next">
            Next &gt;
          </button>
        }
      </div>
    </div>
    
  )
};

export default MoviesList;
