class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        // removing the Tail Node and assign Previous node as Tail
        let currentNode = this.head;
        if(currentNode.next === null){ // when head and Tail are same Node;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return undefined;
        }
        
        while(currentNode){
            if(currentNode.next === this.tail){
                // remove logic
                currentNode.next = null;
                this.tail = currentNode;
                this.length--;
            }
            currentNode = currentNode.next;
        }
    }
    traverse(){
        let current = this.head;
        if(current === null){
            console.log('The LinkedList is Empty');
        }
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
    shift(){
        if(this.head === null){
            return;
        }
        let currentNode = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentNode;
    }
    unshift(val){
        let currentNode = new Node(val);
        if(this.head === null){
            this.head = currentNode;
            this.tail = currentNode;
        } else {
            currentNode.next = this.head;
            this.head = currentNode;    
        } 
    }
    get(index){
        let currentNode = this.head;
        // I did not Manage my length properly so can't relay on the length
        let counter= 0;
        while(currentNode){
            if(counter === index){
                console.log('Inside Get ---> ',currentNode.value)
                return currentNode;
            }
            counter++;
            currentNode = currentNode.next;
        }
        console.log('Inside Get ---> Index is not Valid');
        return undefined;
    }
    set(index, value){
        let prevNode = this.get(index-1);
        let newNode = new Node(value);
        if(prevNode){
            let temp = prevNode.next;
            prevNode.next = newNode;
            newNode.next = temp;
            return true;
        }else{
            return false;
        }
        
    }
    insert(index, value){
        if(index === 0){
            this.unshift(value);
        } else {
            this.set(index, value);
        }
        this.length++;
    }
    remove(index){
        if(index === 0){
            return this.shift();
        }
        let counter = 0;
        let prevNode = this.get(index -1);
        let removedNode = prevNode.next;
            prevNode.next = removedNode.next;
            this.length--;
            return removedNode;
    }
    reverse(){
        // For this I will Use Stack to do the OPeration 
        // Here I would use Push and POP Mechanism.
        let arrTemp = [];
        let currentNode = this.head;
        while(currentNode){
            arrTemp.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arrTemp;
    }
}

const list = new SinglyLinkedList();
list.push('Hello');
list.push('World');
list.push('Ashu');
list.traverse();
// list.pop()
// list.pop()
list.pop()
console.log('Post POP traversal');
list.traverse();
list.shift();
console.log('List Post shift');
list.traverse();
list.unshift(123);
list.traverse();
list.get(1);
list.get(23);
console.log('-------------------------');
list.traverse();
list.set(1, 'Hello');
console.log('-------------------------');
list.traverse();
list.insert(0, 'Ashu');
console.log('-------------------------');
list.traverse();
list.insert(2, 'Sarangi');
console.log('-------------------------');
list.traverse();
list.remove(2);
console.log('-------------------------');
list.traverse();
list.reverse();
