import { ADD_TODO } from "./ActionTypes";

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    content,
  },
});
