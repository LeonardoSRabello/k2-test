import { AxiosResponse, AxiosError } from "axios";
import { getAxiosInstance } from "src/modules/axios";
import type { AppDispatch } from "..";
import type { Movie } from "src/interfaces/movie";

export const FETCH_MOVIE_START = "FETCH_MOVIE_START";
export const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS";
export const FETCH_MOVIE_FAILURE = "FETCH_MOVIE_FAILURE";
export const RESET_MOVIE = "RESET_MOVIE";

export const getMovie = (search: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({ type: FETCH_MOVIE_START });
    getAxiosInstance({ headers: { "Content-Type": "application/json" } })
      .get("/movie", { params: { search } })
      .then((res: AxiosResponse<Movie>) => {
        dispatch({ type: FETCH_MOVIE_SUCCESS, payload: res.data });
      })
      .catch((err: AxiosError) => {
        dispatch({
          type:
            err.response?.status === 404
              ? FETCH_MOVIE_SUCCESS
              : FETCH_MOVIE_FAILURE,
          payload:
            err.response?.status === 404 ? undefined : "Internal Server Error",
        });
      });
  };
};

export const resetMovie = () => {
  return (dispatch: AppDispatch) => {
    dispatch({ type: RESET_MOVIE });
  };
};
