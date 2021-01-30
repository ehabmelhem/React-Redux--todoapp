import { useState } from "react";
import "./App.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
function App() {
  const [input, setInput] = useState("");
  const [todo, setTodos] = useState([]);
  const [todo, setTodos] = useState;

  const clickhandler = (e) => {
    e.preventDefault();
    setTodos([...todo, { text: input }]);
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
      </div>
    </div>
  );
}

export default App;
