import { getDataFile } from "../[lang]/dictionaries/dictionaries";

const MovieList = async () => {
  const movies = await getDataFile("movies");
  console.log(movies);
  return <div>This is Movie List component</div>;
};

export default MovieList;
