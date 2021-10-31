import { server } from "../../apis/server";
import { SET_MOVIES, SET_MOVIE_BY_SLUG } from "../actionType";

export function setMovies(payload) {
  return {
    type: SET_MOVIES,
    payload,
  };
}

export function fetchMovies(params = {}) {
  const { GenreId, category, rating, title } = params;
  let url = `${server}/movies`;

  if (GenreId) {
    url += `?GenreId=${GenreId}`;
  }

  if (category) {
    url += `?category=${category}`;
  }

  if (rating) {
    url += `?rating=${rating}`;
  }

  if (title) {
    url += `?title=${title}`;
  }

  return async (dispatch, getState) => {
    const result = await fetch(url);
    return result;
  };
}

export function setMovieBySlug(payload) {
  return {
    type: SET_MOVIE_BY_SLUG,
    payload,
  };
}

export function fetchMovieBySlug(slug) {
  return async (dispatch, getState) => {
    const result = await fetch(`${server}/movies/${slug}`);
    return result;
    // fetch(`${server}/movies/${slug}`)
    //   .then(async (response) => {
    //     const result = await response.json();
    //     if (response.ok) {
    //       return result;
    //     } else {
    //       return Promise.reject(result);
    //     }
    //   })
    //   .then((data) => {
    //     dispatch(setMovieBySlug(data));
    //   })
    //   .catch((err) => {
    //     console.log(err, "Errorrrrr");
    //   });
  };
}
