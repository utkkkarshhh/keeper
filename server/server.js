const express = require("express");
const bodyParser = require("body-parser");
const port = 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("Server is working just fine");
});

app.listen(port, (req, res) => {
  console.log(`Server is live on port : ${port}`);
});
