import { ADD_TODO } from "../ActionTypes";
const initialState = {
  todos: [],
};

const todoReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:{
            const {content} =action.payload
            return{
                ...state,
                
            }
        }
    }
}