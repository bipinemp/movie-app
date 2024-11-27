import { formatDate } from "@/utils/formatDate";
import { isMovieReleased } from "@/utils/isMovieReleased";
import Image, { StaticImageData } from "next/image";

type Props = {
  selectedMovie: Movie;
  imgUrl: string | StaticImageData;
};

const BannerItem = ({ selectedMovie, imgUrl }: Props) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={imgUrl}
        fill
        priority
        key={`${imgUrl}`}
        onLoadingComplete={(image) => {
          image.classList.remove("opacity-0");
          image.classList.add("opacity-60");
        }}
        className="rounded-md object-cover transition-opacity opacity-0 duration-[1s]"
        alt={selectedMovie?.original_title || "movie_poster"}
      />

      <div className="absolute bottom-32 left-5 flex flex-col gap-y-2">
        <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[4.5rem] text-primary line-clamp-1">
          {selectedMovie?.original_title || selectedMovie?.original_name}
        </h1>
        <p className="w-full sm:pr-0 pr-2 sm:w-[400px] md:w-[550px] font-semibold text-[0.9rem] md:text-[1.3rem] text-secondary line-clamp-3 pl-2">
          {selectedMovie?.overview}
        </p>

        <div className="flex vsm:flex-row flex-col vsm:items-center gap-3 mt-4">
          {selectedMovie.vote_average && (
            <p className="flex items-center gap-x-2 py-2 px-4 rounded-full font-bold text-sm sm:text-[1.1rem] bg-yellow-400 w-fit text-black">
              <span className="font-extrabold">IMDB:</span>{" "}
              {selectedMovie?.vote_average.toFixed(1)}
            </p>
          )}

          {isMovieReleased(
            selectedMovie.release_date || selectedMovie.first_air_date || ""
          ) ? (
            <p className="py-2 px-4 rounded-full font-bold text-sm sm:text-[1.1rem] bg-primary text-black w-fit">
              <span className="font-extrabold">Released On: </span>
              {formatDate(
                selectedMovie.release_date || selectedMovie.first_air_date || ""
              )}
            </p>
          ) : (
            (selectedMovie.release_date || selectedMovie.first_air_date) && (
              <p className="py-2 px-4 rounded-full font-bold text-sm sm:text-[1.1rem] bg-primary text-black w-fit">
                <span className="font-extrabold">Release:</span>{" "}
                {formatDate(
                  selectedMovie.release_date ||
                    selectedMovie.first_air_date ||
                    ""
                )}
              </p>
            )
          )}

          {selectedMovie.adult && (
            <p className="py-2 px-4 rounded-full font-bold text-[1.1rem] bg-black w-fit text-primary">
              18+
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
