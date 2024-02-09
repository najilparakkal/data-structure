// function bubbleSort(arr) {
//     let swapped;
//     do {
//         swapped = false
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped)
// }
// let arr = [5, 3, 2, 1]
// bubbleSort(arr)
// console.log(arr);

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let insertionNumber = arr[i]
//         let j= i-1;
//         while(j>=0 && arr[j]>insertionNumber){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = insertionNumber

//     }

// }
// let arr=[6,5,4,3,2,1]
// insertionSort(arr)
// console.log(arr);


// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let min = i
//         for(let j=i+1;j<arr.length;j++){
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
// let arr=[6,5,4,3,2,1]
// selectionSort(arr)
// console.log(arr);

// function mergeSort(arr){
//     if(arr.length <2){
//        return  arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }
// function merge(leftArr,rightArr){
//     let sortArr = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0]<= rightArr[0]){
//             sortArr.push(leftArr.shift())
//         }else{
//             sortArr.push(rightArr.shift())
//         }
//     }
//     return [...sortArr,...leftArr,...rightArr]
// }
// let arr= [54,32,52,2,6]
// console.log(mergeSort(arr));




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
//     let i = left-1
//     for(let j=left;j<right;j++){
//         if(arr[j]<pivot){
//             i++
//             swap(arr,i,j)
//         }
//     }
//     swap (arr,i+1,right)
//     return i+1
// }
// function swap(arr,i,j){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }
// let arr = [6,5,4,3,2,1]
// console.log(quickSort(arr));



    // class hashTable{
    //     constructor(size){
    //         this.table = new Array(size)
    //         this.size = size
    //     }
    //     hash(key){
    //         let total = 0;
    //         for(let i=0;i<key.length;i++){
    //             total += key.charCodeAt(i)
    //         }
    //         return total %this.size
    //     }
    //     set(key,value){
    //         const index = this.hash(key)
    //         const bucket = this.table[index]
    //         if(!bucket){
    //             this.table[index] = [[key,value]]
    //         }else{
    //             const samkey = bucket.find(item => item[0] === value)
    //             if(samkey){
    //                 samkey[1] = [value]
    //             }else{
    //                 bucket.push([key,value])
    //             }
    //         }
    //     }
    //     get(key) {
    //         const index = this.hash(key);
    //         const bucket = this.table[index];
    //         let items = []
    //         if(bucket){
    //            for(let item of bucket){
    //             items.push(item[1])
    //            }
    //         }
    //         return items.length >0 ? items:undefined
    //     }
    //     reverse(key){
    //         const index = this.hash(key)
    //         const bucket = this.table[index]
    //         if(bucket){
    //             const samkey = bucket.find(item => item [0] === key)
    //             if(samkey){
    //                 return samkey[1]=String(samkey[1]).split("").reverse().join("")
    //             }
    //         }
    //     }
    //     remove(key){
    //         const index = this.hash(key)
    //         const bucket = this.table[index]
    //         if(bucket){
    //             const samkey = bucket.find(item => item [0] === key)
    //             if(samkey){
    //                 return bucket.splice(bucket.indexOf(samkey),1)
    //             }
    //         }
    //     }
    //     print(){
    //         for(let i=0;i<this.table.length;i++){
    //             if(this.table[i] ){
    //                 console.log(i,this.table[i]);
    //             }
    //         }
    //     }
    // }
    // const table = new hashTable(10)
    // table.set("name","najil")
    // table.set("week",14)
    // table.set("BCE",133)
    // table.set("BCE",144)
    
    // table.print()
    // console.log(table.get("BCE"));
    // console.log(table.reverse("name"));
    




    // class queue{
