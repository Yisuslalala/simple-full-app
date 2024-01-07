const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "admin_sfa",
  password: "admin_sfa",
});

connection.connect();
