import { COUNTER_INCREMENT } from "./actionType";

export function incrementCounter(payload) {
  return {
    type: COUNTER_INCREMENT,
    payload,
  };
}
