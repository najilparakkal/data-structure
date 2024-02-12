// class node {
//     constructor(data) {
//         this.data = data
//         this.left = null
//         this.right = null
//     }
// }

// class BinerySearchTree {
//     constructor() {
//         this.root = null
//     }
//     isEmpty() {
//         return this.root === null
//     }
//     insert(data) {
//         let newNode = new node(data)
//         if (this.isEmpty()) {
//             this.root = newNode
//         } else {
//             this.newNode(this.root, newNode)
//         }
//     }
//     newNode(root, node) {
//         if (root.data > node.data) {
//             if (root.left === null) {
//                 root.left = node
//             } else {
//                 this.newNode(root.left, node)
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = node
//             } else {
//                 this.newNode(root.right, node)
//             }
//         }
//     }
//     searchData(root, data) {
//         if (!root) {
//             return false
//         } else {
//             if (root.data === data) {
//                 return true
//             } else if (root.data > data) {
//                 return this.searchData(root.left, data)
//             } else {
//                 return this.searchData(root.right, data)
//             }
//         }
//     }
//     min(root) {
//         if (!root.left) {
//             return root.data
//         } else {
//             return this.min(root.left)
//         }
//     }
//     remove(data) {
//         this.removeNode(this.root,data)
//     }
//     removeNode(root, data) {
//         if (root === null) {
//             return root
//         }
//         if (data < root.data) {
//             root.left = this.removeNode(root.left, data)
//         } else if (data > root.data) {
//             root.right = this.removeNode(root.right,data)
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
//             root.right = this.removeNode(root.right, root.data)
//         }
//         return root
//     }
//     levelOrder() {
//         let queue = []
//         queue.push(this.root)
//         while (queue.length) {
//             let curr = queue.shift()
//             console.log(curr.data);
//             if (curr.left) {
//                 queue.push(curr.left)
//             }
//             if (curr.right) {
//                 queue.push(curr.right)
//             }
//         }
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
// }
// const bst = new BinerySearchTree()
// bst.insert(10)
// bst.insert(20)
// bst.insert(5)
// bst.insert(8)
// bst.insert(3)
// bst.levelOrder()
// console.log(bst.searchData(bst.root, 10));
// console.log(bst.searchData(bst.root, 20));
// console.log(bst.searchData(bst.root, 5));
// console.log(bst.searchData(bst.root, 8));
// console.log(bst.searchData(bst.root, 3));
// console.log(bst.min(bst.root));
// bst.remove(5)
// bst.levelOrder()



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
//         return (
//             this.list[vertex1].has(vertex2) && this.list[vertex2].has(vertex1)
//         )
//     }
//     removeEdge(vertex1, vertex2) {
//         this.list[vertex1].delete(vertex2)
//         this.list[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex) {
//         if (!this.list[vertex]) {
//             return undefined
//         }
//         for (let vert of this.list[vertex]) {
//             this.removeEdge(vert, vertex)
//         }
//         delete this.list[vertex]
//     }
//     display() {
//         for (let vertex in this.list) {
//             console.log(vertex + " => " + [...this.list[vertex]]);
//         }
//     }
// }
// const graph = new Graph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addEdges("A", "B")
// graph.addEdges("B", "C")
// graph.display()
// console.log(graph.hasEdge("A", "B"));
// graph.removeVertex("B")
// graph.display()





// class MinHeap {
//     constructor() {
//         this.heap = []
//     }
//     getParent(index) {
//         return Math.floor((index - 1) / 2)
//     }
//     getLeft(index){
//         return 2*index+1
//     }
//     getRight(index){
//         return 2*index +2
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
//         if (parent >= 0 && this.heap[parent] > this.heap[index]) {
//             this.swap(index, parent)
//             this.heapifyUp(parent)
//         }
//     }
//     remove() {
//         if (this.heap.length === 0) {
//             return null
//         }
//         if(this.heap.length === 1){
//             return this.heap.pop()
//         }
//         let min = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return min
//     }
//     heapifyDown(index){
//         let left = this.getLeft(index)
//         let right = this.getRight(index)
//         let min = index
//         if(left<this.heap.length && this.heap[left]<this.heap[min]){
//             min = left
//         }
//         if(right<this.heap.length && this.heap[right]<this.heap[min]){
//             min = right
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
// const minHeap = new MinHeap()
// minHeap.insert(10)
// minHeap.insert(5)
// minHeap.insert(8)
// minHeap.insert(20)
// minHeap.insert(3)
// console.log(minHeap.heap);
// minHeap.remove()
// console.log(minHeap.heap);
// console.log(minHeap.heapSort());

