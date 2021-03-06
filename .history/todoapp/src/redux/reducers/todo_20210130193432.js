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

      let newState = { ...state };
      let index = newState.todos.findIndex((task) => task.id === id);
      if (index > -1) {
        newState.todos.splice(index, 1);
      }

      state = { ...newState };

      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
