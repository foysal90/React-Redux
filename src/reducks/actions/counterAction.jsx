import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstant";

export const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
export const RESETCounter = () => {
  return {
    type: RESET,
  };
};
