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

    Dijkstra(start, end){
        const node = new PriorityQueue();
        const distance = {};
        const previous = {};
        let smallestNode;
        let path = [];

        // Initialize the distance Object
        for(let vertex in this.adjacencyList){
            let temp = vertex === start ? 0 : Infinity;
            distance[vertex] = temp;
            node.enQueue(vertex, temp);
            previous[vertex] = null;
        }

        // Start Looping Unless the Priority Queuye is Empty
        while(node.value.length){
            smallestNode =  node.deQueue().val;
            if(smallestNode === end){
                // We need to build Shortest path and return it
                console.log(distance, previous);
                while(previous[smallestNode]){
                    path.push(smallestNode);
                    smallestNode = previous[smallestNode];
                }
                break;
            }
            if(smallestNode || distance[smallestNode] !== Infinity){
                for(let neighbor in this.adjacencyList[smallestNode]){
                    let nxtNode = this.adjacencyList[smallestNode][neighbor]
                    // Calculate the New Distance to neighbor node
                    let candidate = distance[smallestNode] + nxtNode.weight;
                    if(candidate < distance[nxtNode.node]){
                        distance[nxtNode.node] = candidate;
                        previous[nxtNode.node] =  smallestNode;
                        node.enQueue(nxtNode.node, candidate);
                    }
                }
            }
        }
        return path.concat(smallestNode).reverse();
        
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
wGraph.Dijkstra('A', 'E');
