"use strict";
exports.__esModule = true;
/**
 * The main motive of creating this to create a generic MergeSort
 */
var MergeSort = /** @class */ (function () {
    function MergeSort() {
        var _this = this;
        this.mainArr = [];
        /**
         * Here this method is requires for adding element in the Queue.
         * @param value the value is going to be added in the Queue
         * @returns it returns the Queue
         */
        this.sort = function (arr) {
            var leftArr = [];
            var rightArr = [];
            if (arr.length < 2)
                return arr;
            var mid = (arr.length) / 2;
            for (var i = 0; i < mid; i++) {
                leftArr.push(arr[i]);
            }
            for (var j = mid; j < arr.length; j++) {
                rightArr.push(arr[j]);
            }
            _this.sort(leftArr);
            _this.sort(rightArr);
            _this.mainArr = _this.merge(leftArr, rightArr, arr);
            return _this.mainArr;
        };
        /**
         * Here this method is requires for remove element in the Queue.
         * @param value the value is going to be removed from the Queue
         * @returns it returns the Queue
         */
        this.merge = function (leftArray, rightArray, mainArray) {
            var i = 0;
            var j = 0;
            var k = 0;
            while (i < leftArray.length && j < rightArray.length) {
                if (leftArray[i] < rightArray[j]) {
                    mainArray[k] = leftArray[i];
                    i += 1;
                }
                else {
                    mainArray[k] = rightArray[j];
                    j += 1;
                }
                k += 1;
            }
            while (i < leftArray.length) {
                mainArray[k] = leftArray[i];
                i += 1;
                k += 1;
            }
            while (j < rightArray.length) {
                mainArray[k] = rightArray[j];
                j += 1;
                k += 1;
            }
            return mainArray;
        };
    }
    return MergeSort;
}());
exports.MergeSort = MergeSort;
