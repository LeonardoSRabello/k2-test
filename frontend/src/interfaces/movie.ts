export interface Movie {
  Title: string;
  Actors: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
  imdbID: string;
}

export interface MovieState {
  isLoading: boolean;
  isInitial: boolean;
  movie?: Movie;
  err?: string;
}
