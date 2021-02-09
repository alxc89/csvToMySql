const fs = require("fs");
const csv = require("fast-csv");
const conn = require("./conection-db");

const stream = fs.createReadStream("Fatura.csv");
stream
  .pipe(csv.parse({ headers: true }))
  .on("error", (error) => console.error(error))
  .on("data", (data) => insert(data));

function insert(dados) {
  let data = [dados.data, dados.lancamento, dados.valor];

  let sql =
    "INSERT INTO lancamentos (data, lancamento, valor) VALUES(?, ?, ?);";

  conn.query(sql, data, (err) => {
    if (err) {
      console.error(err);
    }
    select();
  });
}

function select() {
  let consulta = "SELECT * FROM lancamentos;";

  conn.query(consulta, (err, results) => {
    if (err) {
      console.error(err);
    }
    console.log(results);
  });
}
