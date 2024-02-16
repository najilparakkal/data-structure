// class node {
//     constructor(data) {
//         this.data = data
//         this.left = null
//         this.right = null
//     }
// }
// class Tree {
//     constructor() {
//         this.root = null
//     }
//     isEmpty() {
//         return this.root === null
//     }
//     insert(data) {
//         const newNode = new node(data)
//         if (this.isEmpty()) {
//             this.root = newNode
//         } else {
//             this.insertNode(this.root, newNode)
//         }
//     }
//     insertNode(root, node) {
//         if (root.data > node.data) {
//             if (root.left === null) {
//                 root.left = node
//             } else {
//                 this.insertNode(root.left, node)
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = node
//             } else {
//                 this.insertNode(root.right, node)
//             }
//         }
//     }
//     searchData(root, data) {
//         if (!root) {
//             return false
//         }
//         if (root.data === data) {
//             return true
//         } else if (root.data > data) {
//             return this.searchData(root.left, data)
//         } else {
//             return this.searchData(root.right, data)
//         }
//     }
//     min(root) {
//         if (!root.left) {
//             return root.data
//         } else {
//             return this.min(root.left)
//         }
//     }
//     max(root) {
//         if (!root.right) {
//             return root.data
//         } else {
//             return this.max(root.right)
//         }
//     }
//     remove(data) {
//         this.removeData(this.root, data)
//     }
//     removeData(root, data) {
//         if (!root) {
//             return root
//         }
//         if (root.data > data) {
//             root.left = this.removeData(root.left, data)
//         } else if (root.data < data) {
//             root.right = this.removeData(root.right, data)
//         } else {
//             if (!root.left && !root.right) {
//                 return null
//             }
//             if (!root.left) {
//                 return root.right
//             } else if (!root.right) {
//                 return root.left
//             }
//             root.data = this.min(root.right)
//             root.right = this.removeData(root.right, root.data)
//         }
//         return root
//     }
//     validate() {
//         return this.isValid(this.root, -Infinity, Infinity)
//     }
//     isValid(root, min, max) {
//         if (!root) {
//             return true
//         }
//         if (root.data < min || root.data > max) {
//             return false
//         }
//         return this.isValid(root.left, min, root.data) && this.isValid(root.right, root.data, max)
//     }
//     preOrder(root) {
//         if (root) {
//             console.log(root.data);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root) {
//         if (root) {
//             this.inOrder(root.left)
//             console.log(root.data);
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root) {
//         if (root) {
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.data);
//         }
//     }
//  height(root){
//     if(root === null){
//         return -1
//     }else{
//         let left = this.height(root.left)
//         let right = this.height(root.right)
//         return Math.max(left,right)+1
//     }
//  }
//     levelOrder() {
//         let queue = []
//         queue.push(this.root)
//         while (queue.length) {
//             let currend = queue.shift()
//             console.log(currend.data);
//             if (currend.left) {
//                 queue.push(currend.left)
//             }
//             if (currend.right) {
//                 queue.push(currend.right)
//             }
//         }
//     }
// }
// const tree = new Tree()
// tree.insert(10)
// tree.insert(20)
// tree.insert(5)
// tree.insert(8)
// tree.insert(3)
// tree.remove(5)
// tree.levelOrder(tree.root)
// console.log(tree.validate());
// console.log("Height of node with data 10:", tree.height(tree.root));


// class Graph {
//     constructor() {
//         this.list = {}
//     }
//     addVertex(vertex) {
//         if (!this.list[vertex]) {
//             this.list[vertex] = new Set()
//         }
//     }
//     addEdges(vertex1, vertex2) {
//         if (!this.list[vertex1]) {
//             this.addVertex(vertex1)
//         }
//         if (!this.list[vertex2]) {
//             this.addVertex(vertex2)
//         }
//         this.list[vertex1].add(vertex2)
//         this.list[vertex2].add(vertex1)
//     }
//     hasEdge(vertex1, vertex2) {
//         return (this.list[vertex1].has(vertex2) && this.list[vertex2].has(vertex1))
//     }
//     removeEdge(vertex1, vertex2) {
//         this.list[vertex1].delete(vertex2)
//         this.list[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex) {
//         if (!this.list[vertex]) {
//             return null
//         }
//         for (let vert of this.list[vertex]) {
//             this.removeEdge(vert, vertex)
//         }
//         delete this.list[vertex]
//     }

//     bfs(vertex){
//         let visited = {}
//         let queue = [vertex]
//         visited[vertex] = true
//         while(queue.length){
//             let currend = queue.shift()
//             console.log(currend);
//             for(let neighbor of this.list[currend]){
//                 if(!visited[neighbor]){
//                     queue.push(neighbor)
//                     visited[neighbor] = true
//                 }
//             }
//         }
//     }
//     desplay() {
//         for (let vert in this.list) {
//             console.log(vert + " =>" + [...this.list[vert]]);
//         }
//     }
// }
// const graph = new Graph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addEdges("A", "B")
// graph.addEdges("B", "C")
// graph.bfs("A")



