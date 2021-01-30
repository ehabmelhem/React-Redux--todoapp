import React from "react";
import "./Result";
import { useSelector } from "react-redux";
function Result() {
  const state = useSelector((state) => state);
  return (
    <div className="result">
      <h1>this is result</h1>
      {state.todos.todos.map((elm) => (
        <h3>{elm.content}</h3>
      ))}
    </div>
  );
}

export default Result;
