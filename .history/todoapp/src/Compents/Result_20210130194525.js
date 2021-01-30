import React from "react";
import "./Result.css";
import { useSelector } from "react-redux";
import Todo from "./Todo";
function Result() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div className="result">
      <h1 hidden={!todos[0]}>the result is:</h1>
      <h1 hidden={todos[0]}>there are no results:</h1>
      {todos.map((elm) => (
        <h3>
          <Todo text={elm.content} id={elm.id} />
        </h3>
      ))}
    </div>
  );
}

export default Result;
