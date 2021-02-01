import { useState, useEffect } from "react";
import "./App.css";
import Result from "./Compents/Result";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/action";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  useEffect(() => {
    fetch("/get-stam").then((r) => r.json());
  }, []);
  const [input, setInput] = useState("");
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
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
          <Switch>
            <Route path="/result">
              <Result />
            </Route>
            <Route path="/">
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
                <button
                  disabled={!todos[0]}
                  className={todos[0] ? "btn" : "stam"}
                >
                  Go to result
                </button>
              </Link>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
