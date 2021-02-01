const express = require("express");
const app = express();

// app.use(express.static("todoapp/build"));

app.get("/getstam", (req, res) => {
  res.send({ OK: true });
});

app.get("/", (req, res) => {
  console.log("Hello");
  res.send({ OK: true });
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("listing on :", port);
});
