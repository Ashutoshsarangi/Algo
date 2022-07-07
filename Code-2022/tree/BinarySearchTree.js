// sdfsd
// // Binary Search Tree

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value)
        if(this.root === null){
            this.root = newNode;
            return this;
        }else{
          let currentNode = this.root;
            while(true){
                if(value === currentNode.value)
                    return undefined;
                if(currentNode.value > value){
                    // left Tree
                    if(currentNode.left === null){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                if(currentNode.value < value){
                    // right side
                    if(currentNode.right === null){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        } 
    }
    find(value){
        let currentNode = this.root;
        while(true){
            if(currentNode === null){
                return false;
            }
            if(currentNode.value === value){
                return true;
            }else{
                if(currentNode.value > value){
                    currentNode = currentNode.left;
                }
                if(currentNode.value < value){
                    currentNode = currentNode.right;
                }
            }
        }
        
    }
}

let bst = new BinarySearchTree();
bst.insert(45);
bst.insert(30);
bst.insert(25);
bst.insert(28);
console.log(bst.find(45));
console.log(bst.find(28));
console.log(bst.find(75));
