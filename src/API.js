import {
  SEARCH_BASE_URL,
  LATEST_BASE_URL
} from './config';

const apiHandler = {
  getMovies() {
    return fetch(`${LATEST_BASE_URL}`)
            .then(data => data.json()); // got a bit of help from a YouTube tutorial as I had trouble extracting the results
  },

  searchMovie(searchValue) {
    return fetch(`${SEARCH_BASE_URL}${searchValue}`)
            .then(result => result.json());
  }
}

export default apiHandler;
