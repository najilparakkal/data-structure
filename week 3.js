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
//     serachData(root,data){
//         if(!root){
//             return null
//         }else{
//             if(root.data === data){
//                 return true
//             }else if (root.data>data){
//                 return this.serachData(root.left,data)
//             }else if (root.data<data){
//                 return this.serachData(root.right,data)
//             }
//         }
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
//     validate(){
//         return this.isValid(this.root,-Infinity,Infinity)
//     }
//     isValid(root,min,max){
//         if(root === null){
//             return true
//         }
//         if(root.data>max || root.data<min){
//             return false
//         }
//         return this.isValid(root.left,min,root.data)&& this.isValid(root.right,root.data,max)
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
//         this.removeData(this.root,data)
//     }
//     removeData(root,data){
//         if(root === null){
//             return null
//         }
//         if(root.data>data){
//             root.left = this.removeData(root.left,data)
//         }else if (root.data< data){
//             root.right = this.removeData(root.right,data)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if (!root.right){
//                 return root.left
//             }
//             root.data = this.min(root.right)
//             root.right = this.removeData(root.right,root.data)
//         }
//         return root
//     }
//     preOreder(root){
//         if(root){
//             console.log(root.data);
//             this.preOreder(root.left)
//             this.preOreder(root.right)
//         }
//     }
//     inOrder(root){
//       if(root){
//         this.inOrder(root.left)
//         console.log(root.data);
//         this.inOrder(root.right)
//       }
//     }
//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.data);
//         }
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
// const tree = new BinerySearchTree()
// tree.insert(10)
// tree.insert(20)
// tree.insert(5)
// tree.insert(8)
// tree.insert(3)
// console.log(tree.validate());
// console.log(tree.height(tree.root));
// tree.remove(5)
// tree.levelOrder()








// class PriorityQueue {
//     constructor() {
//         this.queue = []
//     }
//     getParent(index) {
//         return Math.floor((index - 1) / 2)
//     }
//     getLeft(index) {
//         return 2 * index + 1
//     }
//     getRight(index) {
//         return 2 * index + 2
//     }
//     swap(index1, index2) {
//         let temp = this.queue[index1]
//         this.queue[index1] = this.queue[index2]
//         this.queue[index2] = temp
//     }
//     insert(data, priority) {
//         let item = { data, priority }
//         this.queue.push(item)
//         this.bublup(this.queue.length - 1)
//     }
//     bublup(index) {
//         let parent = this.getParent(index)
//         while (index > 0 && this.queue[parent].priority > this.queue[index].priority) {
//             this.swap(parent, index)
//             index = parent
//         }
//     }
//     remove() {
//         if (this.queue.length === 0) {
//             return null
//         }
//         if(this.queue.length===1){
//             return this.queue.pop()
//         }
//         let min = this.queue[0]
//         this.queue[0] = this.queue.pop()
//         this.bublDown(0)
//         return min
//     }
//     bublDown(index){
//         let left = this.getLeft(index)
//         let right = this.getRight(index)
//         let min = index
//         if(left<this.queue.length && this.queue[left].priority<this.queue[min].priority){
//             min = left
//         }
//         if(right<this.queue.length && this.queue[right].priority<this.queue[min].priority){
//             min = right
//         }
//         if(min != index){
//             this.swap(min)
//             this.bublDown(min)
//         }
//     }
// }
// const queue= new PriorityQueue()
// queue.insert(10,4)
// queue.insert(20,1)
// queue.insert(30,2)
// queue.insert(40,3)
// console.log(queue.queue);







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
//         return this.list[vertex1].has(vertex2)&& this.list[vertex2].has(vertex1)
//     }
//     removeEdges(vertex1,vertex2){
//         this.list[vertex1].delete(vertex2)
//         this.list[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if(!this.list[vertex]){
//             return null
//         }
//         for(let vert of this.list[vertex]){
//             this.removeEdges(vert,vertex)
//         }
//         delete this.list[vertex]
//     }
//     bfs(vertex){
//         let visited = {}
//         let queue = [vertex]
//         visited[vertex] =  true
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr);
//             for(let neghbor of this.list[curr]){
//                 if(!visited[neghbor]){
//                     queue.push(neghbor)
//                     visited[neghbor] = true
//                 }
//             }
//         }
//     }
//     dfs(starting){
//         let visited = {}
//         let  travers = (vertex)=>{
//             console.log(vertex);
//             visited[vertex] = true
//             for(let neghbor of this.list[vertex]){
//                 if(!visited[neghbor]){
//                     travers(neghbor)
//                 }
//             }
//         }
//         travers(starting)
//     }
//     display(){
//         for(let vertex in this.list){
//             console.log(vertex +'= >' + [...this.list[vertex]]);
//         }
//     }
// }
// const graph = new Graph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addEdges("A","B")
// graph.addEdges("C","B")
// graph.dfs("A")
// graph.display()



// class node {
//     constructor() {
//         this.children = {}; // Changed from childe to children
//         this.end = false;
//     }
// }

// class Trie {
//     constructor() {
//         this.root = new node();
//     }
//     insert(word) {
//         let currentNode = this.root;
//         for (let i = 0; i < word.length; i++) {
//             let char = word[i];
//             if (!currentNode.children[char]) {
//                 currentNode.children[char] = new node(); 
//             }
//             currentNode = currentNode.children[char];
//         }
//         currentNode.end = true;
//     }
//     search(word) {
//         let curr = this.root;
//         for (let i = 0; i < word.length; i++) {
//             let char = word[i];
//             if (!curr.children[char]) {
//                 return false;
//             }
//             curr = curr.children[char];
//         }
//         return curr.end;
//     }

//     displayWordsWithPrefix(prefix) {
//         let result = [];
//         let prefixNode = this.findNodeByPrefix(prefix);
//         this.collectWordsWithPrefix(prefixNode, prefix, result);
//         return result;
//     }

//     findNodeByPrefix(prefix) {
//         let curr = this.root;;
//         for (let i = 0; i < prefix.length; i++) {
//             const charToFind = prefix[i];
//             if (!curr.children.hasOwnProperty(charToFind)) {
//                 return null;
//             }
//             curr = curr.children[charToFind];
//         }
//         return curr;
//     }

//     collectWordsWithPrefix(node, currentPrefix, result) {
//         if (!node) {
//             return;
//         }
//         if (node.end) {
//             result.push(currentPrefix);
//         }
//         for (let char in node.children) {
//             this.collectWordsWithPrefix(node.children[char], currentPrefix + char, result);
//         }
//     }
// }

// const trie = new Trie();
// trie.insert("HELLO");
// console.log(trie.displayWordsWithPrefix("HEL"));


function heapSort(arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, i, arr.length)
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapify(arr, 0, i)
    }
    return arr
}
function heapify(arr, index, size) {
    let left = 2 * index + 1
    let right = 2 * index + 2
    let largestIndex = index
    if (left < size && arr[left] > arr[largestIndex]) {
        largestIndex = left
    }
    if(right<size && arr[right] >arr[largestIndex]){
        largestIndex = right
    }
    if(largestIndex !== index){
        [arr[largestIndex],arr[index]] = [arr[index],arr[largestIndex]]
        heapify(arr,largestIndex,size)
    }
}
let arr= [53,32,12,5,21]
console.log(heapSort(arr));