//     constructor(){
//         this.items = []
//         this.rear = 0;
//         this.front =0;
//     }
//     enqueue(element){
//         this.items[this.rear] = element
//         this.rear++
//     }
//     dequeue(){
//         const item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }
//     peek(){
//         return this.items[this.front]
//     }
//     isempty(){
//         return this.rear - this.front ===0
//     }
//     size(){
//         return this.rear -this.front
//     }
//     secondLargest(){
//         let largest = this.items[0]
//         let secLargest = this.items[1]
//         if(largest<secLargest){
//             [largest,secLargest] = [secLargest,largest]
//         }
//         for(let i=2;i<this.items.length;i++){
//             if(this.items[i]>largest){
//                 secLargest = largest
//                 largest = secLargest
//             }else if(this.items[i] > secLargest && this.items[i] !== largest){
//                 secLargest = this.items[i]
//             }
//         }
//         return [secLargest,largest]
//     }
//     print(){
//         console.log(this.items);
//     }
// }

// const q = new queue()
// q.enqueue(10)
// q.enqueue(200)
// q.enqueue(30)
// q.enqueue(20)

// q.enqueue(10)

// q.print()
// console.log(q.secondLargest());

// class queueUsingStack{
//     constructor(){
//         this.stack = new stack()
//     }
//     enqueue(data){
//         this.stack.push(data)
//     }
//     dequeue(){
//         this.stack.pop()
//     }
//     peek(){
//        return this.stack.peek()
//     }
//     print(){
//         this.stack.print()
//     }
// }

// const queue = new queueUsingStack()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.print()
// console.log(queue.peek());

// class stack{
//     constructor(){
//         this.element= []
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
//     largest(){
//         let largest = this.element[0]
//         for(let i=1;i<this.element.length;i++){
//             if(this.element[i]>largest){
//                 largest = this.element[i]
//             }
//         }
//         return largest
//     }
//     smallest(){
//         let smallest = this.element[0]
//         for(let i=1;i<this.element.length;i++){
//             if(this.element[i]<smallest){
//                 smallest = this.element[i]
//             }
//         }
//         return smallest
//     }
//     secondlargest(){
//         let largest = this.element[0]
//         let secondlargest = this.element[1]
//         if(secondlargest>largest){
//             [largest,secondlargest] = [secondlargest,largest]
//         }
//         for(let i=2;i<this.element.length;i++){
//             if(this.element[i]>largest){
//                 secondlargest = largest
//                 largest = this.element[i]
//             }else if(this.element[i]>secondlargest && this.element[i]!== largest){
//                 secondlargest = this.element[i]
//             }
//         }
//         return [largest,secondlargest]
//     }
//     isValidParentheses(s) {
//         const stack = [];
    
//         for (let char of s) {
//             if (char === '(' || char === '[' || char === '{') {
//                 stack.push(char);
//             } else {
//                 const lastOpenParenthesis = stack.pop();
//                 if ((char === ')' && lastOpenParenthesis !== '(') ||(char === ']' && lastOpenParenthesis !== '[') ||(char === '}' && lastOpenParenthesis !== '{')) {
//                     return false;
//                 }
//             }
//         }
//         return stack.length === 0;
//     }
//     secondSmallest(){
//         let smallest = this.element[0]
//         let secondSmallest = this.element[1]
//         if(smallest>secondSmallest){
//             [smallest,secondSmallest] = [secondSmallest,smallest]
//         }
//         for(let i=2;i<this.element.length;i++){
//             if(this.element[i]<smallest){
//                 secondSmallest = smallest
//                 smallest = this.element[i]
//             }if(this.element[i]<secondSmallest&& this.element[i]!==smallest){
//                 secondSmallest = smallest
//             }
//         }
//         return [smallest,secondSmallest]
//     }
//     print(){
//         console.log(this.element);
//     }
// }
// const s = new stack()
// s.push(20)
// s.push(40)
// s.push(10)
// s.push(50)
// s.push(60)
// s.push(2)
// s.print()
// console.log(s.isValidParentheses("()"));

// class StackUsingQueue {
//     constructor() {
//         this.queue = new queue();
//     }

//     push(element) {
//         this.queue.enqueue(element);
//     }

//     pop() {
//         return this.queue.dequeue();
//     }

//     peek() {

//         return this.queue.peek();
//     }

//     print() {
//         // Print the elements in queue
//         this.queue.print();
//     }
// }
// const stackq = new StackUsingQueue()
// stackq.push(10)
// stackq.push(20)

// stackq.print()
// console.log(stackq.peek());
