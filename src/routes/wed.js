const express = require("express");
const { getHomePage, getAvatar } = require("../controllers/homeController");
const router = express.Router();

//route
router.get("/", getHomePage);
router.get("/link", getAvatar);

module.exports = router; //export default
