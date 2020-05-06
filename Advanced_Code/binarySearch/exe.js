"use strict";
exports.__esModule = true;
var binary_1 = require("./binary");
var b = new binary_1.BInary();
var position = b.searchElement([1, 2, 5, 6, 8, 9, 10], 9);
console.log('position  ==> ', position);
