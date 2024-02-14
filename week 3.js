// class TreeNode {
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
//         const newNode = new TreeNode(data)
//         if (this.isEmpty()) {
//             this.root = newNode
//         } else {
//             this.insertNode(this.root, newNode)
//         }
//     }
//     insertNode(root, newNode) {
//         if (root.data > newNode.data) {
//             if (root.left === null) {
//                 root.left = newNode
//             } else {
//                 this.insertNode(root.left, newNode)
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = newNode
//             } else {
//                 this.insertNode(root.right, newNode)
//             }
//         }
//     }
//     searchData(root,data){
//         if(!root){
//             return false
//         }
//         if(root.data === data){
//             return true
//         }else if (root.data> data){
//             return this.searchData(root.left,data)
//         }else{
//             return this.searchData(root.right,data)
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
//         this.removeNode(this.root, data)
//     }
//     removeNode(root, data) {
//         if (root === null) {
//             return root
//         }
//         if (root.data > data) {
//             root.left = this.removeNode(root.left, data)
//         } else if (root.data < data) {
//             root.right = this.removeNode(root.right, data)
//         } else {
//             if (!root.left &&!root.right) {
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
//     Validate(){
//         return this.isValid(this.root,-Infinity,Infinity)
//     }
//     isValid(root,min,max){
//         if(!root){
//             return true
//         }
//         if(root.data<min || root.data >max){
//             return false
//         }
//         return this.isValid(root.left,min,root.data) && this.isValid(root.right,root.data,max)
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
// const tree = new Tree()
// tree.insert(10)
// tree.insert(20)
// tree.insert(5)
// tree.insert(8)
// tree.insert(3)
// // tree.levelOrder()
// console.log(tree.Validate(tree.root,10));
// tree.postOrder(tree.root)



//adjesenty metrix 
// const metrix = [
//     [0, 1, 0],
//     [1, 0, 1],
//     [0, 1, 0]
// ]
// console.log(metrix[0][1]);

// class GraphList {
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
//     display() {
//         for (let vertex in this.list) {
//             console.log(vertex + " =>" + [...this.list[vertex]]);
//         }
//     }
// }
// const list = new GraphList()
// list.addVertex("A")
// list.addVertex("B")
// list.addVertex("C")
// list.addEdges("A", "B")
// list.addEdges("C", "B")
// console.log(list.hasEdge("A", "B"));
// list.removeVertex("B")
// list.display()


// class MinHeap{
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
//     getLeftChilde(index){
//         return 2*index+1
//     }
//     getRightChild(index){
//         return 2*index+2
//     }
//     insert(data){
//         this.heap.push(data)
//         this.heapifyUp(this.heap.length-1)
//     }
//     heapifyUp(index){
//         let parent = this.getParent(index)
//         if(parent<= this.heap.length && this.heap[parent]> this.heap[index]){
//             this.swap(parent,index)
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
//         let min = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return min
//     }
//     heapifyDown(index){
//         let left = this.getLeftChilde(index)
//         let right = this.getRightChild(index)
//         let min = index
//         if(left< this.heap.length && this.heap[left]<this.heap[min]){
//             min = left
//         }
//         if(right <this.heap.length && this.heap[right]< this.heap[min]){
//             min = right
//         }
//         if(min !== index){
//             this.swap(min,index)
//             this.heapifyDown(min)
//         }
//     }
//     heapArr(arr){
//         for(let i=0;i<arr.length;i++){
//             this.insert(arr[i])
//         }
//     }
//     min(){
//         return this.heap[0]
//     }
//     heapSort(){
//         let arr = []
//         while(this.heap.length){
//             arr.push(this.remove())
//         }
//         return arr
//     }
// }
// const hp = new MinHeap() 
// hp.heapArr([35,63,6,12,10])
// console.log(hp.heap);
// console.log(hp.heapSort());

// class TrieNode{
//     constructor(){
//         this.child = {}
//         this.end = false
//     }
// }
// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }
//     insert(word){
//         let currentNode  =this.root
//         for(let i = 0;i<word.length;i++){
//             let char = word[i]
//             if(!currentNode.child[char]){
//                 currentNode.child[char] = new TrieNode()
//             }
//             currentNode = currentNode.child[char]
//         }
//         currentNode.end = true
//     }
//     search(word){
//         let currentNode = this.root
//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!currentNode.child[char]){
//                 return false
//             }
//             currentNode = currentNode.child[char]
//         }
//         return currentNode.end
//     }
//     prefix(word){
//         let currentNode = this.root
//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!currentNode.child[char]){
//                 return false
//             }
//             currentNode = currentNode.child[char]
//         }
//         return true
//     }
    
// }
// const trie = new Trie()
// trie.insert("HELLO")
// console.log(trie.search("HELLO"));
// console.log(trie.prefix("HEL4"));