const mysql = require("mysql2");

const conection = mysql.createConnection({
  host: "host",
  user: "user",
  database: "database",
  password: "***",
  multipleStatements: true,
});

module.exports = conection;
