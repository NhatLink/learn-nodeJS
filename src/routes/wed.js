const express = require("express");
const {
  getHomePage,
  getAvatar,
  postCreateUser,
} = require("../controllers/homeController");
const router = express.Router();

//route
router.get("/", getHomePage);
router.get("/link", getAvatar);

router.post("/create-user", postCreateUser);

module.exports = router; //export default
