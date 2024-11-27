type Movie = {
  id: number;
  title: string;
  original_title: string;
  original_name: string;
  media_type: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  first_air_date: string;
  adult: boolean;
};

type MovieData = {
  results: Movie[];
};

type FetchDataState = {
  data: MovieData | null;
  loading: boolean;
  error: string;
};

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_KEY: string;
    NEXT_PUBLIC_MOVIE_URL: string;
    NEXT_PUBLIC_IMAGE_URL: string;
  }
}
