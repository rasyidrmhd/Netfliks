import { server } from "../apis/server";
import { SET_IS_LOGGED_IN, SET_USERS, SET_GENRES, SET_GENRE_BY_ID, SET_MOVIES, SET_MOVIE_BY_ID } from "./actionType";

export function setUser(payload) {
  return {
    type: SET_USERS,
    payload,
  };
}

export function fetchUser() {
  return (dispatch, getState) => {
    fetch(`${server}/user`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setUser(data));
      })
      .catch((err) => {
        console.log(err, "from actions fetchUser");
      });
  };
}

export function deleteUser(id) {
  return (dispatch, getState) => {
    fetch(`${server}/user/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(fetchUser());
        console.log("success delete user");
      })
      .catch((err) => {
        console.log(err, "from action deleteUser");
      });
  };
}

export function setGenre(payload) {
  return {
    type: SET_GENRES,
    payload,
  };
}

export function fetchGenre() {
  return (dispatch, getState) => {
    fetch(`${server}/genre`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(setGenre(data));
      })
      .catch((err) => {
        console.log(err, "from action fetchGenre");
      });
  };
}

export function setGenreById(payload) {
  return {
    type: SET_GENRE_BY_ID,
    payload,
  };
}

export function fetchGenreById(id) {
  return (dispatch, getState) => {
    fetch(`${server}/genre/${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setGenreById(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function deleteGenre(id) {
  return (dispatch, getState) => {
    fetch(`${server}/genre/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        const newGenres = getState().genres.filter((genre) => genre.id != id);
        dispatch(setGenre(newGenres));
      })
      .catch((err) => {
        console.log(err, "error from action deleteGenre");
      });
  };
}

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
        const newMovies = getState().movies.filter((movie) => movie.id != id);
        dispatch(setMovie(newMovies));
      })
      .catch((err) => {
        console.log(err, "error from action deleteMovie");
      });
  };
}
