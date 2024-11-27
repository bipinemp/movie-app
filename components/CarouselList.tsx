import Image from "next/image";
import Fallback from "@/public/no-poster.png";

type Props = {
  movies: Movie[] | [];
  handleMovieClick(movie: Movie): void;
};

const CarouselList = ({ movies, handleMovieClick }: Props) => {
  return (
    <>
      {movies?.map((movie) => {
        let url = "https://image.tmdb.org/3/t/p/original";
        let posterUrl =
          movie.poster_path !== null ? url + movie.poster_path : Fallback;
        return (
          <div
            onClick={() => handleMovieClick(movie)}
            key={movie.id}
            className="w-[150px]"
          >
            <Image
              src={
                posterUrl === undefined || posterUrl === null
                  ? Fallback
                  : posterUrl
              }
              alt="movie_tvshow_poster"
              width={150}
              height={200}
              onLoadingComplete={(image) => {
                image.classList.remove("opacity-0");
              }}
              className="transition-opacity opacity-0 duration-[1s] rounded-lg cursor-pointer min-h-[230px] bg-gray-600"
            />
          </div>
        );
      })}
    </>
  );
};

export default CarouselList;
