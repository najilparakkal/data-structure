// class Node {
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
//         const newNode = new Node(data)
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
//         } else if (root.data < data) {
//             return this.searchData(root.right, data)
//         }
//     }
//     max(root) {
//         if (!root.right) {
//             return root.data
//         } else {
//             this.max(root.right)
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
//         this.removeNode(this.root, data)
//     }
//     removeNode(root, data) {
//         if (!root) {
//             return null
//         }
//         if (root.data > data) {
//             root.left = this.removeNode(root.left, data)
//         } else if (root.data < data) {
//             root.right = this.removeNode(root.right, data)
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
//     validate() {
//         return this.isValid(this.root, -Infinity, Infinity)
//     }
//     isValid(root, min, max) {
//         if (!root) {
//             return true
//         }
//         if (root.data > max || root.data < min) {
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
// const tree = new BinerySearchTree()
// tree.insert(10)
// tree.insert(5)
// tree.insert(20)
// tree.insert(8)
// tree.insert(3)
// tree.remove(5)
// tree.levelOrder()
// console.log(tree.validate(tree.root, 20));


// class graph {
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
//     hasEdges(vertex1, vertex2) {
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
//         for (let ver of this.list[vertex]) {
//             this.removeEdge(ver, vertex)
//         }
//         delete this.list[vertex]
//     }
//     display() {
//         for (let vertex in this.list) {
//             console.log(vertex + " =>" + [...this.list[vertex]]);
//         }
//     }
// }
// const gr = new graph()
// gr.addVertex("A")
// gr.addVertex("B")
// gr.addVertex("C")
// gr.addEdges("B","A")
// gr.addEdges("B","C")
// gr.removeVertex("B")
// gr.display()


// class MaxHeap{
//     constructor(){
//         this.heap = []
//     }
//     getParent(index){
//         return Math.floor((index-1)/2)
//     }
//     swap(index1,index2){
//         let temp = this.heap[index1]
//         this.heap[index1] = this.heap[index2]
//         this.heap[index2] = temp
//     }
//     getLeft(index){
//         return 2*index+1
//     }
//     getRight(index){
//         return 2*index +2  
//     }
//     insert(data){
//         this.heap.push(data)
//         this.heapifyUp(this.heap.length-1)
//     }
//     heapifyUp(index){
//         let parent =  this.getParent(index)
//         if(parent<= this.heap.length && this.heap[parent] < this.heap[index]){
//             this.swap(index,parent)
//             this.heapifyUp(parent)
//         }
//     }
//     remove(){
//         if(this.heap.length === 0){
//             return null
//         }
//         if(this.heap.length === 1){
//             return this.heap.pop()
//         }
//        let min = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return min
//     }
//     heapifyDown(index){
//         let left = this.getLeft(index)
//         let right = this.getRight(index)
//         let min = index
//         if(left<this.heap.length && this.heap[left] > this.heap[min]){
//             min = left
//         }
//         if(right<this.heap.length && this.heap[right]> this.heap[min]){
//             min = right
//         }
//         if(min!= index){
//             this.swap(min,index)
//             this.heapifyDown(min)
//         }
//     }

// }
// const heap = new MaxHeap()
// heap.insert(13)
// heap.insert(22)
// heap.insert(43)
// heap.insert(50)
// heap.insert(2)
// heap.remove()
// console.log(heap.heap);

// class trieNode{
//     constructor(){
//         this.child = {}
//         this.end = false
//     }
// }
// class trie{
//     constructor(){
//         this.root = new trieNode()
//     }
//     insert(word){
//         let currend = this.root
//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!currend.child[char]){
//                 currend.child[char] = new trieNode()
//             }
//             currend = currend.child[char]
//         }
//         currend.end = true
//     }
//     search(word){
//         let currend = this.root
//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!currend.child[char]){
//                 return false
//             }
//             currend = currend.child[char]
//         }
//         return currend.end
//     }
//     prefix(word){
//         let currend = this.root
//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!currend.child[char]){
//                 return false
//             }
//             currend = currend.child[char]
//         }
//         return true
//     }
// }
// const tr = new trie()
// tr.insert("HELLO")
// console.log(tr.search("HEL"));
// console.log(tr.prefix("HEL"));