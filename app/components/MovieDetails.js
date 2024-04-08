import Image from "next/image";

const MovieDetails = ({ movieData }) => {
  const {
    adult,
    backdrop_path,
    genre_ids,
    id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count,
  } = movieData || {};
  return (
    <section>
      <div>
        <Image
          class="w-full object-cover max-h-[300px] lg:max-h-[500px]"
          src={poster_path}
          width={700}
          height={700}
          alt=""
        />
      </div>

      <div class="grid grid-cols-12 py-12 gap-8">
        <div class="col-span-2">
          <Image src={backdrop_path} alt="" width={200} height={200} />
        </div>
        <div class="col-span-8">
          <h2 class="font-bold text-slate-300 text-2xl">{title}</h2>
          <p class="my-2 text-slate-400 italic">{overview}</p>
          <ul class="text-slate-300 space-y-2 my-8">
            <li>Release Date : 2024-03-27</li>
            <li>Average Vote : 7.5</li>
            <li>Vote Count : 81</li>
            <li>Popularity : 2461.857</li>
          </ul>
        </div>
        <div class="col-span-2 space-y-4">
          <button class="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            Stream In HD
          </button>
          <button class="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            Download In HD
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
