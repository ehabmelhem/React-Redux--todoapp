import React from "react";
import "./Result";
import { useSelector } from "react-redux";
function Result() {
  const todos = useSelector((state) => state.todos.todos);
  console.log(state);
  return (
    <div className="result">
      <h1>this is result</h1>
      {todos.map((elm) => (
        <h3>{elm.content}</h3>
      ))}
    </div>
  );
}

export default Result;
