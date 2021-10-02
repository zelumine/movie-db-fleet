import {
  SEARCH_BASE_URL,
  LATEST_BASE_URL
} from './config';

const apiHandler = {
  // got a bit of help from a YouTube tutorial for line 10  and 15 as I had trouble extracting the results
  getMovies() {
    return fetch(`${LATEST_BASE_URL}`)
            .then(data => data.json()); // first get the results and turn it into JSON, then we can extract the results when we call it in MoviesList
  },

  searchMovie(searchValue) {
    return fetch(`${SEARCH_BASE_URL}${searchValue}`)
            .then(result => result.json());
  }
}

export default apiHandler;
