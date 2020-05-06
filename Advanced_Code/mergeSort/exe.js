"use strict";
exports.__esModule = true;
var mergeSort_1 = require("./mergeSort");
var s = new mergeSort_1.MergeSort();
var arr = [1, 3, 4, 5, 0, 9, 8, 5];
console.log(' input Array ==> ', arr);
console.log(" sorted Array ==> ", s.sort(arr));
