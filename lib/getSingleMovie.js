import { getDataFile } from "./getDataFile";

export async function getSingleMovie(movieId) {
  const response = await getDataFile("movies");
  const movies = response?.results;
  const movie = movies?.find((movie) => movie.id === parseInt(movieId));
  return movie;
}
