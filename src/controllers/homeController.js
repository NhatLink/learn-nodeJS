const connection = require("../config/database");

const getHomePage = (req, res) => {
  // connection.query("SELECT * FROM Users u", function (err, results, fields) {
  //   console.log("result>>> ", results); // results contains rows returned by server
  //   // console.log("Fields>>> ", fields); // fields contains extra meta data about results, if available
  //   res.send(JSON.stringify(results));
  // });
  res.render("home.ejs");
};

const getAvatar = (req, res) => {
  // res.send("<h1>Hello World! to abc</h1>");
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  connection.query(
    "INSERT INTO Users (email ,name, city) VALUE (?,?,?)",
    [email, name, city],
    function (err, results) {
      res.send("create a new user success!!!");
      console.log(results);
    }
  );
};

module.exports = {
  getHomePage,
  getAvatar,
  postCreateUser,
};
