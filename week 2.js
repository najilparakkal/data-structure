// function quickSort(arr, left = 0, right = arr.length - 1) {
//     if (left < right) {
//         let pivot = partiotion(arr, left, right)
//         quickSort(arr, left, pivot - 1)
//         quickSort(arr, pivot + 1, right)
//     }
//     return arr
// }
// function partiotion(arr, left, right) {
//     let pivot = arr[right]
//     let i = left - 1
//     for (let j = left; j < right; j++) {
//         if (arr[j] < pivot) {
//             i++
//             swap(arr, i, j)
//         }
//     }
//     swap(arr, i + 1, right)
//     return i + 1
// }
// function swap(arr, i, j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }
// let arr = [6, 5, 4, 3, 2, 1]
// console.log(quickSort(arr));



// function mergeSort(arr) {
//     if (arr.length < 2) {
//         return arr
//     }
//     let mid = Math.floor(arr.length / 2)
//     let leftArr = arr.slice(0, mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(leftArr), mergeSort(right))
// }
// function merge(leftArr, rightArr) {
//     let sortArr = []
//     while (leftArr.length && rightArr.length) {
//         if (leftArr[0] <= rightArr[0]) {
//             sortArr.push(leftArr.shift())
//         } else {
//             sortArr.push(rightArr.shift())
//         }
//     }
//     return [...sortArr, ...leftArr, ...rightArr]
// }
// let arr = [6, 5, 4, 3, 2, 1]
// console.log(mergeSort(arr));

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

// function bubbleSort(arr) {
//     let swapped;
//     do {
//         swapped = false
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped)
// }
// let arr = [6, 5, 4, 3, 23, 2]
// bubbleSort(arr)
// console.log(arr);


// class hashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     set(key, value) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if (!bucket) {
//             this.table[index] = [[key, value]]
//         } else {
//             const sameKey = bucket.find(item => item[0] === value)
//             if (sameKey) {
//                 sameKey[1] = [value]
//             } else {
//                 bucket.push([key, value])
//             }
//         }
//     }
//     get(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if (bucket) {
//             const sameKey = bucket.find(item => item[0] === key)
//             if (sameKey) {
//                 return sameKey[1]
//             }
//         }
//         return undefined
//     }
//     reverse(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if (bucket) {
//             const sameKey = bucket.find(item => item[0] === key)
//             if (sameKey) {
//                 return String(sameKey[1]).split("").reverse().join("")
//             }
//         }
//         return undefined
//     }
//     remove(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if (bucket) {
//             const sameKey = bucket.find(item => item[0] === key)
//             if (sameKey) {
//                 return bucket.splice(bucket.indexOf(sameKey[1]), 1)
//             }
//         }
//     }
//     print() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i]);
//             }
//         }
//     }
// }
// const table = new hashTable(10)
// table.set("name", "najil")
// table.set("week", 14)
// table.set("week", 15)
// table.print()
// console.log(table.reverse("week"));
// table.print()




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
//         let secondSmallest = this.element[1]
//         if(min>secondSmallest){
//             [min,secondSmallest] = [secondSmallest,min]
//         }
//         for(let i=2;i<this.element.length;i++){
//             if(this.element[i]<min){
//                 secondSmallest = min
//                 min  = this.element[i]
//             }else if (this.element[i] < secondSmallest && this.element[i] !== min){
//                 secondSmallest = this.element[i]
//             }
//         }
//         return [min,secondSmallest]
//     }
//     removeDups(){
//         for(let i=0;i<this.element.length;i++){
//             for(let j= i+1;j<this.element.length;j++){
//                 if(this.element[i] === this.element[j]){
//                     this.element.splice(j,1)
//                     j--
//                 }
//             }
//         }
//     }
//     validParanthisis(str){
//         let stack =[]
//         for(let char of str){
//             if(char === "{" || char === "[" ||  char === "("){
//                 stack.push(char)
//             }else{
//                 let oposite = stack.pop()
//                 if((char === ")" && oposite !== "(") || (char ==="]" && oposite !== "[") || (char === "}" && oposite !== "{")){
//                     return false
//                 }
//             }
//         }
//         return stack.length === 0
//     }
//     longsub(str){
//         let longestsubstr =''
//         for(let i=0;i<str.length;i++){
//             for(let j=i+1;j<=str.length;j++){
//                 let substr = str.substring(i,j)
//                 if(str.indexOf(substr,j) !== -1 && substr.length> longestsubstr.length){
//                     longestsubstr = substr
//                 }
//             }
//         }
//         return longestsubstr
//     }
//     print(){
//         console.log(this.element);
//     }
// }

// const st = new stack()
// st.push(9)
// st.push(2)
// st.push(3)
// st.push(7)
// st.push(3)
// st.print()
// console.log(st.longsub("eeeeetttttvvvvvjjjjnnnnnnnnnn"));
// st.print()

// class queue{
//     constructor(){
//         this.element = []
//         this.rear = 0
//         this.front = 0
//     }
//     enqueu(data){
//         this.element[this.rear] = data
//         this.rear++
//     }
//     dequeue(){
//         let item = this.element[this.front]
//         delete this.element[this.front]
//         this.front++
//         return item
//     }
//     peek(){
//         return this.element[this.front]
//     }
//     print(){
//         console.log(this.element);
//     }
// }
// const q = new queue()
// q.enqueu(10)
// q.enqueu(20)
// q.enqueu(30)
// q.enqueu(40)
// q.enqueu(50)
// q.print()
// console.log(q.dequeue());
// console.log(q.peek());


