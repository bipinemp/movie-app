"use client";

import { image, trendingBanner } from "@/constants/links";
import { useFetchData } from "@/hooks/useFetchData";
import FallBack from "@/public/no-poster.png";
import BannerItem from "./BannerItem";
import { useMovieContext } from "@/context/MovieContext";
import { useEffect } from "react";
import BannerLoader from "./Loaders/BannerLoader";

const Banner = () => {
  const { data, loading, error } = useFetchData(trendingBanner);
  const { selectedMovie, setSelectedMovie, imgUrl, setImgUrl } =
    useMovieContext();

  // Randomly Selecting a Movie for Banner
  useEffect(() => {
    if (
      !error &&
      data &&
      data.results.length > 0 &&
      !selectedMovie &&
      !imgUrl
    ) {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const movie = data.results[randomIndex];
      setSelectedMovie(data.results[randomIndex]);

      const movieImgUrl = movie.backdrop_path
        ? image + movie.backdrop_path
        : FallBack;

      setImgUrl(movieImgUrl);
    }
  }, [data, error, imgUrl, setImgUrl, selectedMovie, setSelectedMovie]);

  if (loading) {
    return <BannerLoader />;
  }

  return (
    <div className="flex flex-col gap-y-2 h-[90vh] bg-black">
      {data && selectedMovie && (
        <BannerItem selectedMovie={selectedMovie} imgUrl={imgUrl} />
      )}
    </div>
  );
};

export default Banner;
