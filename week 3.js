// class node {
//     constructor(data) {
//         this.data = data
//         this.left = null
//         this.right = null
//     }
// }
// class tree {
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
//             this.insetNode(this.root, newNode)
//         }
//     }
//     insetNode(root, newNode) {
//         if (root.data > newNode.data) {
//             if (root.left === null) {
//                 root.left = newNode
//             } else {
//                 this.insetNode(root.left, newNode)
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = newNode
//             } else {
//                 this.insetNode(root.right, newNode)
//             }
//         }
//     }
//     search(root, data) {
//         if (!root) {
//             return false
//         } else {
//             if (root.data === data) {
//                 return true
//             } else if (data < root.data) {
//                 this.search(root.left, data)
//             } else {
//                 this.search(root.right, data)
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
//             return root
//         }
//         if(root.data> data){
//             root.left = this.removeData(root.left,data)
//         }else if(root.data<data){
//             root.right = this.removeData(root.right,data)
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
// }
// const tr = new tree()
// tr.insert(10)
// tr.insert(20)
// tr.insert(5)
// tr.insert(3)
// tr.insert(8)
// tr.remove(10)
// tr.levelOrder()
// console.log(tr.root,10);



// adjecency Matrix 

// let metrix = [
//     [0,1,0],
//     [1,0,1],
//     [0,1,0]
// ]
// console.log(metrix[0][2]);

// adjecency List 
// let list = {
//     'A':["B"],
//     'B':["A","C"],
//     'C':["B"]
// }
// console.log(list["A"]);

// class graph{
//     constructor(){
//         this.adjecencyList = {}
//     }
//     addVertex(vertex){
//         if(!this.adjecencyList[vertex]){
//             this.adjecencyList[vertex] = new Set()
//         }
//     }
//     addEdges(vertex1,vertex2){
//         if(!this.adjecencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjecencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjecencyList[vertex1].add(vertex2)
//         this.adjecencyList[vertex2].add(vertex1)
//     }
//     hasEdge(vertex1,vertex2){
//         return(
//             this.adjecencyList[vertex1].has(vertex2)&&this.adjecencyList[vertex2].has(vertex1)
//         )
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjecencyList[vertex1].delete(vertex2)
//         this.adjecencyList[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if(!this.adjecencyList[vertex]){
//             return console.log("null");
//         }
//         for(let node of this.adjecencyList[vertex]){
//             this.removeEdge(node)
//         }
//         delete this.adjecencyList[vertex]
//     }
//     desplay(){
//         for(let nod in this.adjecencyList){
//             console.log(nod+" =>"+[...this.adjecencyList[nod]]);
//         }
//     }
// }
// const gr = new graph()
// gr.addVertex("A")
// gr.addVertex("B")
// gr.addVertex("C")
// gr.addEdges("A","B")
// gr.addEdges("B","C")
// gr.desplay()


