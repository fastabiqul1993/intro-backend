const db = require('./connect');

module.exports = {

  create: (req, res) => {
    let { name, brand, type, branch, price } = req.body
    
    db.query(`INSERT INTO tbToko SET name=?, brand=?, type=?, branch=?, price=?`, 
      [name, brand, type, branch, price], 
      function(error, response) {
        if(error) {
          console.log(error);
          
        } else {
          let formResponse = {
            status: 201,
            data: response
          }
          res.json(formResponse)
        }
      })
  },

  update: (req, res) => {
    let id = req.params.id
    let { name, brand, type, branch, price } = req.body

    db.query(`UPDATE tbToko SET name=?, brand=?, type=?, branch=?, price=?`,
    [name, brand.])
  },

  remove: (req, res) => {

  },

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
    db.query('')
  }
}
