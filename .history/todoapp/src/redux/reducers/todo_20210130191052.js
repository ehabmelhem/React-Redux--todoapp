import { ADD_TODO, REMOVE__TODO } from "../ActionTypes";
const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { content, id } = action.payload;
      return {
        ...state,
        todos: [...state.todos, { content, id }],
      };
    }
    case REMOVE__TODO: {
      const { content, id } = action.payload;
      state.todos.filter((elm) => {
        return elm.id !== id;
      });
      return {};
    }
    default:
      return state;
  }
};

export default todoReducer;
