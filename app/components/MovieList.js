import { getDataFile } from "../[lang]/dictionaries/dictionaries";
import MovieCard from "./MovieCard";

const MovieList = async () => {
  const movies = await getDataFile("movies");

  return (
    <div className="content">
      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies &&
          movies?.results?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
