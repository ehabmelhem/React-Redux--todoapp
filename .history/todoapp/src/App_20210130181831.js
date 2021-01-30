import "./App.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
function App() {
  const clickhandler=
  return (
    <div className="app">
      <div className="container">
        <form className="flex">
          <input placeholder="todoapp..." type="text" />
          <IconButton type="submit" className="addbtn">
            <AddIcon />
          </IconButton>
        </form>
      </div>
    </div>
  );
}

export default App;
