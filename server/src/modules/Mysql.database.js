const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "admin_sfa",
  password: "admin_sfa",
  database: "simple_full_app",
});

module.exports = db;
