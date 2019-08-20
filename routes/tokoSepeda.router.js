const routes = require("express").Router();
const {
  findData,
  inserData,
  updateData,
  deleteData
} = require("../controller/tokoSepeda.controller");

routes.get("/", findData);
routes.post("/", inserData);
routes.patch("/:id", updateData);
routes.delete("/:id", deleteData);

module.exports = routes;
