require("dotenv/config");
const mysql = require("mysql");

const dbConfig = mysql.createConnection({
  host:
    process.env.DB_HOST ||
    "w1kr9ijlozl9l79i.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
  user: process.env.DB_USER || "pvq4inhhpgnusdwa",
  password: process.env.DB_PASSWORD || "ii75nalmo8t8hscw",
  database: process.env.DB_DATABASE || "flf0ghak9lyhlqox",
  socketPath: process.env.DB_SOCKET
});

dbConfig.connect(function(error) {
  if (error) throw error;
});

module.exports = dbConfig;
