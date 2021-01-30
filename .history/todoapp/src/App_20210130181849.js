import "./App.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
function App() {
  const clickhandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="app">
      <div className="container">
        <form className="flex">
          <input placeholder="todoapp..." type="text" />
          <IconButton onClick={clickhandler} type="submit" className="addbtn">
            <AddIcon />
          </IconButton>
        </form>
      </div>
    </div>
  );
}

export default App;
