const mysql = require("mysql2");

const conection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "fatura",
  password: "Al020116sa+",
  multipleStatements: true,
});

module.exports = conection;
