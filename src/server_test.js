require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const wedRoute = require("./routes/wed");
const connection = require("./config/database");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//route
app.use("/test", wedRoute);

// simple query
connection.query("SELECT * FROM Users u", function (err, results, fields) {
  console.log("result>>> ", results); // results contains rows returned by server
  // console.log("Fields>>> ", fields); // fields contains extra meta data about results, if available
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
