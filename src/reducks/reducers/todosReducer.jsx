import { createStore } from "redux";
import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "../constants/todosConstants";

const iniatialState = {
  isLoading: false,
  todos: [],
  error: null,
};

const todosReducer = (state = iniatialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_TODOS_SUCCESS:
      return {
        isLoading: false,
        todos: action.payload,
      };

    case GET_TODOS_FAILED:
      return {
        isLoading: false,
        todos: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todosReducer;
