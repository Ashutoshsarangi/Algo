// Graph Traversal Using Iterative using QUEUE BFS So Queue


// Graph Adjacency List
// Here We are going to add for the Un Directed Graphs


class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(value){
        if(!this.adjacencyList[value]){
            this.adjacencyList[value] = [];
        }else{
            console.log('Vertext is alredy Present, Try adding edges')
        }
    }
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
   BFSQueue(root){
       const result = [];
       const visited = {};
       const queue = [];
       queue.push(root);
       while(queue.length > 0){
           const vertex = queue.shift();
           result.push(vertex);
           for(let neighbour of this.adjacencyList[vertex].slice().reverse()){
                if(!visited[neighbour]){    
                   visited[neighbour] = true;
                   queue.push(neighbour)
               }  
           }
           
       } // Reverse the Main list before travsersal
       return result;
   }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("C", "E");
g.addEdge("F", "E");

console.log(g.BFSQueue('A'));
