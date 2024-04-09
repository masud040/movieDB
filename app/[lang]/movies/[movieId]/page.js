import MovieDetails from "@/app/components/MovieDetails";
import { getAllMovies, getSingleMovie } from "@/lib/utils";
export async function generateStaticParams() {
  const movies = await getAllMovies();
  return movies.map((movie) => ({
    moiveId: movie.id,
  }));
}
const MovieDetailsPage = async ({ params: { lang, movieId } }) => {
  const movie = await getSingleMovie(movieId);

  return (
    <>
      <MovieDetails movieData={movie} lang={lang} />
    </>
  );
};

export default MovieDetailsPage;
