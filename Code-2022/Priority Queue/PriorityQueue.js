// Priority Queue
// Here we are going to use min Binary Heap concept.

class PriorityQueue{
    constructor(){
        this.value=[];
    }

    enQueue(value, priority){
       // Similar to Binary heap insert 
        const newNode = {value, priority};
        this.value.push(newNode);
        if(this.value.length === 1){
            return this.value;
        }
        this.bubbleUp();
        return this.value;
    }

    bubbleUp(lastIndex = this.value.length -1){
        // if(lastIndex === 0){
        //     return false;
        // }
        const parentIndex = Math.floor((lastIndex - 1)/2);
        const parentElement = this.value[parentIndex];
        const lastElement = this.value[lastIndex];
       if(parentIndex < 0 ){
           return false;
       }
        if(parentElement.priority < lastElement.priority){
            return false;
        }
        let temp = this.value[parentIndex];
        this.value[parentIndex] = lastElement;
        this.value[lastIndex] = temp;
        this.bubbleUp(parentIndex);
    }

    deQueue(){
        // Similar to Binary Heap Removal
        
        // ANd Use Bubble Down Approach
    }
    
}

const pQueue = new PriorityQueue();
pQueue.enQueue(100, 5);
pQueue.enQueue(200, 4);
pQueue.enQueue(300, 3);
pQueue.enQueue(400, 2);
pQueue.enQueue(500, 1);
