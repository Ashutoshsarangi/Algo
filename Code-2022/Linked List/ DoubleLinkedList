class Node{
    constructor(value){
        this.value = value;
        this.next= null;
        this.prev= null;
    }
}


class DoubleLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(value){
        let newNode = new Node(value);
        if(this.length === 0){
            this.head = this.tail = newNode;
            this.length = 1;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.length++;
        }
        return true;
    }
    pop(){
        if(this.length <= 1){
            this.head = this.tail = null;
            this.length = 0;
            return undefined;
        }else{
            let temp = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
            this.length--;
            return temp.value;
        }
    }
    shift(){
        if(this.length <= 1){
            this.head = this.tail =null;
            this.length = 0;
            return undefined;
        }else{
            let currentNode = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            currentNode.next = null;
            this.length--;
            return currentNode.value;
        }
    }
    unshift(value){
        let newNode = new Node(value);
        if(this.length === 0){
            this.head = this.tail = newNode;
            this.length = 1;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.length++;
        }
    }
    get(index){
        if(index < 0 && index > this.length){
            return null;
        }else{
            if(index <= (this.length/2)){
                let counter = 0;
                let currentNode = this.head;
                while(currentNode){
                  if(counter === index){
                      return currentNode;
                  }
                    counter++;
                    currentNode = currentNode.next;
                }
            }else{
                let counter = this.length;
                let currentNode = this.tail;
                while(currentNode){
                    if(counter === index){
                        return currentNode;
                    }
                    counter--;
                    currentNode = currentNode.prev;
                }
            }
        }
    }

    set(index, value){
        let currentNode = this.get(index);
        if(currentNode){
            currentNode.value = value;
            return true;
        }
        return false;
    }
    insert(index, value){
        if(index < 0){
            return null;
        } else if(index === this.length){
            this.push(value);
        }else{
            let prevNode = this.get(index-1);
            let newNode = new Node(value);
            let nextNode = prevNode.next;
            prevNode.next = newNode;
            newNode.prev = prevNode;
            newNode.next = nextNode;
            newNode.prev = newNode;
            this.length++;
            return true;
        }
    }
    remove(index){
        if(index < 0 && index > this.length){
            return undefined;
        } else if(index === 0){
            this.shift();
        }else if(index === this.length){
            this.pop();
        } else{
            let removedNode = this.get(index);
            removedNode.prev.next = removedNode.next;
            removedNode.next.prev = removedNode.prev;
            removedNode.next = removedNode.prev = null;
            this.length--;
            return removedNode.value;
        }
        
    }
    
    travel(msg){
        let currentNode = this.head;
        console.log(msg)
        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

let dlist = new DoubleLinkedList();
dlist.push(3)
dlist.push(5)
dlist.push(7)
dlist.push(9)
dlist.travel('After Push elements');
dlist.pop();
dlist.pop();
dlist.travel('After Pop elements');
dlist.shift();
dlist.travel('After shift');
dlist.unshift('Hello');
dlist.unshift('World');
dlist.travel('After unshift');
dlist.push(7)
dlist.push(9)
dlist.push('A')
dlist.push('B')
dlist.push('C')
dlist.push('DoubleLinkedList')
dlist.travel('After adding lot of nodes');
console.log('After get result');
console.log(dlist.get(0));
console.log(dlist.get(5));
console.log(dlist.get(8));
console.log(dlist.get(9));
dlist.set(5, 'Ashutosh');
dlist.travel('Post Set in Index 5');
dlist.insert(4, 'Sarangi');
dlist.travel('POST Insert 4');
dlist.remove(4);
