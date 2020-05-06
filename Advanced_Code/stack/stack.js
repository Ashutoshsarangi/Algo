"use strict";
exports.__esModule = true;
/**
 * The main motive of creating this to create a generic stack
 */
var Stack = /** @class */ (function () {
    function Stack() {
        var _this = this;
        this.stackArr = [];
        /**
         * Here this method is requires for adding element in the stack.
         * @param value the value is going to be added in the stack
         * @returns it returns the stack
         */
        this.addElement = function (value) {
            _this.stackArr.push(value);
            return _this.stackArr;
        };
        /**
         * Here this method is requires for remove element in the stack.
         * @param value the value is going to be removed from the stack
         * @returns it returns the stack
         */
        this.removeElement = function () {
            _this.stackArr.pop();
            return _this.stackArr;
        };
        /**
         * Here this method is requires for travers the stack.
         */
        this.traverseStack = function () {
            _this.stackArr.map(function (item) {
                console.log(item);
            });
        };
    }
    return Stack;
}());
exports.Stack = Stack;
