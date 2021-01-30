const express = require("express");
const app = express();

app.use(express.static("todoapp/build"))

const port = 3002;

app.listen(port, () => {
  console.log("kisten on port :", port);
});
