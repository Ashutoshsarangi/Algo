"use strict";
exports.__esModule = true;
/**
 * The main motive of creating this to create a generic Queue
 */
var QuickSort = /** @class */ (function () {
    function QuickSort() {
        var _this = this;
        this.partitionIndex = 0;
        /**
         * Here this method is requires for adding element in the Queue.
         * @param value the value is going to be added in the Queue
         * @returns it returns the Queue
         */
        this.quickSort = function (value, start, end) {
            if (start < end) {
                _this.partitionIndex = _this.partition(value, start, end);
                _this.quickSort(value, start, _this.partitionIndex - 1);
                _this.quickSort(value, _this.partitionIndex + 1, end);
                return value;
            }
        };
        this.partition = function (value, start, end) {
            var pivot = value[end];
            var pIndex = start;
            for (var i = start; i < end; i++) {
                if (value[i] <= pivot) {
                    var temp = value[i];
                    value[i] = value[pIndex];
                    value[pIndex] = temp;
                    pIndex += 1;
                }
            }
            var temp1 = value[pIndex];
            value[pIndex] = value[end];
            value[end] = temp1;
            return pIndex;
        };
    }
    return QuickSort;
}());
exports.QuickSort = QuickSort;
