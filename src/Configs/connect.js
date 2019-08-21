require("dotenv/config");
const mysql = require("mysql");

const dbConfig = mysql.createConnection({
  host: "lmag6s0zwmcswp5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "lmag6s0zwmcswp5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  password: "a0ui2rq2dw2ujb4c",
  database: "u2hdvnt8w3ixj1o4"
});

dbConfig.connect(function(error) {
  if (error) throw error;
});

module.exports = dbConfig;
