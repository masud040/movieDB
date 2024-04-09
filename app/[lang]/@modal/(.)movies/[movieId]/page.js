import Modal from "@/app/components/Modal";
import MovieDetails from "@/app/components/MovieDetails";
import { getAllMovies, getSingleMovie } from "@/lib/utils";

export async function generateStaticParams() {
  const movies = await getAllMovies();
  return movies.map((movie) => ({
    moiveId: movie.id,
  }));
}
const MovieModal = async ({ params: { movieId, lang } }) => {
  const movie = await getSingleMovie(movieId);
  return (
    <>
      <Modal>
        <MovieDetails movieData={movie} lang={lang} />
      </Modal>
    </>
  );
};

export default MovieModal;
