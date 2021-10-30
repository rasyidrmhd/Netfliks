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
    fetch(`${server}/movies`)
      .then(async (response) => {
        const result = await response.json();
        if (response.ok) {
          return result;
        } else {
          return Promise.reject(result);
        }
      })
      .then((data) => {
        dispatch(setMovie(data));
      })
      .catch((err) => {
        console.log(err, "error from action fetchMovie");
      });
  };
}

export function setMovieBySlug(payload) {
  return {
    type: SET_MOVIE_BY_ID,
    payload,
  };
}

export function fetchMovieBySlug(slug) {
  return (dispatch, getState) => {
    fetch(`${server}/movies/${slug}`)
      .then(async (response) => {
        const result = await response.json();
        if (response.ok) {
          return result;
        } else {
          return Promise.reject(result);
        }
      })
      .then((data) => {
        dispatch(setMovieBySlug(data));
      })
      .catch((err) => {
        console.log(err, "Errorrrrr");
      });
  };
}

export function deleteMovie(id) {
  return (dispatch, getState) => {
    fetch(`${server}/movies/${id}`, {
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

export function postPutMovie(method, id = 0, data) {
  return async (dispatch, getState) => {
    const access_token = localStorage.getItem("access_token");
    let url;
    if (method === "PUT") {
      url = `${server}/movies/${id}`;
    } else {
      url = `${server}/movies`;
    }

    const result = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        access_token,
      },
      body: JSON.stringify(data),
    });

    return result;
  };
}
