import { server } from "../../apis/server";
import { SET_GENRES, SET_GENRE_BY_ID } from "../actionType";
import { swalLoading, swalError, swalSuccess, Swal } from "../../apis/sweetalert";

export function setGenre(payload) {
  return {
    type: SET_GENRES,
    payload,
  };
}

export function fetchGenre() {
  swalLoading();
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
        Swal.close();
      })
      .catch((err) => {
        Swal.close();
        swalError("", `${err.message}`);
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
  swalLoading();
  return (dispatch, getState) => {
    const access_token = localStorage.getItem("access_token");
    fetch(`${server}/genres/${id}`, {
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
        dispatch(setGenreById(data));
        Swal.close();
      })
      .catch((err) => {
        Swal.close();
        swalError("", `${err.message}`);
      });
  };
}

export function deleteGenre(id) {
  swalLoading();
  return (dispatch, getState) => {
    const access_token = localStorage.getItem("access_token");
    fetch(`${server}/genres/${id}`, {
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
        const newGenres = getState().genreReducer.genres.filter((genre) => genre.id != id);
        dispatch(setGenre(newGenres));
        Swal.close();
      })
      .catch((err) => {
        Swal.close();
        swalError("", `${err.message}`);
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

    console.log(url);
    const access_token = localStorage.getItem("access_token");
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
