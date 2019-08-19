// const { getTokoData } = require('../model/tokoSepeda.model')
// const { response } = require('../helper/tokosepeda.helper')
const Model = require('../model/tokoSepeda.model')
const Helper = require('../helper/tokosepeda.helper')

module.exports = {
  create(req, res) {
    const { name, brand, type, branch, price } = req.body;
    db.query(`INSERT INTO tbToko 
              SET name=?, brand=?, type=?, branch=?, price=?`, 
              [name, brand, type, branch, price], 
            function (error, response) {
            if (error) {
              console.log(error);
            }
            else {
              let formResponse = {
                status: 201,
                data: response
              };
              res.json(formResponse);
            }
          });
  },
  update(req, res) {
    let id = req.params.id;
    let { name, brand, type, branch, price } = req.body;
    let queryConcated = [];
    // , brand=?, type=?, branch=?, price=?
    // , brand, type, branch, price, id
    db.query(`UPDATE tbToko SET name=? WHERE id=?`, [name, id], function (error, response) {
      if (error) {
        console.log(error);
      }
      else {
        let formResponse = {
          status: 301,
          data: response
        };
        res.json(formResponse);
      }
    });
  },
  remove(req, res) {
    let id = req.params.id;
    db.query(`DELETE FROM tbToko WHERE id=?`, [id], function (error, response) {
      if (error) {
        console.log(error);
      }
      else {
        let formResponse = {
          status: 202,
          data: response
        };
        res.json(formResponse);
      }
    });
  },

  finding(req, res) {
    const queryData = req.query
  
    Model.getTokoData(queryData)
    .then((resultData) => {
      Helper.response(res, resultData, 202)
    })
    .catch((error) => {
      console.log(error);
    })
    // const queryData = req.query
    // const queryLike = Object.keys(req.query)
    // const queryLen = Object.getOwnPropertyNames(queryData)
    // const queryFindAll = 'SELECT * FROM tbToko'
    // let queryResult = ''
    // if(queryLen.length > 2) {
    //   res.json('Sorry, parameter cannot be more than 2')
    // } else if(queryLen.length === 0) {
    //   queryResult = queryFindAll
    // } else if(queryLen.length === 1) {
    //   queryResult = queryFindAll.concat(` WHERE ${queryLike} LIKE '%${queryData[queryLike]}%'`)
    // } else if(queryLen.length === 2) {
    //   console.log(req.query);
    //   queryResult = queryFindAll.concat(` WHERE
    //                                       (${queryLike[0]} LIKE '%${queryData[queryLike[0]]}%')
    //                                       AND
    //                                       (${queryLike[1]} LIKE '%${queryData[queryLike[1]]}%')`)
    // }
    // db.query(queryResult, (error, response) => {
    //   if(error) {
    //     console.log(error)
    //   } else {
    //     res.json(response)
    //   }
    // })
  }
}
