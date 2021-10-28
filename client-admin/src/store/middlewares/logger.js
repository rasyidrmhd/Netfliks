const logger = (store) => (next) => (action) => {
  console.log("dispatching", action); // action taro di sini
  let result = next(action);
  console.log("next state", store.getState()); // statenya nanti berubah, cek di sini
  return result;
};

export default logger;
