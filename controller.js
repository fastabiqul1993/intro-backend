const db = require('./connect');

module.exports = {
  findAll : (req,res) => {
    db.query('SELECT * FROM tbToko', function(error, response) {
      if(error) {
        console.log(error);
        
      } else {
        res.json(response)
      }
    })
  },

  findBy : (req, res) => {

  },

  create: (req, res) => {

  },

  update: (req, res) => {

  },

  remove: (req, res) => {

  }
}
