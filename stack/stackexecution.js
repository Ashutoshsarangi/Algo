"use strict";
exports.__esModule = true;
var stack_1 = require("./stack");
var s = new stack_1.Stack();
for (var i = 0; i < 10; i++)
    s.addElement(i.toString());
s.traverseStack();
s.removeElement();
s.traverseStack();
