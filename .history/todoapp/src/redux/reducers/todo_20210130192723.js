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
      let new__state = [...state.todos];
      for (var i = 0; i < new__state.length; i++) {
        if (new__state[i].id === id) new__state.splice(1, i);
      }
      console.log(new);

      return new__state;
    }
    default:
      return state;
  }
};

export default todoReducer;
