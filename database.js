var { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "training_db",
  connectionLimit: 10,
});

pool.query(`select * from users where id = ?`, (err, result, fields) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
});
