import { server } from "../../apis/server";
import { SET_USERS, SET_ISlOADING, SET_ISERROR } from "../actionType";

export function setUser(payload) {
  return {
    type: SET_USERS,
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: SET_ISlOADING,
    payload,
  };
}

export function setError(payload) {
  return {
    type: SET_ISERROR,
    payload,
  };
}

export function fetchUser() {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    const access_token = localStorage.getItem("access_token");
    fetch(`${server}/users`, {
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
        dispatch(setUser(data));
      })
      .catch((err) => {
        dispatch(setError(err));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function deleteUser(id) {
  return (dispatch, getState) => {
    fetch(`${server}/users/${id}`, {
      method: "DELETE",
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
        const newUser = getState().userReducer.users.filter((user) => user.id != id);
        dispatch(setUser(newUser));
      })
      .catch((err) => {
        dispatch(setError(err));
      });
  };
}

export function postUser(data) {
  return async (dispatch, getState) => {
    const result = await fetch(`${server}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return result;
  };
}
