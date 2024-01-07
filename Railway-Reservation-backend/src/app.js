#!/usr/bin/env node

"use strict";

const express = require("express");
const enviourment = require("./Enviournment/env.package.json");

// Making global usage variable
const app = express();
const PORT = process.env.PORT || enviourment.PORT;
const expressRouter = require("./router/route");

// Making use of inbuild application
app.use(express.json());
app.use(expressRouter);

// starting the server
const startServer = () => {
  console.clear();
  app.listen(PORT, () => {
    console.log(`|> Server is up and running at ${PORT}`);
  });
};

module.exports = {
  startServer,
};
