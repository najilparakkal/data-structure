

class MaxHeap{
    constructor(){
        this.heap = []
    }
    getParent(index){
        return Math.floor((index-1)/2)
    }
    left(index){
        return 2*index+1
    }
    right(index){
        return 2*index+2
    }
    swap(index1,index2){
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }
    insert(data){
        this.heap.push(data)
        this.heapifyUp(this.heap.length-1)
    }
    heapifyUp(index){
        let getParent = this.getParent(index)
        if(getParent>=0 && this.heap[getParent] < this.heap[index]){
            this.swap(getParent,index)
            this.heapifyUp(getParent)
        }
    }
    remove(){
        if(this.heap.length === 0){
            return null
        }
        if(this.heap.length === 1){
            return this.heap.pop()
        }
        let max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return max
    }
    heapifyDown(index){
        let left =this.left(index)
        let right= this.right(index)
        let max = index
        if(left<this.heap.length && this.heap[left] >this.heap[max]){
            max = left
        }
        if(right< this.heap.length && this.heap[right] > this.heap[max]){
            max = right
        }
        if(max !==index){
            this.swap(max,index)
            this.heapifyDown(max)
        }
    }
    heapSort(){
        let arr = []
        while(this.heap.length){
            arr.push(this.remove())
        }
        return arr
    }
    buildHeapFromArray(array) {
        this.heap = array;
        const firstNonLeafIndex = Math.floor((array.length - 2) / 2);
        for (let i = firstNonLeafIndex; i >= 0; i--) {
          this.heapifyDown(i);
        }
      }
}
const maxheap = new MaxHeap()
maxheap.buildHeapFromArray([ 78, 50, 12, 2, 24 ])
console.log(maxheap.heap);
console.log(maxheap.heapSort());