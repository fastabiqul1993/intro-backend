const Model = require("../Models/store.model");
const Helper = require("../Helpers/controllers.helper");

module.exports = {
  findAll(req, res) {
    const queryData = req.query;
    console.log("masukkk find alll");

    Model.getAll(queryData)
      .then(resultData => {
        Helper.response(res, resultData, 302);
      })
      .catch(error => {
        Helper.response(res, error, 400);
      });
  },

  findBy(req, res) {
    const queryData = req.query;

    Model.getBy(queryData)
      .then(resultData => {
        Helper.response(res, resultData, 302);
      })
      .catch(error => {
        Helper.response(res, error, 400);
      });
  },

  findByID(req, res) {
    const queryData = req.params.id;

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
    const params = req.params.id;
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
