const express = require("express");
const routes = express.Router();
const {
  findBy,
  findByID,
  inserData,
  updateData,
  deleteData
} = require("../Controllers/store.controller");

routes.get("/", findBy);
routes.post("/", inserData);
routes.get("/:id", findByID);
routes.patch("/:id", updateData);
routes.delete("/:id", deleteData);

module.exports = routes;
