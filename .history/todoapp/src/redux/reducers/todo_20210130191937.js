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
      const { id } = action.payload;
      console.log(state.todos);
      state.todos.de
      console.log(state.todos);

      return {
        ...state,
        todos: [...state.todos],
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
