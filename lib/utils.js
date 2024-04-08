import { getDataFile } from "./getDataFile";

export async function getAllMovies() {
  const response = await getDataFile("movies");
  return response?.results;
}
export async function getSingleMovie(movieId) {
  const response = await getDataFile("movies");
  const movies = response?.results;
  return movies?.find((movie) => movie.id === parseInt(movieId));
}
