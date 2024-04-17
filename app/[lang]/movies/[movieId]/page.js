import MovieDetails from "@/app/components/MovieDetails";
import { getSingleMovie } from "@/lib/utils";
import { notFound } from "next/navigation";
export const MovieDetailsPage = async ({ params: { lang, movieId } }) => {
  const movie = await getSingleMovie(movieId);
  if (movie === undefined) {
    notFound();
  }

  return (
    <>
      <MovieDetails movieData={movie} lang={lang} />
    </>
  );
};

export default MovieDetailsPage;
