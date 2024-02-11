
class MinHeap{
  constructor(){
      this.heap = []
  }
  getParent(index){
      return Math.floor((index-1)/2)
  }
  leftIndex(index){
      return 2*index+1
  }
  rightIndex(index){
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
      let parent = this.getParent(index)
      if(parent>= 0 && this.heap[parent] > this.heap[index]){
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
      let min = this.heap[0]
      this.heap[0] =this.heap.pop()
      this.heapifyDown(0)
      return min
  }
  heapifyDown(index){
      let left = this.leftIndex(index)
      let right = this.rightIndex(index)
      let min = index
      if(left<this.heap.length && this.heap[left]<this.heap[min]){
          min = left
      }
      if(right<this.heap.length && this.heap[right]<this.heap[min]){
          min = right
      }
      if(min != index){
          this.swap(index,min)
          this.heapifyDown(min)
      }
  }
}
const minHeap = new MinHeap()
minHeap.insert(29)
minHeap.insert(2)
minHeap.insert(9)
minHeap.insert(19)
minHeap.insert(20)
minHeap.insert(10)
console.log(minHeap.heap);
minHeap.remove()
console.log(minHeap.heap);
