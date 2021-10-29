import { server } from "../../apis/server";
import { SET_MOVIES, SET_MOVIE_BY_ID } from "../actionType";

export function setMovie(payload) {
  return {
    type: SET_MOVIES,
    payload,
  };
}

export function fetchMovie() {
  return (dispatch, getState) => {
    fetch(`${server}/movie`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setMovie(data));
      })
      .catch((err) => {
        console.log(err, "error from action fetchMovie");
      });
  };
}

export function deleteMovie(id) {
  return (dispatch, getState) => {
    fetch(`${server}/movie/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        const newMovies = getState().movieReducer.movies.filter((movie) => movie.id != id);
        dispatch(setMovie(newMovies));
      })
      .catch((err) => {
        console.log(err, "error from action deleteMovie");
      });
  };
}
