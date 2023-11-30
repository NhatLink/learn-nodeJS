const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/link", (req, res) => {
  // res.send("<h1>Hello World! to abc</h1>");
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
