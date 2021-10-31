import { server } from "../../apis/server";
import { SET_MOVIES, SET_MOVIE_BY_ID } from "../actionType";
import { swalLoading, swalError, swalSuccess, Swal } from "../../apis/sweetalert";

export function setMovie(payload) {
  return {
    type: SET_MOVIES,
    payload,
  };
}

export function fetchMovie() {
  swalLoading();
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
        Swal.close();
      })
      .catch((err) => {
        Swal.close();
        swalError("", `${err.message}`);
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
  swalLoading();
  return (dispatch, getState) => {
    const access_token = localStorage.getItem("access_token");
    fetch(`${server}/movies/${slug}`, {
      headers: {
        access_token,
      },
    })
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
        Swal.close();
      })
      .catch((err) => {
        Swal.close();
        swalError("", `${err.message}`);
      });
  };
}

export function deleteMovie(id) {
  swalLoading();
  return (dispatch, getState) => {
    const access_token = localStorage.getItem("access_token");
    fetch(`${server}/movies/${id}`, {
      method: "DELETE",
      headers: {
        access_token,
      },
    })
      .then(async (response) => {
        const result = await response.json();
        if (response.ok) {
          return result;
        } else {
          return Promise.reject(result);
        }
      })
      .then((data) => {
        const newMovies = getState().movieReducer.movies.filter((movie) => movie.id != id);
        dispatch(setMovie(newMovies));
        Swal.close();
      })
      .catch((err) => {
        swalError("", `${err.message}`);
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
