const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = 3002;

app.listen(port,()=>{
    console.log("kisten on port :")
})