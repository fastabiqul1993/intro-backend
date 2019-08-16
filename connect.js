require('dotenv/config');
const mysql = require('mysql');

const dbConfig = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  socketPath: process.env.DB_SOCKET
});

dbConfig.connect(function(error) {
  if(error) throw error;
})

module.exports = dbConfig;