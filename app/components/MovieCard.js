import Image from "next/image";
import Link from "next/link";
const MovieCard = () => {
  return (
    <figure class="p-4 border shadow-sm border-black/10 dark:border-white/10 rounded-xl">
      <Image
        class="object-cover w-full"
        src="/movie-1.png"
        width={500}
        height={500}
        alt=""
      />
      <figcaption class="pt-4">
        <h3 class="mb-1 text-xl">Iron Man</h3>
        <p class="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
        <div class="flex items-center mb-5 space-x-1">
          <Image src="/star.svg" width="14" height="14" alt="" />
        </div>
        <Link
          class="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href="./modal.html"
        >
          <Image src="/tag.svg" alt="" width={20} height={20} />
          <span>Details</span>
        </Link>
      </figcaption>
    </figure>
  );
};

export default MovieCard;
