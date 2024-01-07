#!/usr/bin/env node

"use strict";

const enviournment = require("./enviourment.package.json");

const _getURL = (url) => {
  enviournment.routerPOST = url;
};
const _postURL = (url) => {
  enviournment.routerPOST = url;
};
const _putURL = (url) => {
  enviournment.routerPUT = url;
};
const _deleteURL = (url) => {
  enviournment.routerDelete = url;
};

const _PORT = (port) => {
  enviournment;
};

module.exports = {
  _getURL,
  _postURL,
  _putURL,
  _deleteURL,
  _PORT,
};
