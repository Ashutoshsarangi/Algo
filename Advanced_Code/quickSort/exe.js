"use strict";
exports.__esModule = true;
var quickSort_1 = require("./quickSort");
var q = new quickSort_1.QuickSort();
var sortedArray = q.quickSort([1, 2, 5, 9, 8, 9, 10], 0, 6);
console.log('Sorted Array  ==> ', sortedArray);
