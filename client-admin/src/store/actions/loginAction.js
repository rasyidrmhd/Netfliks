import { server } from "../../apis/server";
import { SET_ISlOADING, SET_ISERROR } from "../actionType";

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
