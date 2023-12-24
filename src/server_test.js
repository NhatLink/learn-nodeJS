require("dotenv").config();
const path = require("path");
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const wedRoute = require("./routes/wed");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);
//route
app.use("/test", wedRoute);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
