const express = require("express");
const routes = express.Router();
const {
  findAll,
  findByID,
  findByBranch,
  findByType,
  inserData,
  updateData,
  deleteData
} = require("../Controllers/store.controller");

routes.get("/", findAll);
routes.get("/id/", findByID);
routes.get("/branch/", findByBranch);
routes.get("/type/", findByType);
routes.post("/", inserData);
routes.patch("/", updateData);
routes.delete("/", deleteData);

module.exports = routes;
