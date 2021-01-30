import React from "react";
import "./Result";
import { useSelector } from "react-redux";
function Result() {
  const state = useSelector((state) => state);
  return <div className="result">
      {
          state.todos.todos.map(elm=>(
              <h3>
                  
              </h3>
          ))
      }
  </div>;
}

export default Result;
