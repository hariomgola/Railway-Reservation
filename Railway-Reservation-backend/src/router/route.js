#!/usr/bin/env node

"use strict";

// importing dependencies
const express = require("express");
const router = new express.Router();
const enviourmentData = require("../Enviournment/env.package.json");
const trainLogic = require("../logic/train-couch-map");

// router functionality
router.get("/", (req, res) => {
  console.log(`  |> starting handler has been called`);
  res.status(200).send({
    status: 200,
    response: "server is running",
  });
});

// router to get data for train structure
router.get(`/${enviourmentData.routerTrainTicket}`, (req, res) => {
  console.log(
    `  |> ${enviourmentData.routerTrainTicket} handler has been called`
  );
  trainLogic.pushDataForCouch();
  res.status(200).send({
    seatLeft: trainLogic.seat.totalSeatVacant,
    seatBooked: trainLogic.seat.totalSeatBooked,
    trainMap: trainLogic.couchMap,
  });
});

// exporting all router here
module.exports = router;
