import { server } from "../../apis/server";
import { SET_GENRES, SET_GENRE_BY_ID } from "../actionType";

export function setGenre(payload) {
  return {
    type: SET_GENRES,
    payload,
  };
}

export function fetchGenre() {
  return (dispatch, getState) => {
    fetch(`${server}/genres`)
      .then(async (response) => {
        const result = await response.json();
        if (response.ok) {
          return result;
        } else {
          return Promise.reject(result);
        }
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
    fetch(`${server}/genres/${id}`)
      .then(async (response) => {
        const result = await response.json();
        if (response.ok) {
          return result;
        } else {
          return Promise.reject(result);
        }
      })
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
    fetch(`${server}/genres/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        const newGenres = getState().genreReducer.genres.filter((genre) => genre.id != id);
        dispatch(setGenre(newGenres));
      })
      .catch((err) => {
        console.log(err, "error from action deleteGenre");
      });
  };
}

export function postPutGenre(method, id = 0, data) {
  return async (dispatch, getState) => {
    let url;
    if (method === "PUT") {
      url = `${server}/genres/${id}`;
    } else {
      url = `${server}/genres`;
    }

    const result = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return result;
  };
}
