// Weighted Graph
// Add Edge and Add Vertex


class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(v){
        if(!this.adjacencyList[v])
            this.adjacencyList[v]= [];
    }
    addEdge(v1, v2, weight){
        this.adjacencyList[v1] = [...this.adjacencyList[v1], {node: v2, weight}];
        this.adjacencyList[v2] = [...this.adjacencyList[v2], {node: v1, weight}];
    }
}

let wGraph = new WeightedGraph();

wGraph.addVertex("A");
wGraph.addVertex('B');
wGraph.addVertex('C');

wGraph.addEdge('A', 'B', 200);
wGraph.addEdge('A', 'C', 300);
wGraph.addEdge('B', 'C', 100);

console.log(wGraph.adjacencyList);
