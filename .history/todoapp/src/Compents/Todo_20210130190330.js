import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";

function Todo({ text }) {
  return <div className="todo">{text}</div>;
}

export default Todo;
