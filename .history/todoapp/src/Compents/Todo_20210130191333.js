import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";
import "./Todo.css";
import {removeTodo} from "../"
import { useSelector, useDispatch } from "react-redux";
function Todo({ text, id }) {
  const dispatch = useDispatch();
  const deleteHandler=()=>{
      dispatch(re)
  }
  return (
    <div className="todo">
      <h4>{text}</h4>
      <IconButton color="secondary">
        <DeleteForeverIcon />
      </IconButton>
    </div>
  );
}

export default Todo;
