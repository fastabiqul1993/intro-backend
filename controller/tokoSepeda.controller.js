const Model = require("../model/tokoSepeda.model");
const Helper = require("../helper/tokosepeda.helper");

module.exports = {
  findData(req, res) {
    const queryData = req.query;

    const limiter = {
      page: req.query.page,
      limit: req.query.limit
    };

    Model.getTokoData(queryData)
      .then(resultData => {
        Helper.response(res, resultData, 302);
      })
      .catch(error => {
        console.log(error);
      });
  },

  inserData(req, res) {
    const data = req.body;

    Model.insertTokoData(data)
      .then(resultData => {
        Helper.response(res, resultData, 201);
      })
      .catch(error => {
        console.log(error);
      });
  },

  updateData(req, res) {
    const params = req.params.id;
    const dataBody = req.body;
    const data = { dataBody, params };

    Model.updateTokoData(data)
      .then(resultData => {
        Helper.response(res, resultData, 301);
      })
      .catch(error => {
        console.log(error);
      });
  },

  deleteData(req, res) {
    const params = req.params.id;

    Model.deleteTokoData(params)
      .then(result => {
        Helper.response(res, result, 202);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
