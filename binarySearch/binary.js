"use strict";
exports.__esModule = true;
/**
 * The main motive of creating this to create a generic Queue
 */
var BInary = /** @class */ (function () {
    function BInary() {
        /**
         * Here this method is requires for adding element in the Queue.
         * @param value the value is going to be added in the Queue
         * @returns it returns the Queue
         */
        this.searchElement = function (value, item) {
            var pos = 0;
            var end = value.length;
            var mid = Math.floor(end / 2);
            if (item > value[mid]) {
                for (var i = mid; i < end; i++) {
                    if (value[i] == item) {
                        return i;
                    }
                }
            }
            else if (item < value[mid]) {
                for (var i = 0; i < mid; i++) {
                    if (value[i] == item) {
                        return i;
                    }
                }
            }
        };
    }
    return BInary;
}());
exports.BInary = BInary;
