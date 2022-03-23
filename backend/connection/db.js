// IMPORTED MODULES
const mysql = require("mysql2");
require("dotenv").config();

// INITIALIZE DB CONNECTION
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// EXPORTD MODULES
module.exports = connection;
