export function isMovieReleased(releaseDate: string) {
  const releaseDateObj = new Date(releaseDate);
  const currentDate = new Date();

  return releaseDateObj <= currentDate;
}
