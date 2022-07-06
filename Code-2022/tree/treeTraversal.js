// Binary Search Tree  ---> Traversal ---> BFS

/*
Trick To remember in PreOrder, Post Order and In Order
1. Here Focus on the Root Node
2. the Left and right is going to be same
3. Pre ---> Add Root in the Begining (Root, left, Right)
4. Post ---> Add Root in the End (Left, Right, Root)
5. In -----> Add Root in Between(Left, Root, Right)
*/

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
    BFS(){
        let queue = [],
            visited = [];
        queue.push(this.root);
        while(queue.length > 0){
            let item = queue.shift();
            visited.push(item.value);
            if(item.left)
                queue.push(item.left);
            if(item.right)
                queue.push(item.right);
        }
        return visited;
    }
    DFSPerOrder(){
        // Root, Left, right
        let result = [];
        const helper = node =>{
            result.push(node.value);
            if(node.left)
                helper(node.left);
            if(node.right)
                helper(node.right);
        }
        helper(this.root);
        return result;
    }
    DFSPostOrder(){
        // Left, Right, Root
        let result = [];
        const helper = node =>{
            if(node.left)
                helper(node.left);
            if(node.right)
                helper(node.right);
            result.push(node.value);
        }
        helper(this.root);
        return result;
    }
    DFSInOrder(){
        // Left, Root, Right 
        let result = [];
        const helper = node =>{
            if(node.left)
                helper(node.left);
            result.push(node.value);
            if(node.right)
                helper(node.right);
        }
        helper(this.root);
        return result;
    }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
console.log(bst.BFS());
console.log(bst.DFSPerOrder());
console.log(bst.DFSPostOrder());
console.log(bst.DFSInOrder());
