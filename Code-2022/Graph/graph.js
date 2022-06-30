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
    removeEdge(v1, v2){
        this.adjacencyList[v1].splice(this.adjacencyList[v1].indexOf(v2), 1);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v!== v1);
    }
}

const graph = new Graph();
graph.addVertex('Nayagarah');
graph.addVertex('Bhanjangar');
graph.addVertex('Berhampur');
graph.addVertex('Baripada');
graph.addVertex('Cuttack');
graph.addVertex('Puri');
graph.addVertex('Bhubaneswar');
graph.addEdge('Bhanjangar', 'Bhubaneswar')
graph.addEdge('Berhampur', 'Bhubaneswar')
graph.removeEdge('Bhanjangar', 'Bhubaneswar');

console.log(graph.adjacencyList);
