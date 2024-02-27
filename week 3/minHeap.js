
class MinHeap{
    constructor(){
        this.heap = []
    }
    getParent(index){
        return Math.floor((index-1)/2)
    }
    getLeftChild(index){
        return 2* index+1
    }
    getRightChild(index){
        return 2 * index +2
    }
    swap(index1,index2){
        let temp = this.heap[index1]
        this.heap[index1] = this.heap [ index2]
        this.heap[index2] = temp
    }
    insert(data){
        this.heap.push(data)
        this.heapifyUp(this.heap.length-1)
    }
    heapifyUp(index){
        let parent = this.getParent(index)
        if(parent< this.heap.length && this.heap[parent]> this.heap[index]){
            this.swap(index,parent)
            this.heapifyUp(parent)
        }
    }
    remove(){
        if(this.heap.length === 0){
            return null
        }
        if(this.heap.length === 1){
           return this.heap.pop()
        }
        let min = this.heap [ 0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return min
    }
    heapifyDown(index){
        let left  = this.getLeftChild(index)
        let right =this.getRightChild(index)
        let min = index
        if(left < this.heap.length && this.heap[left]<this.heap[min]){
            min = left
        }
        if(right<this.heap.length && this.heap[right]<this.heap[min]){
            min = right
        }
        if(min !==  index){
            this.swap(min,index)
            this.heapifyDown(min)
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
heap.insert(17)
heap.insert(10)
heap.insert(30)
heap.insert(28)
heap.insert(6)
console.log(heap.heap);
heap.remove()
console.log(heap.heap);
console.log(heap.heapSort());



