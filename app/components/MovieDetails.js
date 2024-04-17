import Image from "next/image";
import { getDictionary } from "../[lang]/dictionaries/dictionaries";

const MovieDetails = async ({ movieData, lang }) => {
  const dict = await getDictionary(lang);
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
          className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
          src={poster_path}
          width={700}
          height={700}
          alt=""
        />
      </div>

      <div className="grid grid-cols-12 gap-8 py-12">
        <div className="col-span-2">
          <Image src={backdrop_path} alt="" width={200} height={200} />
        </div>
        <div className="col-span-8">
          <h2 className="text-2xl font-bold text-slate-300">{title}</h2>
          <p className="my-2 italic text-slate-400">{overview}</p>
          <ul className="my-8 space-y-2 text-slate-300">
            <li>
              {dict.release_date} : {release_date}
            </li>
            <li>
              {dict.average_vote} : {vote_average}
            </li>
            <li>
              {dict.vote_count} : {vote_count}
            </li>
            <li>
              {dict.popularity} : {popularity}
            </li>
          </ul>
        </div>
        <div className="col-span-2 space-y-4">
          <button className="w-full py-2 font-medium rounded-md bg-primary text-slate-800">
            {dict.stream_hd}
          </button>
          <button className="w-full py-2 font-medium rounded-md bg-primary text-slate-800">
            {dict.download_hd}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
