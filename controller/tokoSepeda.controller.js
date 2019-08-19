// const { getTokoData } = require('../model/tokoSepeda.model')
// const { response } = require('../helper/tokosepeda.helper')
const Model = require('../model/tokoSepeda.model')
const Helper = require('../helper/tokosepeda.helper')

module.exports = {
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

  findData(req, res) {
    const queryData = req.query
  
    Model.getTokoData(queryData)
    .then((resultData) => {
      Helper.response(res, resultData, 302)
    })
    .catch((error) => {
      console.log(error);
    })
  },

  inserData(req, res) {
    const { name, brand, type, branch, price } = req.body
    const data = { name, brand, type, branch, price }

    Model.insertTokoData(data)
    .then((resultData) => {
      Helper.response(res, resultData, 201)
    })
    .catch((error) => {
      console.log(error);
    })
  },

  updateData(req, res) {
    const params = req.params.id
    const { name, brand, type, branch, price } = req.body
    const data = { name, brand, type, branch, price, params }

    Model.updateTokoData(data)
    .then((resultData) => {
      Helper.response(res, resultData, 301)
    })
    .catch((error) => {
      console.log(error);
    })
  },

  deleteData(req, res) {
    const params = req.params.id

    Model.deleteTokoData(params)
    .then((result) => {
      Helper.response(res, result, 202)
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
