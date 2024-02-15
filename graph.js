// adjecency metrix

// const matrixGraph = [
//     [0, 1, 0],
//     [1, 0, 1],
//     [0, 1, 0]
// ]
// console.log(matrixGraph[1][2]);


// adjecency list

// let listGraph = {
//     'A': ["B"],
//     'B': ["A", "C"],
//     'C': ["B"]
// }
// console.log(listGraph["B"]);


class graph{
    constructor(){
        this.adjecencyList = {}
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]=new Set()
        }
    }
    addEdges(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjecencyList[vertex1].has(vertex2)&& this.adjecencyList[vertex2].has(vertex1)
        )
    }
    removeVertex(vertex){
        if(!this.adjecencyList[vertex]){
            return 
        }
        for(let node of this.adjecencyList[vertex]){
            this.removeEdge(vertex,node)
        }
        delete this.adjecencyList[vertex]
    }
    removeEdge(vertex1,vertex2){
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)
    }

    bfs(startVertex) {
        const visited = {};
        const queue = [startVertex];
        visited[startVertex] = true;
        while (queue.length) {
            const currentVertex = queue.shift();
            console.log(currentVertex);
            for (const neighbor of this.adjecencyList[currentVertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
    dfs(startVertex) {
        const visited = {};

        const dfsHelper = (vertex) => {
            console.log(vertex);
            visited[vertex] = true;

            for (const neighbor of this.adjecencyList[vertex]) {
                if (!visited[neighbor]) {
                    dfsHelper(neighbor);
                }
            }
        };

        dfsHelper(startVertex);
    }

    display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex +"->"+[...this.adjecencyList[vertex]]);
        }
    }
}
const gr = new graph()
gr.addVertex("A")
gr.addVertex("B")
gr.addVertex("C")
gr.addEdges("A","B")
gr.addEdges("B","C")
gr.bfs("A")