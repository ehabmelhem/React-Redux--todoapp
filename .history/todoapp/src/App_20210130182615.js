import { useState } from "react";
import "./App.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
function App() {
  const clickhandler = (e) => {
    e.preventDefault();
    console.log("click the button");
  };
  const [input, setInput] = useState("");
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
          <IconButton dis onClick={clickhandler} type="submit" className="addbtn">
            <AddIcon />
          </IconButton>
        </form>
        <button className="btn">Go to result</button>
      </div>
    </div>
  );
}

export default App;