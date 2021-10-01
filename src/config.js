const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY;

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=fr-FR&query=`;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
const IMAGE_SIZE = 'w342';

export {
  API_URL,
  API_KEY,
  SEARCH_BASE_URL,
  IMAGE_BASE_URL,
  IMAGE_SIZE
};