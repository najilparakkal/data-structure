// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let insertionNumber = arr[i]
//         let j = i - 1
//         while (j >= 0 && arr[j] > insertionNumber) {
//             arr[j + 1] = arr[j]
//             j--
//         }
//         arr[j + 1] = insertionNumber
//     }
// }
// let arr = [6, 5, 4, 3, 2, 1]
// insertionSort(arr)
// console.log(arr);


// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let min = i
//         for(let j= i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min = j
//             }
//         }
//         if(min != i){
//             let temp = arr[i]
//             arr[i] = arr[min]
//             arr[min] = temp
//         }
//     }
// }
// let arr = [6,5,4,3,2,1]
// selectionSort(arr)
// console.log(arr);


// function quickSort(arr,left=0,right=arr.length-1){
//     if(left<right){
//         let pivot = partition(arr,left,right)
//         quickSort(arr,left,pivot-1)
//         quickSort(arr,pivot+1,right)
//     }
//     return arr
// }
// function partition(arr,left,right){
//     let pivot = arr[right]
//     let i= left-1
//     for(let j=left;j<right;j++){
//         if(arr[j] <pivot){
//             i++
//             swap(arr,i,j)
//         }
//     }
//     swap(arr,i+1,right)
//     return i+1
// }
// function swap (arr,i,j){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }
// let arr= [6,5,4,3,2,1]
// console.log(quickSort(arr));

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }
// function merge(leftArr,rightArr){
//     let sortArr  = []
//     while(leftArr.length &&rightArr.length){
//         if(leftArr[0] <rightArr[0]){
//             sortArr.push(leftArr.shift())
//         }else{
//             sortArr.push(rightArr.shift())
//         }
//     }
//     return [...sortArr,...leftArr,...rightArr]
// }
// let arr = [6,5,4,3,2,1]
// console.log(mergeSort(arr));


class hashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key, value) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const sameKey = bucket.find(item => item[0] === value)
            if (sameKey) {
                sameKey[1] = [value]
            } else {
                bucket.push([key, value])
            }
        }
    }
    get(key) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if (bucket) {
            const sameKey = bucket.find(item => item[0] === key)
            if (sameKey) {
                return [...sameKey]
            }
        }
        return undefined
    }
    remove(key) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if (bucket) {
            const sameKey = bucket.find(item => item[0] === key)
            if (sameKey) {
                bucket.splice(bucket.indexOf(sameKey), 1)
            }
        }
    }

    reverse(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
    
        if (bucket) {
            const sameKey = bucket.find(item => item[0] === key);
    
            if (sameKey) {
               return  sameKey[1] = String(sameKey[1]).split("").reverse().join("");
            }
        }
    }
    countSameValues(key) {
        let count = 1;
        const index = this.hash(key);
    
        for (let i = 0; i < this.table.length; i++) {
            const bucket = this.table[i];
            if (bucket) {
                for (const item of bucket) {
                    if (item[0] === key) {
                        count++;
                    }
                }
            }
        }
        return count;
    }
    
    print() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(this.table[i]);
            }
        }
    }
}
const table = new hashTable(10)
table.set("name", "najl")
table.set("week", 14)
table.set("week", 40)
table.set("age", 14)

console.log(table.countSameValues("week"));


// class queue{
//     constructor(){
//         this.elements = []
//         this.rear = 0
//         this.front = 0
//     }
//     enqueue(data){
//         this.elements[this.rear] = data
//         this.rear++
//     }
//     dequeue(){
//         const item = this.elements[this.front]
//         delete this.elements[this.front]
//         this.front++
//         return item
//     }
//     peek(){
//         return this.elements[this.front]
//     }
//     middle(){
//         const middeIndex = Math.floor(this.elements.length/2)
//         return this.elements[middeIndex]
//     }
//     print(){
//         console.log(this.elements);
//     }
// }
// const q = new queue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)
// q.print()

// class stack{
//     constructor(){
//         this.element = []
//     }
//     push(data){
//         this.element.push(data)
//     }
//     pop(){
//         return this.element.pop()
//     }
//     peek(){
//         return this.element[this.element.length-1]
//     }
    
//     min(){
//         let min = this.element[0]
//         for(let i=1;i<this.element.length;i++){
//             if(min>this.element[i]){
//                 min = this.element[i]
//             }
//         }
//         return min
//     }
//     secondLargest(){
//         let largest = this.element[0]
//         let secLargest = this.element[1]
//         if(largest<secLargest){
//             [largest,secLargest] = [secLargest,largest]
//         }
//         for(let i=2;i<this.element.length;i++){
//             if(this.element[i]>largest){
//                 secLargest = largest
//                 largest = this.element[i]
//             }else if(secLargest<this.element[i] && this.element[i] !== largest){
//                 secLargest = this.element[i]
//             }
//         }
//         return secLargest 
//     }
//     largest(){
//         let largest = this.element[0]
//         for(let i=1;i<this.element.length;i++){
//             if(this.element[i]>largest){
//                 largest = this.element[i]
//             }
//         }
//         return largest
//     }
//     seondMin(){
//         let min = this.element[0]
//         let secondMin = this.element[1]
//         if(min>secondMin){
//             [min,secondMin] = [secondMin,min]
//         }
//         for(let i=2;i<this.element.length;i++){
//             if(this.element[i]<min){
//                 secondMin = min
//                 min =this.element[i]
//             }else if(secondMin > this.element [i] && this.element[i]!== min){
//                 secondMin = this.element[i]
//             }
//         }
//         return [min,secondMin]
//     }
    
//     print(){
//         console.log(this.element);
//     }
// }
// const s = new stack()
// s.push(10)
// s.push(60)
// s.push(30)
// s.push(40)
// s.push(50)
// s.print()
// console.log(s.seondMin());