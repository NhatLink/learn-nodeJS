const getHomePage = (req, res) => {
  res.send("Hello World nhat linh!");
};
const getAvatar = (req, res) => {
  // res.send("<h1>Hello World! to abc</h1>");
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getAvatar,
};
