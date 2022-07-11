// Graph Traversal DFS Recursive


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
   DFSRecursive(root){
       const result = [];
       const visited = {};
       const helper = (root)=>{
          if(!root){
              return null;
          } 
           result.push(root);
           visited[root] = true;
           for(let vertex of this.adjacencyList[root]){
               if(!visited[vertex]){
                   helper(vertex);
               }
           }
       }
       helper(root);
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

console.log(g.DFSRecursive('A'));
