import { server } from "../../apis/server";
import { SET_ISlOADING, SET_ISERROR, SET_USERDATA } from "../actionType";

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

export function setUserdata(payload) {
  return {
    type: SET_USERDATA,
    payload,
  };
}

export function login(data) {
  return async (dispatch, getState) => {
    const result = await fetch(`${server}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return result;
  };
}

export function fetchUserdata() {
  return (dispatch, getState) => {
    const access_token = localStorage.getItem("accss_token");
    fetch(`${server}/users/userdata`, {
      headers: {
        access_token,
      },
    })
      .then(async (response) => {
        const result = response.json();
        if (response.ok) {
          return result;
        } else {
          return Promise.reject(result);
        }
      })
      .then((data) => {
        dispatch(setUserdata(data));
      })
      .catch((err) => {
        dispatch(setError(err));
      });
  };
}
