"use client";

import { image, upcoming } from "@/constants/links";
import { useMovieContext } from "@/context/MovieContext";
import { useFetchData } from "@/hooks/useFetchData";
import Fallback from "@/public/no-poster.png";
import CarouselList from "./CarouselList";
import CarouselLoader from "./Loaders/CarouselLoader";

const MovieCarousel = () => {
  const { data, loading } = useFetchData(upcoming);
  const { setSelectedMovie, setImgUrl } = useMovieContext();

  function handleMovieClick(movie: Movie) {
    const movieImgUrl = movie.backdrop_path
      ? image + movie.backdrop_path
      : Fallback;

    setSelectedMovie(movie);
    setImgUrl(movieImgUrl);
  }

  if (loading) {
    return <CarouselLoader />;
  }

  return (
    <div className="relative w-full flex flex-col gap-y-3 mt-5 mb-20">
      <h2 className="sm:text-[1.5rem] text-[1.3rem] text-secondary">
        Upcoming Movies
      </h2>

      <div className="w-full flex relative overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="flex animate-slide-left-infinite hover:animation-pause gap-x-5 w-max">
          {/* Original List */}
          <CarouselList
            movies={data?.results || []}
            handleMovieClick={handleMovieClick}
          />

          {/* Duplicated List For Infinite Scrolling behavior*/}
          <CarouselList
            movies={data?.results || []}
            handleMovieClick={handleMovieClick}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;
