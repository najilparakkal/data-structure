// class node{
//     constructor(data){
//         this.data = data
//         this.left = null
//         this.right = null
//     }
// }
// class tree{
//     constructor(){
//         this.root = null
//     }
//     isEmpty(){
//         return this.root === null
//     }
//     insert(data){
//         const insertNode = new node(data)
//         if(this.isEmpty()){
//             this.root = insertNode
//         }else{
//             this.insertNode(this.root,insertNode)
//         }
//     }
//     insertNode(root,newNode){
//         if(newNode.data <root.data){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right=== null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }
//     serch(root,data){
//         if(!root){
//             return false
//         }else{
//             if(root.data === data){
//                 return true
//             } else if(data < root.data){
//                return this.serch(root.left,data)
//             } else{
//                return this.serch(root.right,data)
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
//     leveOrder(){
//         let queue =[]
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
//             return this.min(root.left)
//         }
//     }
//     max(root){
//         if(!root.right){
//             return root.data
//         }else{
//             return this.max(root.right)
//         }
//     }
//     delete(data){
//         this.deleteNode(this.root,data)
//     }
//     deleteNode(root,data){
//         if(root === null){
//             return root
//         }
//         if(data < root.data){
//             root.left = this.deleteNode(root.left,data)
//         } else if( data> root.data){
//             root.right = this.deleteNode(root.right,data)
//         } else{
//             if(!root.left && !root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }
//             root.data = this.min(root.right)
//             root.right = this.deleteNode(root.right,root.data)
//         }
//         return root
//     }
// }
// const tr = new tree()
// tr.insert(10)
// tr.insert(20)
// tr.insert(5)
// tr.insert(8)
// tr.insert(3)
// console.log(tr.serch(tr.root,10));
// console.log(tr.serch(tr.root,20));
// console.log(tr.serch(tr.root,5));
// console.log(tr.serch(tr.root,8));
// console.log(tr.serch(tr.root,30));
// tr.inOrder(tr.root)


// adjecency Metrix 
// let metrix = [
//     [0,1,0],
//     [1,0,1],
//     [0,1,0]
// ]
// console.log(metrix[1][2]);

// adjenceny List 
// let list = {
//     "A":["B"],
//     "B":["A","C"],
//     "C":["B"]
// }
// console.log(list["B"]);


// class listGraph{
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
//         return (
//             this.adjecencyList[vertex1].has(vertex2)
//         )
//     }
//     removeVertix(vertex){
//         if(!this.adjecencyList[vertex]){
//             return console.log("No Element");
//         }
//         for(let node of this.adjecencyList[vertex]){
//             this.removeEdge(vertex,node)
//         }
//         delete this.adjecencyList[vertex]

//     }
//     removeEdge(vertex1,vertex2){
//         this.adjecencyList[vertex1].delete(vertex2)
//         this.adjecencyList[vertex2].delete(vertex1)
//     }
//     display(){
//         for(let nodes in this.adjecencyList){
//             console.log(nodes + "->" +[...this.adjecencyList[nodes]]);
//         }
//     }
// }
// const graph = new listGraph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addEdges("A","B")
// graph.addEdges("B","C")
// graph.display()
// console.log("______________");
// graph.removeVertix("C")
// graph.display()