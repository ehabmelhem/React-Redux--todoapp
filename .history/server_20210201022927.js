const express = require("express");
const app = express();

app.use(express.static("todoapp/build"));

app.get("/",(req,res)=>{console.log("1")

})
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("listing on :", port);
});
