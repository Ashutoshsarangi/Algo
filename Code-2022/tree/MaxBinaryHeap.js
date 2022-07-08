// Max Binary Heap Code

class MaxBinaryHeap{
    constructor(){
        this.value = [];
    }

    insert(val){
        this.value.push(val);
        if(this.value.length === 1){
            return this.value
        }
        this.bubbleUp(this.value.length-1)
        return this.value;
    }
    bubbleUp = (lastElementIndex) =>{
        let parentIndex = Math.floor((lastElementIndex-1)/2);
        if(this.value[parentIndex] > this.value[lastElementIndex]){
            return false;
        }
        let item = this.value[parentIndex];
        this.value[parentIndex] = this.value[lastElementIndex];
        this.value[lastElementIndex] = item;
        if(parentIndex === 0){
            return false;
        }
        this.bubbleUp(parentIndex);
    }
    remove(){
        // Removing the Max Heap
        this.value[0] = this.value[this.value.length -1]; // Assigning last child to the Root and then we need to Bubble-Down
        this.value.pop();// Here we are removing the last Element from the End.
        this.bubbleDown(); // This will start from the Root.
        return this.value; // return the updated Value list
    }

    bubbleDown = (parentIndex = 0) =>{
        if(this.value.length === 0){
            return false;
        }
        if(parentIndex === this.length-1){
            return false;
        }
        let root = this.value[parentIndex];
        let child1Index = (parentIndex*2) + 1;
        let child2Index = (parentIndex*2) + 2;

         if(child1Index > this.value.length-1){
            return false; // Exit Condition 
        }
        
        let child1 = this.value[child1Index];
        let child2 = this.value[child2Index];
        
        let greaterChild = 0, greaterChildIndex = -1;

        
        if(child1 > child2){
            greaterChild = child1;
            greaterChildIndex = child1Index;
        }else{
            greaterChild = child2;
            greaterChildIndex = child2Index;
        }

        if(root > greaterChild){
            return false;
        }
        let temp = root;
        this.value[parentIndex] = this.value[greaterChildIndex];
        this.value[greaterChildIndex] = root;
        this.bubbleDown(greaterChildIndex);
        
    }
}

let MBH = new MaxBinaryHeap();
console.log(MBH)
MBH.insert(40);
MBH.insert(30);
MBH.insert(20);
MBH.insert(15);
MBH.insert(10);
MBH.insert(5);
MBH.insert(7);
console.log(MBH.insert(55));
// 67, 58, 65, 45, 31,40, 53, 44, 15
console.log(MBH.remove());


