import MovieList from "../components/MovieList";

export default function Home({ params: { lang } }) {
  return (
    <>
      <MovieList lang={lang} />
    </>
  );
}
