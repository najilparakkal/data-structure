// class node {
//     constructor(data) {
//         this.data = data
//         this.left = null
//         this.rigth = null
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
//         const newNode = new node(data)
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
//             if (root.rigth === null) {
//                 root.rigth = newNode
//             } else {
//                 this.insertNode(root.rigth, newNode)
//             }
//         }
//     }
//     preOrder(root) {
//         if (root) {
//             console.log(root.data);
//             this.preOrder(root.left)
//             this.preOrder(root.rigth)
//         }
//     }
//     inOrder(root) {
//         if (root) {
//             this.inOrder(root.left)
//             console.log(root.data);
//             this.inOrder(root.rigth)
//         }
//     }
//     postOrder(root) {
//         if (root) {
//             this.postOrder(root.left)
//             this.postOrder(root.rigth)
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
//             if (curr.rigth) {
//                 queue.push(curr.rigth)
//             }
//         }
//     }
//     searchData(root, data) {
//         if (!root) {
//             return false
//         } else {
//             if (root.data === data) {
//                 return true
//             } else if (root.data > data) {
//                 return this.searchData(root.left, data)
//             } else {
//                 return this.searchData(root.rigth, data)
//             }
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
//         if (!root.rigth) {
//             return root.data
//         } else {
//             return this.max(root.rigth)
//         }
//     }
//     remove(data) {
//         this.removeData(this.root, data)
//     }
//     removeData(root, data) {
//         if (root === null) {
//             return root
//         }
//         if (root.data > data) {
//             root.left = this.removeData(root.left, data)
//         } else if (root.data < data) {
//             root.rigth = this.removeData(root.rigth, data)
//         } else {
//             if (!root.left && !root.rigth) {
//                 return null
//             }
//             if (!root.left) {
//                 return root.rigth
//             } else if (!root.rigth) {
//                 return root.left
//             }
//             root.data = this.min(root.rigth)
//             root.rigth = this.removeData(root.rigth, root.data)
//         }
//         return root
//     }

// }
// const BST = new BinerySearchTree()
// BST.insert(10)
// BST.insert(20)
// BST.insert(5)
// BST.insert(8)
// BST.insert(3)
// BST.inOrder(BST.root)

// console.log(BST.searchData(BST.root, 100));
// BST.remove(5)
// BST.inOrder(BST.root)



// class AdjecencyList {
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
//         return (
//             this.list[vertex1].has(vertex2) && this.list[vertex2].has(vertex1)
//         )
//     }
//     removeVertex(vertex) {
//         if (!this.list[vertex]) {
//             return console.log("Already Deleted");
//         }
//         for (let vert of this.list[vertex]) {
//             this.removeEdge(vertex, vert)
//         }
//         delete this.list[vertex]
//     }
//     removeEdge(vertex1, vertex2) {
//         this.list[vertex1].delete(vertex2)
//         this.list[vertex2].delete(vertex1)
//     }
//     display() {
//         for (let vertex in this.list) {
//             console.log(vertex + "=>" + [...this.list[vertex]]);
//         }
//     }
// }
// const adjList = new AdjecencyList()
// adjList.addVertex("A")
// adjList.addVertex("B")
// adjList.addVertex("C")
// adjList.addEdges("A", "B")
// adjList.addEdges("B", "C")
// adjList.display()
// adjList.removeVertex("A")
// adjList.display()



class MinHeap {
    constructor() {
        this.heap = []
    }
    getParent(index) {
        return Math.floor((index - 1) / 2)
    }
    getLeft(index) {
        return 2 * index + 1
    }
    getRight(index) {
        return 2 * index + 2
    }
    swap(index1, index2) {
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }
    insert(data) {
        this.heap.push(data)
        this.heapyfiUp(this.heap.length - 1)
    }
    heapyfiUp(index) {
        let parent = this.getParent(index)
        if (parent >= 0 && this.heap[parent] > this.heap[index]) {
            this.swap(parent, index)
            this.heapyfiUp(parent)
        }
    }
    remove(){
        if(this.heap.length === 0){
            return null
        }
        if(this.heap.length === 1){
           return this.heap.pop()
        }
        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapyfiDown(0)
        return min
    }
    heapyfiDown(index){
        let left = this.getLeft(index)
        let right = this.getRight(index)
        let min = index
        if(left<this.heap.length && this.heap[left]<this.heap[min]){
            min = left
        }
        if(right<this.heap.length && this.heap[right]<this.heap[min]){
            min = right
        }
        if(min!== index){
            this.swap(min,index)
            this.heapyfiDown(min)
        }
    }
    heapSort(){
        let arr = []
        while(this.heap.length){
            arr.push(this.remove())
        }
        return arr
    }
    
}
const heap = new MinHeap()
heap.insert(10)
heap.insert(38)
heap.insert(2)
heap.insert(46)
heap.insert(34)
console.log(heap.heap);
console.log(heap.heapSort());