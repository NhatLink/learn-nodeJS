const connection = require("../config/database");

const getHomePage = (req, res) => {
  connection.query("SELECT * FROM Users u", function (err, results, fields) {
    console.log("result>>> ", results); // results contains rows returned by server
    // console.log("Fields>>> ", fields); // fields contains extra meta data about results, if available
    res.send(JSON.stringify(results));
  });
};

const getAvatar = (req, res) => {
  // res.send("<h1>Hello World! to abc</h1>");
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getAvatar,
};
