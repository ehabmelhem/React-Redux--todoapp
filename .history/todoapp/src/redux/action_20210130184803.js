import { ADD_TODO } from "./ActionTypes";

export const addTodo = (content, id) => ({
  type: ADD_TODO,
  payload: {
    content,
    id,
  },
});
