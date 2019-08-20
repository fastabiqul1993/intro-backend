require("dotenv/config"); //metode ke 2 untuk make dotenv
const express = require("express"); //import
const logger = require("morgan");
const bodyParser = require("body-parser");
const routerRoot = require("./src/Routes/root.routes");

const app = express();
const port = process.env.PORT || 8080;
const nodeEnv = process.env.NODE_ENV || "Production";

app.listen(port, () => {
  console.log(`Server is running in ${nodeEnv} Mode on port ${port}`);
});

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routerRoot);

module.exports = app;
