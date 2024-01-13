#!/usr/bin/env node

"use strict";

// importing dependencies
const express = require("express");
const router = new express.Router();
const enviourmentData = require("../Enviournment/env.package.json");
const logger = require("../logger/logger");

router.post(`${enviourmentData.default}`, (req, res) => {
  logger.defaultRouterLogger(enviourmentData.default);
  res.status(200).send({
    status: "200",
    data: "Handler Not found.",
    message: "",
  });
});

module.exports = router;
