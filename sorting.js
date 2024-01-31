function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
}
let arr = [5, 3, 2, 1]
bubbleSort(arr)
console.log(arr);

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let insertioNumber = arr[i]
        let j= i-1
        while(j>=0 && arr[j] >insertioNumber){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = insertioNumber
    }
}
let arr = [ 6,4,3,2,43]
insertionSort(arr)
console.log(arr);

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
}
let arr = [6, 43, 2, 42, 1]
selectionSort(arr)
console.log(arr);

function mergeSort(arr){
    if(arr.length <2){
       return  arr
    }
    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}
function merge(leftArr,rightArr){
    let sortArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<= rightArr[0]){
            sortArr.push(leftArr.shift())
        }else{
            sortArr.push(rightArr.shift())
        }
    }
    return [...sortArr,...leftArr,...rightArr]
}
let arr= [54,32,52,2,6]
console.log(mergeSort(arr));

function quickSort(arr,left=0,right=arr.length-1){
    if(left<right){
        let pivot = partition(arr,left,right)
        quickSort(arr,left,pivot-1)
        quickSort(arr,pivot+1,right)
    }
    return arr
}
function partition(arr,left,right){
    let pivot = arr[right]
    let i = left-1
    for(let j=left;j<right;j++){
        if(arr[j]<pivot){
            i++
            swap(arr,i,j)
        }
    }
    swap(arr,i+1,right)
    return i+1
}
function swap(arr,i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
let arr  = [54,3,75,21,3]
console.log(quickSort(arr));

class queue{
    constructor(){
        this.items = []
        this.rear = 0
        this.front = 0;
        this.length =0
    }
    enqueue(element){
        this.items[this.rear] = element
        this.rear++
        this.length++
    }
    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        this.length--
        return item
    }
    middle(){
        const middleIndex = Math.floor(this.items.length/2)
        return this.items[middleIndex]
    }
    removeMiddle(){
        const middleIndex = Math.floor(this.items.length/2)
        return this.items.splice(middleIndex,1)
    }
    peek(){
        return this.items[this.front]
    }
    print(){
        console.log(this.items);
    }
}
const q = new queue
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.print()
console.log(q.peek());

class stack{
    constructor(){
        this.items = []
        this.length = 0
    }
    push(element){
        this.items.push(element)
        this.length++
    }
    pop(){
        return this.items.pop()
        this.length--
    }
    peek(){
        return this.items[this.items.length-1]
    }
    middle(){
        let middleIndex = Math.floor(this.items.length/2)
        return this.items[middleIndex]
    }
    print(){
        console.log(this.items);
    }
}
const s = new stack()
s.push(10)
s.push(20)
s.push(30)
s.print()
console.log(s.middle());

