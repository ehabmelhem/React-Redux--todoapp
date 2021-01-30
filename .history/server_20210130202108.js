const express = require("express");
const app = express();

app.use(express.static("./todoapp/build"));

const port = proc3002;

app.listen(port, () => {
  console.log("Listen on port :", port);
});
