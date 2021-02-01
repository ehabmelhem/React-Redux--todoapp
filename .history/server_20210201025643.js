const express = require("express");
const app = express();

app.use(express.static("todoapp/build"));

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log("listing on :", port);
});
