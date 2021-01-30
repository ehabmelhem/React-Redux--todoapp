import { useState } from "react";
import "./App.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/action";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [input, setInput] = useState("");
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const clickhandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input, id));
    setId(id + 1);
    setInput("");
  };
  return (
    <Router>

    <div className="app">
      <div className="container">
        <form className="flex">
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            autoFocus
            placeholder="todoapp..."
            type="text"
          />
          <IconButton
            disabled={!input}
            onClick={clickhandler}
            type="submit"
            className={input ? "addbtn" : "st"}
          >
            <AddIcon />
          </IconButton>
        </form>
        <button className="btn">Go to result</button>
      </div>
    </div>
  );
}

export default App;
