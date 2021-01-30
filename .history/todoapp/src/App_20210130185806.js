import { useState } from "react";
import "./App.css";
import Result from "./Compents/Result";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/action";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [input, setInput] = useState("");
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const 
  const clickhandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input, id));
    setId(id + 1);
    setInput("");
  };
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/">
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
              <Link to="/result">
                <button className="btn">Go to result</button>
              </Link>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
