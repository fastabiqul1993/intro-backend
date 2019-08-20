const Model = require("../Models/store.model");
const Helper = require("../Helpers/controllers.helper");

module.exports = {
  findAll(req, res) {
    const queryData = req.query;

    Model.getAllTokoData(queryData)
      .then(resultData => {
        Helper.response(res, resultData, 302);
      })
      .catch(error => {
        Helper.response(res, error, 400);
      });
  },

  findByType(req, res) {
    const queryData = req.query;

    Model.getByType(queryData)
      .then(resultData => {
        Helper.response(res, resultData, 302);
      })
      .catch(error => {
        Helper.response(res, error, 400);
      });
  },

  findByBranch(req, res) {
    const queryData = req.query;

    Model.getByBranch(queryData)
      .then(resultData => {
        Helper.response(res, resultData, 302);
      })
      .catch(error => {
        Helper.response(res, error, 400);
      });
  },

  findByID(req, res) {
    const queryData = req.query;

    Model.getByID(queryData)
      .then(resultData => {
        Helper.response(res, resultData, 302);
      })
      .catch(error => {
        Helper.response(res, error, 400);
      });
  },

  inserData(req, res) {
    const data = req.body;

    Model.insertTokoData(data)
      .then(resultData => {
        Helper.response(res, resultData, 201);
      })
      .catch(error => {
        Helper.response(res, error, 400);
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
        Helper.response(res, error, 400);
      });
  },

  deleteData(req, res) {
    const params = req.query.id;
    console.log(params, "ini params");

    Model.deleteTokoData(params)
      .then(result => {
        Helper.response(res, result, 202);
      })
      .catch(error => {
        Helper.response(res, error, 400);
      });
  }
};