// class MinHeap {
//     constructor() {
//         this.heap = []
//     }
//     getParent(index) {
//         return Math.floor((index - 1) / 2)
//     }
//     getleft(index) {
//         return 2 * index + 1
//     }
//     getRight(index) {
//         return 2 * index + 2
//     }
//     swap(index1, index2) {
//         let temp = this.heap[index1]
//         this.heap[index1] = this.heap[index2]
//         this.heap[index2] = temp
//     }
//     insert(data) {
//         this.heap.push(data)
//         this.heapifyUp(this.heap.length - 1)
//     }
//     heapifyUp(index) {
//         let parent = this.getParent(index)
//         if (parent <= this.heap.length && this.heap[parent] > this.heap[index]) {
//             this.swap(parent, index)
//             this.heapifyUp(parent)
//         }
//     }
//     remove() {
//         if (this.heap.length === 0) {
//             return null
//         }
//         if (this.heap.length === 1) {
//             return this.heap.pop()
//         }
//         let min = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return min
//     }
//     heapifyDown(index) {
//         let left = this.getleft(index)
//         let right = this.getRight(index)
//         let min = index
//         if(left< this.heap.length && this.heap[left]<this.heap[min]){
//             min = left
//         }
//         if(right<this.heap.length && this.heap[right]<this.heap[min]){
//             min= right
//         }
//         if(min != index){
//             this.swap(min,index)
//             this.heapifyDown(min)
//         }
//     }
//     heapSort(){
//         let arr = []
//         while(this.heap.length){
//             arr.push(this.remove())
//         }
//         return arr
//     }
// }
// const heap = new MinHeap()
// heap.insert(10)
// heap.insert(20)
// heap.insert(15)
// heap.insert(4)
// heap.insert(2)
// heap.remove(15)
// console.log(heap.heap);
// console.log(heap.heapSort());





// class trieNode {
//     constructor() {
//         this.child = {}
//         this.end = false
//     }
// }
// class Trie {
//     constructor() {
//         this.root = new trieNode()
//     }
//     insert(word) {
//         let currend = this.root
//         for (let i = 0; i < word.length; i++) {
//             let char = word[i]
//             if (!currend.child[char]) {
//                 currend.child[char] = new trieNode()
//             }
//             currend = currend.child[char]
//         }
//         currend.end = true
//     }
//     serach(word) {
//         let currend = this.root
//         for (let i = 0; i < word.length; i++) {
//             let char = word[i]
//             if (!currend.child[char]) {
//                 return false
//             }
//             currend = currend.child[char]
//         }
//         return currend.end
//     }
//     prefix(word) {
//         let currend = this.root
//         for (let i = 0; i < word.length; i++) {
//             let char = word[i]
//             if (!currend.child[char]) {
//                 return false
//             }
//             currend = currend.child[char]
//         }
//         return true
//     }
// }
// const trie = new Trie()
// trie.insert("HELLO")
// console.log(trie.serach("HELLO"));
// console.log(trie.prefix("HeL"));



// class priorityQueue {
//     constructor() {
//         this.heap = []
//     }
//     getParent(index) {
//         return Math.floor((index - 1) / 2)
//     }
//     left(index) {
//         return 2 * index + 1
//     }
//     right(index) {
//         return 2 * index + 2
//     }
//     swap(index1, index2) {
//         let temp = this.heap[index1]
//         this.heap[index1] = this.heap[index2]
//         this.heap[index2] = temp
//     }
//     insert(data, priority) {
//         let item = { data, priority }
//         this.heap.push(item)
//         this.heapfyUp(this.heap.length - 1)
//     }
//     heapfyUp(index) {
//         let parent = this.getParent(index)
//         while (index > 0 && this.heap[index].priority < this.heap[parent].priority) {
//             this.swap(index, parent)
//             index = parent
//         }
//     }
//     remove() {
//         if (this.heap.length === 0) {
//             return null
//         }
//         if (this.heap.length === 1) {
//             return this.heap.pop()
//         }
//         let min = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return min
//     }
//     heapifyDown(index) {
//         let left = this.left(index)
//         let right = this.right(index)
//         let min = index
//         if (left < this.heap.length && this.heap[left].priority > this.heap[min].priority) {
//             min = left
//         }
//         if (right < this.heap.length && this.heap[right].priority > this.heap[min].priority) {
//             min = right
//         }
//         if (min !== index) {
//             this.swap(min, index)
//             this.heapifyDown(min)
//         }
//     }
//     isEmpty(){
//         return this.heap.length === 0
//     }
// }
// const priority = new priorityQueue();

// priority.insert("Task 1", 3);
// priority.insert("Task 2", 1);
// priority.insert("Task 3", 2);

// while (!priority.isEmpty()) {
//     const task = priority.remove();
//     console.log(`Processing ${task.value} with priority ${task.priority}`);
// }