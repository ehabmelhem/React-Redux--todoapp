import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";
import "./Todo.css";
import { removeTodo } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";
function Todo({ text, id }) {
    
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="todo">
      <h4>{text}</h4>
      <IconButton onClick={deleteHandler} color="secondary">
        <DeleteForeverIcon />
      </IconButton>
    </div>
  );
}

export default Todo;
