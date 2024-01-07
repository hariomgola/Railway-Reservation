#!/usr/bin/env node

"use strict";

// importing dependencies
const express = require("express");
const router = new express.Router();

// router functionality
router.get("/", (req, res) => {
  console.clear();
  res.status(200).send({
    status: 200,
    response: "server is running",
  });
});

// exporting all router here
module.exports = router;
