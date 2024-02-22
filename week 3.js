// class node {
//     constructor(data){
//         this.data = data
//         this.left = null
//         this.right =  null
//     }
// }
// class BinerySearchTreee{
//     constructor(){
//         this.root = null
//     }
//     isEmpty(){
//         return this.root === null
//     }
//     insert(data){
//         let newNode = new node(data)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(root,node){
//         if(root.data>node.data){
//             if(root.left === null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
//     search(root,data){
//         if(root.data === data){
//             return true
//         }else if(root.data>data){
//             return this.search(root.left,data)
//         }else{
//             return this.search(root.right,data)
//         }
//     }
//     min(root){
//         if(!root.left){
//             return root.data
//         }else{
//             this.min(root.left)
//         }
//     }
//     max(root){
//         if(!root.right){
//             return root.data
//         }else{
//             this.max(root.right)
//         }
//     }
//     remove(data){
//         this.removeNode(this.root,data)
//     }
//     removeNode(root,data){
//         if(!root){
//             return null
//         }
//         if(root.data>data){
//             root.left = this.removeNode(root.left,data)
//         }else if (root.data<data){
//             root.right = this.removeNode(root.right,data)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }
//             root.data = this.min(root.right)
//             root.right = this.removeNode(root.right,root.data)
//         }
//         return root
//     }
//     levelOreder(){
//         let queue = []
//         queue.push(this.root)
//         while(queue.length){
//             let current = queue.shift()
//             console.log(current.data);
//             if(current.left){
//                 queue.push(current.left)
//             }
//             if(current.right){
//                 queue.push(current.right)
//             }
//         }
//     }
//     preOrder(root){
//         if(root){
//             console.log(root.data);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.data);
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.data);
//         }
//     }
//     validate(){
//         return this.isValid(this.root,-Infinity,Infinity)
//     }
//     isValid(root,min,max){
//         if(!root){
//             return true
//         }
//         if(root.data<min || root.data>max){
//             return false
//         }
//         return this.isValid(root.left,min,root.data) && this.isValid(root.right,root.data,max)
//     }
//     height(root){
//         if(root === null){
//             return -1
//         }else{
//             let left = this.height(root.left)
//             let right = this.height(root.right)
//             return Math.max(left,right)+1
//         }
//     }
// }
// const tree = new BinerySearchTreee()
// tree.insert(10)
// tree.insert(20)
// tree.insert(5)
// tree.insert(3)
// tree.insert(8)
// console.log(tree.height(tree.root));



// class MinHeap{
//     constructor(){
//         this.heap = []
//     }
//     getParent(index){
//         return Math.floor((index-1)/2)
//     }
//     getLeft(index){
//         return 2*index+1
//     }
//     getRight(index){
//         return 2*index+2
//     }
//     swap(index1,index2){
//         let temp = this.heap[index1]
//         this.heap[index1] = this.heap[index2]
//         this.heap[index2] = temp
//     }
//     insert(data){
//         this.heap.push(data)
//         this.heapifyUp(this.heap.length-1)
//     }
//     heapifyUp(index){
//         let parent = this.getParent(index)
//         if(parent<this.heap.length && this.heap[parent] > this.heap[index]){
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
//         let left = this.getLeft(index)
//         let right = this.getRight(index)
//         let min = index
//         if(left <this.heap.length && this.heap[left] < this.heap[min]){
//             min = left
//         }
//         if(right<this.heap.length && this.heap[right] < this.heap[min]){
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
// const heap = new MinHeap()
// heap.insert(18)
// heap.insert(32)
// heap.insert(2)
// heap.insert(53)
// heap.insert(22)
// console.log(heap.heapSort());


// class node {
//     constructor() {
//         this.child = {}
//         this.end = false
//     }
// }
// class Ttrie {
//     constructor() {
//         this.root = new node()
//     }
//     insert(word) {
//         let current = this.root
//         for (let i = 0; i < word.length; i++) {
//             let char = word[i]
//             if (!current.child[char]) {
//                 current.child[char] = new node()
//             }
//             current = current.child[char]
//         }
//         current.end = true
//     }
//     search(word){
//         let current = this.root
//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!current.child[char]){
//                 return false
//             }
//             current = current.child[char]
//         }
//         return current.end
//     }
//     prefix(word){
//         let current = this.root
//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!current.child[char]){
//                 return false
//             }
//             current = current.child[char]
//         }
//         return true
//     }
// }
// const trie = new Ttrie()
// trie.insert("HELLO")
// console.log(trie.search("HEL"));
// console.log(trie.prefix("HELL"));



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
//     hasEdges(vertex1, vertex2) {
//         return (this.list[vertex1].has(vertex2) && this.list[vertex2].has(vertex1))
//     }
//     removeEdges(vertex1, vertex2) {
//         this.list[vertex1].delete(vertex2)
//         this.list[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex) {
//         if (!this.list[vertex]) {
//             return null
//         }
//         for (let ver in this.list[vertex]) {
//             this.removeEdges(ver, vertex)
//         }
//         delete this.list[vertex]
//     }
//     bfs(vertex) {
//         let visited = {}
//         let queue = [vertex]
//         visited[vertex] = true
//         while (queue.length) {
//             let current = queue.shift()
//             console.log(current);
//             for (let siblings of this.list[current]) {
//                 if (!visited[siblings]) {
//                     visited[siblings] = true
//                     queue.push(siblings)
//                 }
//             }
//         }
//     }
//     display(){
//         for(let vertex in this.list){
//             console.log(vertex +"= >"+[...this.list[vertex]]);
//         }
//     }
//     isEmpty() {
//         return this.list.length === 0
//     }
// }
// const graph = new Graph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addEdges("A","B")
// graph.addEdges("C","B")
// graph.display()
// graph.bfs("A")

// class PriorityQueue{
//     constructor(){
//         this.heap = []
//     }
//     getParentx(index){
//         return Math.floor((index-1)/2)
//     }
//     getLeft(index){
//         return 2*index+1
//     }
//     getRight(index){
//         return 2*index+2
//     }
//     swap(index1,index2){
//         let temp = this.heap[index1]
//         this.heap[index1] = this.heap[index2]
//         this.heap[index2] = temp
//     }
//     insert(data,priority){
//         let item = {data,priority}
//         this.heap.push(item)
//         this.bubleUp(this.heap.length-1)
//     }
//     bubleUp(index){
//         let parent = this.getParentx(index)
//         while(index>0 && this.heap[index].priority< this.heap[parent].priority){
//             this.swap(parent,index)
//             index = parent
//         }
//     }
//     remove(){
//         if(this.heap.length === 0 ){
//             return null
//         }
//         if(this.heap.length === 1){
//             return this.heap.pop()
//         }
//         let min  = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.bubleDown(0)
//         return min
//     }
//     bubleDown(index){
//         let left = this.getLeft(index)
//         let right = this.getRight(index)
//         let min = index
//         if(left<this.heap.length && this.heap[left].priority< this.heap[min]){
//             min  =left
//         }
//         if(right< this.heap.length && this.heap[right].priority<this.heap[min]){
//             min = right
//         }
//         if(min != index){
//             this.swap(index,min)
//             this.bubleDown(min)
//         }
//     }
// }

// const queue = new PriorityQueue()
// queue.insert(10,2)
// queue.insert(20,1)
// queue.insert(30,3)
// queue.insert(40,5)
// console.log(queue.heap);