import type { PayloadAction } from "@reduxjs/toolkit";

import type { Movie, MovieState } from "src/interfaces/movie";

import {
  FETCH_MOVIE_START,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
  RESET_MOVIE,
} from "../actions/movie";

const initialState: MovieState = {
  isInitial: true,
  isLoading: false,
};

export const movie = (
  state: MovieState = initialState,
  action: PayloadAction<Movie | string | undefined>
): MovieState => {
  switch (action.type) {
    case FETCH_MOVIE_START:
      return {
        ...state,
        isLoading: true,
        isInitial: false,
        err: "",
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movie: action.payload as Movie,
      };
    case FETCH_MOVIE_FAILURE:
      return {
        ...state,
        isLoading: false,
        movie: undefined,
        err: action.payload as string,
      };
    case RESET_MOVIE:
      return {
        ...state,
        isInitial: true,
        movie: undefined,
        err: "",
      };
    default:
      return {
        ...state,
      };
  }
};
