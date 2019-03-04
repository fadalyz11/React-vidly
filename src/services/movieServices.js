import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndpoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndpoint);
}
export function getMovie(movieId) {
  return http.get(apiEndpoint + "/" + movieId);
}
export function saveMovie(movie) {
  if (movie._id) {
    http.put(apiEndpoint + "/" + movie._id, movie);
  }
}

export function deleteMovie(movieId) {
  http.delete(apiEndpoint + "/" + movieId);
}
