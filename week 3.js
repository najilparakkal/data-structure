// class node{
//     constructor(data){
//         this.data = data
//         this.left = null
//         this.right = null
//     }
// }
// class BinerySearchTree{
//     constructor(){
//         this.root = null
//     }
//     isEmpty(){
//         return this.root === null
//     }
//     insert(data){
//         const newNod = new node(data)
//         if(this.isEmpty()){
//             this.root = newNod
//         }else{
//             this.insertNode(this.root,newNod)
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
//     levelOrder(){
//         let queue = []
//         queue.push(this.root)
//         while(queue.length){
//             let currend = queue.shift()
//             console.log(currend.data);
//             if(currend.left){
//                 queue.push(currend.left)
//             }
//             if(currend.right){
//                 queue.push(currend.right)
//             }
//         }
//     }
//     searchData(root,data){
//         if(!root){
//             return false
//         }
//         if(root.data === data){
//             return true
//         }else if(root.data > data){
//             return this.searchData(root.left,data)
//         }else{
//             return this.searchData(root.right,data)
//         }
//     }
//     min(root){
//         if(!root.left ){
//             return root.data
//         }else{
//           return  this.min(root.left)
//         }
//     }
//     remove(data){
//         this.removeData(this.root,data)
//     }
//     removeData(root,data){
//         if(root === null){
//             return root
//         }
//         if(root.data>data){
//             this.left = this.removeData(root.left,data)
//         }else if(root.data<data){
//             this.right = this.removeData(root.right,data)
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
//             root.right = this.removeData(root.right,root.data)
//         }
//         return root
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
// }
// const bst = new BinerySearchTree()
// bst.insert(10)
// bst.insert(5)
// bst.insert(20)
// bst.insert(3)
// bst.insert(8)
// bst.levelOrder()
// console.log(bst.searchData(bst.root,10));
// console.log(bst.searchData(bst.root,3));
// console.log(bst.searchData(bst.root,100));
// console.log(bst.searchData(bst.root,20));
// console.log(bst.searchData(bst.root,5));
// console.log(bst.min(bst.root));


// class  listGraph{
//     constructor(){
//         this.list  = {}
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
//     hasEdge(vertex1,vertex2){
//         return (this.list[vertex1].has(vertex2)&& this.list[vertex2].has(vertex1))
//     }
//     removeEdge(vertex1,vertex2){
//         this.list[vertex1].delete(vertex2)
//         this.list[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if(!this.list[vertex]){
//             return undefined
//         }
//         for(let vert of this.list[vertex]){
//             this.removeEdge(vert,vertex)
//         }
//         delete this.list[vertex]
//     }
//     display(){
//         for(let vertex in this.list){
//             console.log(vertex + " =>"+[...this.list[vertex]]);
//         }
//     }
// }
// const graph = new listGraph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addEdges("A","B")
// graph.addEdges("B","C")
// graph.removeVertex("C")
// graph.display()



// class MinHeap{
//     constructor(){
//         this.heap = []
//     }
//     getParent(index){
//         return Math.floor((index-1)/2)
//     }
//     getLeftChild(index){
//         return 2* index+1
//     }
//     getRightChild(index){
//         return 2 * index +2
//     }
//     swap(index1,index2){
//         let temp = this.heap[index1]
//         this.heap[index1] = this.heap [ index2]
//         this.heap[index2] = temp
//     }
//     insert(data){
//         this.heap.push(data)
//         this.heapifyUp(this.heap.length-1)
//     }
//     heapifyUp(index){
//         let parent = this.getParent(index)
//         if(parent< this.heap.length && this.heap[parent]> this.heap[index]){
//             this.swap(index,parent)
//             this.heapifyUp(parent)
//         }
//     }
//     remove(){
//         if(this.heap.length === 0){
//             return null
//         }
//         if(this.heap.length === 1){
//            return this.heap.pop()
//         }
//         let min = this.heap [ 0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return min
//     }
//     heapifyDown(index){
//         let left  = this.getLeftChild(index)
//         let right =this.getRightChild(index)
//         let min = index
//         if(left < this.heap.length && this.heap[left]<this.heap[min]){
//             min = left
//         }
//         if(right<this.heap.length && this.heap[right]<this.heap[min]){
//             min = right
//         }
//         if(min !==  index){
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
// heap.insert(17)
// heap.insert(10)
// heap.insert(30)
// heap.insert(28)
// heap.insert(6)
// console.log(heap.heap);
// heap.remove()
// console.log(heap.heap);
// console.log(heap.heapSort());



// class TrieNode {
//     constructor() {
//         this.child = {}
//         this.end = false
//     }
// }
// class Trie {
//     constructor() {
//         this.root = new TrieNode()
//     }
//     insert(word) {
//         let currend = this.root
//         for (let i = 0; i < word.length; i++) {
//             let char = word[i]
//             if (!currend.child[char]) {
//                 currend.child[char] = new TrieNode
//             }
//             currend = currend.child[char]
//         }
//         currend.end = true
//     }
//     search(word) {
//         let currend = this.root
//         for (let i = 0; i < word.length; i++) {
//             let char = word[i]
//             if (!currend.child[char]) {
//                 return false
//             }
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
//         }
//         return true
//     }
// }



