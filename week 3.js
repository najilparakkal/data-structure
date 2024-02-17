// class node {
//     constructor(data) {
//         this.data = data
//         this.left = null
//         this.right = null
//     }
// }
// class BST {
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
//     height(root) {
//         if (!root) {
//             return -1
//         } else {
//             let left = this.height(root.left)
//             let right = this.height(root.right)
//             return Math.max(left, right) + 1
//         }
//     }
//     searchData(root, data) {
//         if(!root){
//             return 
//         }
//         if(root.data === data){
//             return true
//         }else if(root.data>data){
//             return this.searchData(root.left,data)
//         }else{
//             return this.searchData(root.right,data)
//         }
//     }
//     min(root){
//         if(!root.left){
//             return root.data
//         }else{
//             this.min(root.left)
//         }
//     }
//     remove(data){
//         this.removeNode(this.root,data)
//     }
//     removeNode(root,data){
//         if(!root){
//             return root
//         }
//         if(root.data>data){
//             root.left = this.removeNode(root.left,data)
//         }else if (root.data < data){
//             root.right = this.removeNode(root.right,data)
//         }else{
//             if(!root.right&& !root.left){
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
//     validat(){
//         return this.isValid(this.root,-Infinity,Infinity)
//     }
//     isValid(root,min,max){
//         if(!root){
//             return true
//         }
//         if(root.data>max || root.data< min){
//             return false
//         }
//         return this.isValid(root.left,min ,root.data)  && this.isValid(root.right,root.data,max)
//     }
//     levelOrder(){
//         let queue = []
//         queue.push(this.root)
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.data);
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }
// }
// const tree = new BST()
// tree.insert(10)
// tree.insert(5)
// tree.insert(20)
// tree.insert(8)
// tree.insert(3)
// tree.remove(5)
// tree.levelOrder()
// console.log(tree.isValid());


// class graph {
//     constructor(){
//         this.list = {}
//     }
//     addVertex(vertex){
//         if(!this.list[vertex]){
//             this.list[vertex] = new Set()
//         }
//     }
//     addEdges(vertex1,vertex2){
//         if(!this.list[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.list[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.list[vertex1].add(vertex2)
//         this.list[vertex2].add(vertex1)
//     }
//     removeEdges(vertex1,vertex2){
//         this.list[vertex1].delete(vertex1)
//         this.list[vertex2].delete(vertex2)
//     }
//     removeVertex(vertex){
//         if(!this.list[vertex]){
//             return null
//         }
//         for(let node of this.list[vertex]){
//             this.removeEdges(node,vertex)
//         }
//         delete this.list[vertex]
//     }
//     bfs(vertex){
//         let queue = [vertex]
//         let visited = {}
//         visited[vertex] = true
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr);
//             for(let neighbor of this.list[curr]){
//                 if(!visited[neighbor]){
//                     visited[neighbor] = true
//                     queue.push(neighbor)
//                 }
//             }
//         }
//     }
//     display(){
//         for(let vert in this.list){
//             console.log(vert + "=> "+ [...this.list[vert]]);
//         }
//     }
// }

// const gr = new graph()
// gr.addVertex("A")
// gr.addVertex("B")
// gr.addVertex("C")
// gr.addEdges("A","B")
// gr.addEdges("C","B")
// gr.display()
// gr.bfs("A")

// class trieNode{
//     constructor(){
//         this.child = {}
//         this.end = false
//     }
// }
// class Trie{
//     constructor(){
//         this.root = new trieNode()
//     }
//     insert(word){
//         let curr = this.root
//         for(let i = 0;i<word.length;i++){
//             let char = word[i]
//             if(!curr.child[char]){
//                 curr.child[char] = new trieNode()
//             }
//             curr = curr.child[char]
//         }
//         curr.end = true
//     }
//     serch(word){
//         let curr = this.root
//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!curr.child[char]){
//                 return false
//             }
//             curr = curr.child[char]
//         }
//         return curr.end
//     }
//     prefix(word){
//         let curr = this.root
//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!curr.child[char]){
//                 return false
//             }
//             curr = curr.child[char]
//         }
//         return true
//     }
// }
// const trie = new Trie()
// trie.insert("HELLO")
// console.log(trie.prefix("HEL"));
// console.log(trie.serch("HEL"));


// class Heap{
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
//         if(parent<this.heap.length && this.heap[parent]>this.heap[index]){
//             this.swap(parent,index)
//             this.heapifyUp(parent)
//         }
//     }
//     remove(){
//         if(this.heap.length ===0){
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
// }
// const heap = new Heap()
// heap.insert(10)
// heap.insert(15)
// heap.insert(20)
// heap.insert(2)
// heap.remove()
// console.log(heap.heap);


//  class priorityQueue{
//     constructor(){
//         this.heap = []
//     }
//         getParent(index){
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
//         this.heapifyUp(this.heap.length-1)
//     }
//     heapifyUp(index){
//         let parent = this.getParent(index)
//         while(index >0 && this.heap[parent].priority >this.heap[index].priority){
//             this.swap(index,parent)
//             index = parent
//         }
//     }
//     remove(){
//         if(this.heap.length ===0){
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
//         if(left<this.heap.length && this.heap[left].priority<this.heap[min].priority){
//             min = left
//         }
//         if(right<this.heap.length && this.heap[right].priority<this.heap[min].priority){
//             min = right
//         }
//         if(min != index){
//             this.swap(min,index)
//             this.heapifyDown(min)
//         }
//     }
//     isEmpty(){
//         return this.heap.length === 0  
//     }
// }
// const queue = new priorityQueue()
// queue.insert("Task 1", 3 )
// queue.insert("Task 2", 1 )
// queue.insert("Task 3", 2 )
// while(!queue.isEmpty()){
//     let item = queue.remove()
//     console.log(`${item.data} => priority ${item.priority}`);
// }