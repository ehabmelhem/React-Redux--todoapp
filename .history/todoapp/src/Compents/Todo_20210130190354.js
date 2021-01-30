import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";

function Todo({ text }) {
  return (
    <div className="todo">
      <h4>{text}</h4>
      <IconButton>
          
      </IconButton>
    </div>
  );
}

export default Todo;
