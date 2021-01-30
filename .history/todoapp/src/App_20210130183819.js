import { useState } from "react";
import "./App.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/action";
function App() {
  const [input, setInput] = useState("");
  const [todo, setTodos] = useState([]);
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const clickhandler = (e) => {
    e.preventDefault();
    setTodos([...todo, { text: input, id: id }]);
    setId(id + 1);
    setInput("");
  };
  return (
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
        {todo.map((elm) => (
          <h3>{elm.text}</h3>
        ))}
      </div>
    </div>
  );
}

export default App;
