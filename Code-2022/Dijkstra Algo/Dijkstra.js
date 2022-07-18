// Dijkstra Algo

// Here need to add Quick Priority Queue and Eeach time 
// we insort it sorts the array based on Priority


// then we will add a weighted graph to hold the graph
// POST that I will add traversal algo (Dijkstra) for finding the sortest 
// path for Source to destination and alog side with other nodes.

class PriorityQueue{
    constructor(){
        this.value = [];    
    }

    enQueue(val, priority){
        this.value.push({val, priority});
        this.sort();
    }

    deQueue(){
        return this.value.shift();
    }
    sort(){
        return this.value.sort((a,b) => a.priority - b.priority);
    }
       
}

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
wGraph.addVertex('D');
wGraph.addVertex('E');
wGraph.addVertex('F');

wGraph.addEdge('A', 'B', 4);
wGraph.addEdge('A', 'C', 2);
wGraph.addEdge('B', 'E', 3);
wGraph.addEdge('C', 'D', 2);
wGraph.addEdge('C', 'F', 4);
wGraph.addEdge('D', 'E', 3);
wGraph.addEdge('D', 'F', 1);
wGraph.addEdge('E', 'F', 1);

console.log(wGraph.adjacencyList);
