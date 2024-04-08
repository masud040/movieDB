import { getAllMovies, getSingleMovie } from "@/lib/utils";
import { NextResponse } from "next/server";
export async function GET(request, { params: { id } }) {
  const movie = await getSingleMovie(id);
  if (movie) {
    return NextResponse.json(movie);
  }
  return NextResponse.json({ message: "Movie not found" });
}

export async function DELETE(request, { params: { id } }) {
  const allMovie = await getAllMovies();
  const movieIndex = allMovie.findIndex((movie) => movie.id === parseInt(id));
  if (movieIndex === -1) {
    return NextResponse.json({ message: "This movie is already deleted." });
  }
  const movieToDelete = allMovie[movieIndex];
  allMovie.splice(movieIndex, 1);
  return NextResponse.json(movieToDelete);
}
