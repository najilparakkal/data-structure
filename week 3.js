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
//     searchData(root, data) {
//         if (!root) {
//             return null
//         }
//         if (root.data === data) {
//             return true
//         } else if (root.data > data) {
//             return this.searchData(root.left, data)
//         } else {
//             return this.searchData(root.right, data)
//         }
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
//         return this.isValid(root.left, min, max) && this.isValid(root.right, root.data, max)
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
//     height(root) {
//         if (root === null) {
//             return null
//         } else {
//             const left = this.height(root.left)
//             const right = this.height(root.right)
//             return Math.max(left, right) + 1
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
//             if (!root.right && !root.left) {
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
// const tree = new Bst()
// tree.insert(10)
// tree.insert(20)
// tree.insert(5)
// tree.insert(3)
// tree.insert(8)
// tree.remove(5)
// console.log(tree.validate());
// console.log(tree.height(tree.root));
// tree.levelOrder()


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
//     hasEdge(vertex1,vertex2){
//         return (this.list[vertex1].has(vertex2) && this.list[vertex2].has(vertex1))
//     }
//     removeEdge(vertex1,vertex2){
//         this.list[vertex1].delete(vertex2)
//         this.list[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if(!this.list[vertex]){
//             return null
//         }
//         for(let vert of this.list[vertex]){
//             this.removeEdge(vert,vertex)
//         }
//         delete this.list[vertex]
//     }
//     bfs(vertex){
//         let visited ={}
//         let queue = [vertex]
//         visited[vertex] = true
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr);
//             for(let sibling of this.list[curr]){
//                 if(!visited[sibling]){
//                     visited[sibling] = true
//                     queue.push(sibling)
//                 }
//             }
//         }
//     }
//     isEmpty(){
//         return this.list.length === 0
//     }
//     display(){
//         for(let vertex in this.list){
//             console.log(vertex +" = >"+[...this.list[vertex]]);
//         }
//     }
// }
// const graph = new Graph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addEdges("A","B")
// graph.addEdges("C","B")
// graph.removeVertex("B")
// graph.display()
// graph.bfs("A")




class node {
    constructor() {
        this.child = {}
        this.end = false
    }
}
class Trie {
    constructor() {
        this.root = new node()
    }
    insert(word) {
        const currend = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!currend.child[char]) {
                currend.child[char] = new node()
            }
            currend = currend.child[char]
        }
        currend.end = true
    }
    search(word) {
        const currend = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!currend.child[char]) {
                return false
            }
            currend = currend.child[char]
        }
        return currend.end
    }
    Prefix(word) {
        const currend = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!currend.child[char]) {
                return false
            }
            currend = currend.child[char]
        }
        return true
    }
}
const trie = new Trie()
trie.insert("NAJIL")
trie.search("NA")
trie.Prefix("NA")