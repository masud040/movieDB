import Modal from "@/app/components/Modal";
import MovieDetails from "@/app/components/MovieDetails";
import { getSingleMovie } from "@/lib/utils";

const MovieModal = async ({ params: { movieId, lang } }) => {
  const movie = await getSingleMovie(movieId);
  console.log("I'm rendering on server");
  return (
    <>
      <Modal>
        <MovieDetails movieData={movie} lang={lang} />
      </Modal>
    </>
  );
};

export default MovieModal;
