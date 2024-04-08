import { getDataFile } from "@/lib/getDataFile";
import { getDictionary } from "../[lang]/dictionaries/dictionaries";
import MovieCard from "./MovieCard";

const MovieList = async ({ lang }) => {
  const movies = await getDataFile("movies");
  const dict = await getDictionary(lang);

  return (
    <div className="content">
      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies &&
          movies?.results?.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              detailsLocale={dict.details}
            />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
