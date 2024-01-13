#!/usr/bin/env node

"use strict";

const express = require("express");
const enviourment = require("./Enviournment/env.package.json");
const logger = require("./logger/logger");

// Making global usage variable
const app = express();
const PORT = process.env.PORT || enviourment.PORT;
const defaultRouter = require("./router/defaultRoute");
const expressRouter = require("./router/route");

// Making use of inbuild application
app.use(express.json());
app.use(expressRouter);
app.use(defaultRouter);

// starting the server
const startServer = () => {
  app.listen(PORT, () => {
    logger.serverStartingLogger(PORT);
  });
};

module.exports = {
  startServer,
};
