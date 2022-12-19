const express = require("express");
const app = express();
const port = 5050;

app.use(express.static("public"));

app.get("/HomePage", (req, res) => {
  res.sendFile(__dirname + "/HomePage.html");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
