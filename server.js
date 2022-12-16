const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/HomePage", (req, res) => {
  res.sendFile(__dirname + "/HomePage.html");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5050, () => {
  console.log("Server listening on port 5050");
});
