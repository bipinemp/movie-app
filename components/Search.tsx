"use client";

import { searchMovie } from "@/apis/apicalls";
import { image, searchUrl } from "@/constants/links";
import { useMovieContext } from "@/context/MovieContext";
import { useDebounce } from "@/hooks/useDebounce";
import { Search as SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import FallBack from "@/public/no-poster.png";
import Image from "next/image";

const Search = () => {
  const { setSelectedMovie, setImgUrl } = useMovieContext();
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [listOpen, setListOpen] = useState(false);

  const debouncedSearch = useDebounce(search, 200);

  function handleMovieClick(movie: Movie) {
    const movieImgUrl = movie.backdrop_path
      ? image + movie.backdrop_path
      : FallBack;

    setSelectedMovie(movie);
    setImgUrl(movieImgUrl);
    setSearch("");
  }

  useEffect(() => {
    const getData = async () => {
      const data = await searchMovie(searchUrl, debouncedSearch);
      setMovies(data.results.slice(0, 10));
      setListOpen(true);
    };

    getData();
  }, [debouncedSearch]);

  return (
    <div className="absolute w-fit mx-auto sm:w-[350px] flex justify-center z-50 top-5 inset-x-0">
      <span className="absolute z-10 left-4 sm:top-[0.95rem] top-[0.75rem]">
        <SearchIcon className="text-primary sm:size-[1.4rem] size-[1.2rem]" />
      </span>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        className="w-full py-2 sm:py-3 pl-10 sm:pl-12 pr-4 rounded-full bg-transparent backdrop-blur-sm border-2 text-primary border-white placeholder:text-secondary sm:placeholder:text-base placeholder:text-sm outline-none"
        placeholder="Search Movie/Show..."
      />

      {(listOpen || search !== "") && (
        <div className="w-full bg-neutral-900 rounded-md absolute top-14 flex flex-col">
          {movies?.map((movie) => {
            let url = "https://image.tmdb.org/3/t/p/original";
            let posterUrl =
              movie.poster_path !== null ? url + movie.poster_path : FallBack;

            return (
              <div
                onClick={() => {
                  handleMovieClick(movie);
                  setListOpen(false);
                }}
                key={movie.id}
                className="flex items-center gap-x-3 cursor-pointer transition hover:bg-neutral-950 py-2 px-4 text-sm text-primary"
              >
                <div className="relative size-[40px]">
                  <Image
                    src={
                      posterUrl === undefined || posterUrl === null
                        ? FallBack
                        : posterUrl
                    }
                    alt="movie_tvshow_poster"
                    fill
                    className="rounded-md transition duration-[200ms] bg-neutral-700"
                  />
                </div>
                <p>
                  {movie.title || movie.original_name || movie.original_title}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
