const mysql = require("mysql2");
require("dotenv").config();

//test connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT, //default: 3306
  password: process.env.DB_PASSWORD, //default: empty
});

module.exports = connection;
