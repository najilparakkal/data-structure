function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
}
let arr = [6, 5, 4, 3, 2, 1]
bubbleSort(arr)
console.log(arr);



function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let insertionNumber = arr[i]
        let j= i-1
        while(j>=0 && arr[j] >insertionNumber){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = insertionNumber
    }
}
let arr = [6,5,4,3,2,1]
insertionSort(arr)
console.log(arr);


function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min = i
        for(let j = i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        if(min != i){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
}
let arr = [6,5,4,3,2,1]
selectionSort(arr)
console.log(arr);


function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)
    return merg(mergeSort(leftArr),mergeSort(rightArr))
}
function merg(leftArr , rightArr){
    let sortArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<rightArr[0]){
            sortArr.push(leftArr.shift())
        }else{
            sortArr.push(rightArr.shift())
        }
    }
    return [...sortArr,...leftArr,...rightArr]
}
let arr =[6,5,4,3,2,1]
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
    let i= left-1
    for(let j=left;j<right;j++){
        if(arr[j] <pivot){
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
let arr =  [6,5,4,3,2,1]
console.log(quickSort(arr));



class queue{
    constructor(){
        this.element = []
        this.rear = 0;
        this.front = 0;
    }
    enqueue(data){
        this.element[this.rear] = data
        this.rear++
    }
    dequeue(){
        const item = this.element[this.front]
        delete this.element[this.front]
        this.front++
        return item
    }
    peek(){
        return this.element[this.front]
    }
    middle(){
        const middleIndex = Math.floor(this.element.length/2)
        return this.element[middleIndex]
    }
    removeMiddle(){
        const middleIndex = Math.floor(this.element.length/2)
        return this.element.splice(middleIndex,1)
    }
    print(){
        console.log(this.element);
    }
}
const q = new queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.print()
console.log(q.dequeue());
console.log(q.peek());
q.print()


class stack{
    constructor(){
        this.element = []
    }
    push(data){
        this.element.push(data)
    }
    pop(){
        return this.element.pop()
    }
    peek(){
        return this.element[this.element.length-1]
    }
    print(){
        console.log(this.element);
    }
}
const s = new stack()
s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.print()



class hashTable{
    constructor(size){
         this.table = new Array(size)
         this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total %this.size
    }
    set(key,value){
        const index = this.hash(key)
        const bucket= this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const sameKey = bucket.find(item=>item[0] === value)
            if(sameKey){
                sameKey[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get (key){
        const index = this.hash(key)
        const bucket= this.table[index]
        if(bucket){
            const sameKey = bucket.find(item => item[0]=== key)
            if(sameKey){
                return sameKey[1]
            }
        }
        return undefined
    }
    remove(key){
        const index = this.hash(key)
        const bucket= this.table[index]
        if(bucket){
            const sameKey = bucket.find(item => item[0]=== key)
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey),1)
            }
        }
    }
    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
   
}
const table = new hashTable(10)
table.set("name","najil")
table.set("week",14)
table.set("name","nihal")
table.print()
console.log(table.get("week"));

