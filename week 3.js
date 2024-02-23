// class node {
//     constructor(data) {
//         this.data = data
//         this.left = null
//         this.right = null
//     }
// }
// class Bst {
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
//     search(root, data) {
//         if(!root){
//             return false
//         }else{
//             if (root.data === data) {
//                 return true
//             } else if (root.data > data) {
//                 return this.search(root.left, data)
//             } else if (root.data < data) {
//                 return this.search(root.right, data)
//             }
//         }
//     }
//     min(root) {
//         if (!root.left) {
//             return root.data
//         } else {
//             this.min(root.left)
//         }
//     }
//     max(root) {
//         if (!root.right) {
//             return root.data
//         } else {
//             this.max(root.right)
//         }
//     }
//     remove(data) {
//         this.removeData(this.root, data)
//     }
//     removeData(root, data) {
//         if (!root) {
//             return null
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
//     hight(root) {
//         if (root === null) {
//             return -1
//         } else {
//             let left = this.hight(root.left)
//             let right = this.hight(root.right)
//             return Math.max(right, left) + 1
//         }
//     }
//     preOrder(root) {
//         console.log(root.data);
//         this.preOrder(root.left)
//         this.preOrder(root.right)
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
    
// }
// const tree = new Bst()
// tree.insert(10)
// tree.insert(5)
// tree.insert(20)
// tree.insert(3)
// tree.insert(8)
// tree.remove(5)
// console.log(tree.validate());
// console.log(tree.hight(tree.root));
// console.log(tree.search(tree.root,5));
// tree.levelOrder()
 


// class MinHeap{
//     constructor(){
//         this.heap = []
//     }
//     getParent (index){
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
//         this.heap[index1] =  this.heap[index2]
//         this.heap[index2] = temp
//     }
//     insert(data){
//         this.heap.push(data)
//         this.heapifyUp(this.heap.length-1)
//     }
//     heapifyUp(index){
//         let  parent = this.getParent(index)
//         if(parent<this.heap.length && this.heap[parent]>this.heap[index]){
//             this.swap(parent,index)
//             this.heapifyUp(parent)
//         }
//     }
//     remove(){
//         if(this.heap.length === 0){
//             return null
//         }
//         if(this.heap.length ===1){
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
//         if(left<this.heap.length && this.heap[left] >this.heap[min]){
//             min = left
//         }
//         if(right<this.heap.length && this.heap[right] >this.heap[min]){
//             min = right
//         }
//         if(min != index){
//             this.swap(min,index)
//             this.heapifyDown(min)
//         }
//     }

// }


// class Graph{
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
//     hasEdges(vertex1,vertex2){
//         return (this.list[vertex1].has(vertex2) && this.list[vertex2].has(vertex1))
//     }
//     removeEdges(vertex1,vertex2){
//         this.list[vertex1].delete(vertex2)
//         this.list[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if(!this.list[vertex]){
//             return null
//         }
//         for(let vert in this.list[vertex]){
//             this.removeEdges(vert,vertex)
//         }
//         delete this.list[vertex]
//     }
//     bfs(vertex){
//         let visited = {}
//         let queue = [vertex]
//         visited[vertex] = true
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr);
//             for(let childe of this.list[curr]){
//                 if(!visited[childe]){
//                     queue.push(childe)
//                     visited[childe] = true
//                 }
//             }
//         }
//     }
//     display(){
//         for(let vertex in this.list){
//             console.log(vertex +" =>"+[...this.list[vertex]]);
//         }
//     }
// }
// const graph = new Graph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addEdges("A","B")
// graph.addEdges("B","C")
// graph.display()
// graph.bfs("A")


