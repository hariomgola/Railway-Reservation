#!/usr/bin/env node

"use strict";

// importing dependencies
const express = require("express");
const router = new express.Router();
const enviourmentData = require("../Enviournment/env.package.json");
const trainLogic = require("../logic/train-couch-map");
const logger = require("../logger/logger");

// router functionality
router.get("/", (req, res) => {
  console.log(`  |> starting handler has been called`);
  res.status(200).send({
    status: 200,
    response: {
      "train-map": enviourmentData.routerGetTrainMap,
    },
  });
});

// router to get data for train structure
router.get(`/${enviourmentData.routerTrainTicket}`, (req, res) => {
  logger.successRouterLogger(enviourmentData.routerTrainTicket);
  trainLogic.pushDataForCouch();
  res.status(200).send({
    seatLeft: trainLogic.seat.totalSeatVacant,
    seatBooked: trainLogic.seat.totalSeatBooked,
    trainMap: trainLogic.couchMap,
  });
});

// router to get train map
router.post(`/${enviourmentData.routerGetTrainMap}`, (req, res) => {
  logger.successRouterLogger(enviourmentData.routerGetTrainMap);
  trainLogic.pushDataForCouch();
  const _response = {
    seat: trainLogic.seat,
    trainMap: trainLogic.couchMap,
  };
  res.status(200).send({
    status: 200,
    request: req.body,
    data: _response,
  });
});

// router to get the ticket
router.post(`/${enviourmentData.routerGetTicket}`, (req, res) => {
  logger.successRouterLogger(enviourmentData.routerGetTicket);
  const _response = {
    pnr: "#00010001",
    passengerName: "Hariom",
    trainName: "Delhi Express",
    companyName: "Inspire Travel",
    bookingDate: "01/01/2024",
    journey_start: {
      date: "01/01/2023",
      time: "11:00 PM",
      station: "Delhi, India",
    },
    journey_end: {
      date: "01/01/2023",
      time: "07:00 AM",
      station: "Banglore, India",
    },
  };
  res.status(200).send({
    status: 200,
    request: req.body,
    data: _response,
  });
});

// exporting all router here
module.exports = router;
