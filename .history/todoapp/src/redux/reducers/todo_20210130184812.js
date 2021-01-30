import { ADD_TODO } from "../ActionTypes";
const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { content,id } = action.payload;
      return {
        ...state,
        todos: [...state.todos, { content }],
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
