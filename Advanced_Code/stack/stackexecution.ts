import { Stack } from './stack'
let s = new Stack()
for (let i = 0; i < 10; i++)
    s.addElement(i.toString());
s.traverseStack();
s.removeElement()
s.traverseStack();
