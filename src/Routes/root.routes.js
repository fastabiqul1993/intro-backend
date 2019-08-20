const express = require("express");
const store = require("./store.routes");

const routes = express.Router();

routes.use("/store", store);
module.exports = routes;
