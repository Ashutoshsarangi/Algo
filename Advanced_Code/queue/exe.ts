import { Queue } from './queue'
let q = new Queue();
q.addElement(true)
q.addElement('xyz')
q.addElement(123)
q.traverseQueue()
console.log('--------------')
q.removeElement()
q.traverseQueue()
