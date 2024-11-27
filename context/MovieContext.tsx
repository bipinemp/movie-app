"use client";

import { StaticImageData } from "next/image";
import React, { createContext, useContext, useState } from "react";

type ContextType = {
  selectedMovie: Movie | null;
  setSelectedMovie: React.Dispatch<React.SetStateAction<Movie | null>>;
  imgUrl: string | StaticImageData;
  setImgUrl: React.Dispatch<React.SetStateAction<string | StaticImageData>>;
};

const MovieContext = createContext<ContextType | undefined>(undefined);

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [imgUrl, setImgUrl] = useState<string | StaticImageData>("");

  return (
    <MovieContext.Provider
      value={{ imgUrl, setImgUrl, selectedMovie, setSelectedMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = (): ContextType => {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error("useMovieContext must be within an MovieProvider");
  }

  return context;
};
