import MovieDetails from "@/app/components/MovieDetails";
import { getSingleMovie } from "@/lib/getSingleMovie";
const MovieDetailsPage = async ({ params: { movieId } }) => {
  const movie = await getSingleMovie(movieId);

  return (
    <>
      <MovieDetails movieData={movie} />
    </>
  );
};

export default MovieDetailsPage;
