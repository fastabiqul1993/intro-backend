require("dotenv/config");
const mysql = require("mysql");

const dbConfig = mysql.createConnection({
  host: "w1kr9ijlozl9l79i.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
  user: "pvq4inhhpgnusdwa",
  password: "ii75nalmo8t8hscw",
  database: "flf0ghak9lyhlqox"
  // socketPath: process.env.DB_SOCKET
});

dbConfig.connect(function(error) {
  if (error) throw error;
});

module.exports = dbConfig;
