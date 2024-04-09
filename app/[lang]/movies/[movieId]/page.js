import MovieDetails from "@/app/components/MovieDetails";
import { getSingleMovie } from "@/lib/utils";

const MovieDetailsPage = async ({ params: { lang, movieId } }) => {
  const movie = await getSingleMovie(movieId);

  return (
    <>
      <MovieDetails movieData={movie} lang={lang} />
    </>
  );
};

export default MovieDetailsPage;
