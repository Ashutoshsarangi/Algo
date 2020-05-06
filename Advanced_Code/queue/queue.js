"use strict";
exports.__esModule = true;
/**
 * The main motive of creating this to create a generic Queue
 */
var Queue = /** @class */ (function () {
    function Queue() {
        var _this = this;
        this.queueArr = [];
        /**
         * Here this method is requires for adding element in the Queue.
         * @param value the value is going to be added in the Queue
         * @returns it returns the Queue
         */
        this.addElement = function (value) {
            _this.queueArr.push(value);
            return _this.queueArr;
        };
        /**
         * Here this method is requires for remove element in the Queue.
         * @param value the value is going to be removed from the Queue
         * @returns it returns the Queue
         */
        this.removeElement = function () {
            _this.queueArr.shift();
            return _this.queueArr;
        };
        /**
         * Here this method is requires for travers the Queue.
         */
        this.traverseQueue = function () {
            _this.queueArr.map(function (item) {
                console.log(item);
            });
        };
    }
    return Queue;
}());
exports.Queue = Queue;
