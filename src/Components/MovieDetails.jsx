import React from 'react';
import { IMAGE_BASE_URL, IMAGE_SIZE } from '../config';
import '../styles/MovieDetails.css';

const MovieDetails = (props) => {
  const { 
    title, 
    poster_path, 
    overview, 
    vote_average, 
    release_date 
  } = props.movie;
  
  return (
    <div className="MovieDetails">
      <div className="MovieDetails__img-title-block">
        <img src={`${IMAGE_BASE_URL}${IMAGE_SIZE}${poster_path}`} />
        <div className="MovieDetails__title-rate-block">
          <h2>{title}</h2>
          <p><b>Rate:</b> {vote_average} / 10</p>
        </div>
      </div>
      <p className="MovieDetails__overview-block">{overview}</p>
      <p className="MovieDetails__date-block"><b>Relase date:</b> {release_date}</p>
    </div>
  )
}

export default MovieDetails;
