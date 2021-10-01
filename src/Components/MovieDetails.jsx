import React from 'react';
import { IMAGE_BASE_URL, IMAGE_SIZE } from '../config';

const MovieDetails = (props) => {
  const { 
    title, 
    poster_path, 
    overview, 
    vote_average, 
    release_date 
  } = props.movie;
  
  return (
    <div>
      <img src={`${IMAGE_BASE_URL}${IMAGE_SIZE}${poster_path}`} />
      <h2>{title}</h2>
      <p>Rate: {vote_average} / 10</p>
      <p>{overview}</p>
      <p>Relase date: {release_date}</p>
    </div>
  )
}

export default MovieDetails;
