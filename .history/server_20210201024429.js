const express = require("express");
const app = express();

app.use(express.static("todoapp/build"));

app.get("/get-stam", (req, res) => {
  console.log("hiii");
  res.send({ name: "ehab" });
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log("listing on :", port);
});
