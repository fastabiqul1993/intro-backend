require("dotenv/config");
const mysql = require("mysql");

const dbConfig = mysql.createConnection({
  host: "db4free.net",
  user: "fastaman",
  password: "fastaman1993",
  database: "dbheroku"
  // socketPath: process.env.DB_SOCKET
});

dbConfig.connect(function(error) {
  if (error) throw error;
});

module.exports = dbConfig;
