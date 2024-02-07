// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class CircularLinkedList {
//     constructor() {
//         this.head = null;
//         this.length = 0;
//     }

//     prepend(data) {
//         const prependNode = new Node(data);
//         if (this.head === null) {
//             prependNode.next = prependNode; 
//         } else {
//             prependNode.next = this.head;
//         }
//         this.head = prependNode;
//         this.length++;
//     }
//     append(data) {
//         const appendNode = new Node(data);
//         if (this.head === null) {
//             appendNode.next = appendNode; // Point to itself for circularity
//             this.head = appendNode;
//         } else {
//             let current = this.head;
//             while (current.next !== this.head) {
//                 current = current.next;
//             }
//             current.next = appendNode;
//             appendNode.next = this.head; // Make it circular
//         }
//         this.length++;
//     }

//     print() {
//         let print = this.head;
//         let count = 0;
//         do {
//             console.log(print.data);
//             print = print.next;
//             count++;
//         } while (print !== this.head && count < this.length);
//     }
// }

// const circularList = new CircularLinkedList();
// circularList.append(10);
// circularList.append(20);
// circularList.print();
// console.log(circularList);


// class node{
//     constructor(data){
//         this.data  = data
//         this.next  = null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//         this.length  = 0
//     }
//     prepend(data){
//         const prependNode  = new node(data)
//         prependNode.next = this.head
//         this.head = prependNode
//         this.length++
//     }
//     append(data){
//         const appendNode = new node(data)
//         if(this.head === null){
//             this.head = appendNode
//         }else{
//             let current = this.head
//             while(current.next!== null){
//                 current = current.next
//             }
//             current.next = appendNode
//         }
//         this.length++
//     }
//     insert(data,index){
//         if(index < 0 || index >this.length){
//             console.log("INVALID INDEX");
//             return null
//         }
//         let insertNode = new node(data)
//         if(index === 0){
//             let node = this.head
//             insertNode.next = node
//             this.head = insertNode
//         }else{
//             let current = this.head
//             for(let i=0;i< index -1;i++){
//                 current = current.next
//             }
//             insertNode.next = current.next
//             current.next = insertNode
//         }
//         this.length++
//     }
//     removeIndex(index){
//         if(index < 0 || index >this.length-1|| index === undefined){
//             console.log("INVALID INDEX");
//             return null
//         }
//         let removeNode;
//         if(index === 0){
//             removeNode = this.head
//             this.head = removeNode.next
//         }else{
//             let current = this.head
//             for(let i =0;i<index-1;i++){
//                 current = current.next
//             }
//              removeNode =current.next 
//             current.next = removeNode.next
//         }
//         this.length--
//     }
//     removeData(data){
//         let removeNode;
//         if(this.head.data === data){
//             removeNode = this.head
//             this.head = removeNode.next
//             return data
//         }else{
//             let current = this.head
//             while(current.next && current.next.data !== data){
//                 current = current.next

//             }
//             if(current.next){
//                 removeNode= current.next
//                 current.next = removeNode.next
//                 return data
//             }
//             return console.log("INVALID DATA");
//         }
//     }
//     removeMiddle(){
//         let slow = this.head
//         let fast = this.head
//         let prev = null
//         if( fast.next !== null){
//             prev = slow
//             slow = slow.next
//             fast = fast.next.next
//         }
//         if(prev !== null){
//             prev.next = slow.next
//         }else{
//             this.head = slow.next
//         }
//         this.length--
//         return slow
//     }
//     reverse(){
//         let prev = null
//         let current = this.head
//         while(current){
//             let next = current.next
//             current.next = prev
//             prev = current
//             current = next
//         }
//         this.head = prev
//     }
//     search(data){
//         let i=0
//         let current = this.head
//         while(current){
//             if(current.data === data){
//                 return i
//             }
//             i++
//             current = current.next
//         }
//         return -1
//     }
//     print(){
//         let print = this.head
//         while(print){
//             console.log(print.data);
//             print = print.next
//         }
//     }
// }

// const list = new linkedList()
// list.append(10)
// list.append(20)
// list.append(30)
// list.print()
// console.log(list.search(40));



// class node{
//     constructor(data){
//         this.data = data
//         this.next = null
//         this.prev = null
//     }
// }
// class linckedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.length = 0
//     }
//     prepend(data){
//         const prependNode = new node(data)
//         if(this.head === null){
//             this.head = prependNode
//             this.tail = prependNode
//         }else{
//             prependNode.next = this.head
//             this.head.prev = prependNode
//             this.head =prependNode
//         }
//         this.length++
//     }
//     append(data){
//         const appendNode = new node(data)
//         if(this.head === null){
//             this.head = appendNode
//             this.tail = appendNode
//         }else{
//             appendNode.prev = this.tail
//             this.tail.next = appendNode
//             this.tail = appendNode            
//         }
//         this.length++
//     }
// insert(data,index){
//     if(index <0|| index >this.length){
//         console.log("INVALID INDEX");
//         return null
//     }
//     let insertNode = new node (data)
//     if(index === 0){
//         let node = this.head
//         insertNode.next = this.head
//         node.prev = insertNode
//         this.head = insertNode
//     }else if(index === this.length){
//         let node = this.tail
//         node.next = insertNode
//         insertNode.prev = node
//         this.tail = insertNode
//     }else{
//         let current = this.head
//         for(let i=0;i<index -1;i++){
//             current = current.next
//         }
//         insertNode.next = current.next
//         current.next = insertNode
//         insertNode.next.prev = insertNode
//         insertNode.prev = current

//     }
// }
//     removeIndex(index){
//         if(index <0|| index >=this.length){
//             console.log("INVALID INDEX");
//             return null
//         }
//         let removeNode;
//         if(index === 0){
//             removeNode = this.head
//             this.head = removeNode.next
//             this.head.prev = null
//         }else if(index === this.length-1){
//             removeNode = this.tail
//             this.tail = removeNode.prev
//             this.tail.next = null
//         }else{
//             let current = this.head
//             for(let i=0;i<index -1;i++){
//                 current = current.next
//             }
//             removeNode = current.next
//             current.next = removeNode.next
//             removeNode.next.prev = current
//         }
//         this.length--
//     }
//     removeMiddle(){
//         let slow = this.head
//         let fast = this.head
//         let prev = null
//         while(fast !== null && fast.next !== null){
//             prev = slow
//             slow = slow.next
//             fast = fast.next.next
//         }
//         if(prev !== null){
//             prev.next = slow.next
//         }else{
//             this.head = slow.next
//         }
//         if (slow.next === null) {
//             this.tail = prev;
//         }
//         this.length--        
//     }
//     print(){
//         let print = this.head
//         while(print){
//             console.log(print.data);
//             print = print.next
//         }
//     }
//     reverse(){
//         let print = this.tail
//         while(print){
//             console.log(print.data);
//             print = print.prev
//         }
//     }
// }
// const list = new linckedList()
// list.append(10)
// list.append(20)
// list.append(30)
// list.removeMiddle()
// list.print()



// function linearSearch(arr,target){
//     for(let i=0;i<arr.length-1;i++){
//         if(target === arr[i]){
//             return i
//         }
//     }
//     return -1
// }


// let arr = [1,2,3,4,5,6]
// console.log(linearSearch(arr,5));


// function binertSearch(arr,target){
//     let leftIndex = 0
//     let rightIndex = arr.length-1
//     while(leftIndex < rightIndex){
//         let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//         if(target === arr[middleIndex]){
//             return middleIndex
//         }
//         if(target < arr[middleIndex]){
//              rightIndex = middleIndex -1
//         }else{
//             leftIndex = middleIndex +1
//         }
//     }
//     return -1
// }


// let arr = [1,2,3,4,5,6,7]
// console.log(binertSearch(arr,4));


// function binertSearch(arr , target){
//     return recurtion(target,arr,0,arr.length-1)
// }
// function recurtion(target ,arr,leftIndex,rightIndex){
//     if(leftIndex > rightIndex){
//         return  console.log("INVALID");

//     }
//     let middleIndex  = Math.floor((leftIndex + rightIndex)/2)
//     if(target === arr[middleIndex]){
//         return middleIndex
//     }
//     if(target < arr[middleIndex]){
//         return recurtion(target,arr,leftIndex,middleIndex-1)
//     }else{
//         return recurtion (target,arr,middleIndex+1,rightIndex)
//     }

// }

// let arr = [1,2,3,4,5,6,7]
// console.log(binertSearch(arr,41));



// function palindrom(str){
//     if(str.length <=1){
//         return true
//     }else if(str[0] !== str[str.length-1]){
//         return false
//     }else {
//         return palindrom(str.slice(1,-1))
//     }
// }
// console.log(palindrom("MalayalaM"));

// function fabonacci(n){
//     if(n<=1){
//         return n
//     }else{
//         return fabonacci(n-1)+fabonacci(n-2)
//     }
// }
// console.log(fabonacci(6));

// function reverse(str){
//     if(str === ""){
//         return ""
//     }else{
//         return reverse(str.substr(1))+str[0]
//     }
// }
// console.log(reverse("najil"));

// opfunction factorial(n){
//     if(n<=1){
//         return n
//     }else{
//         return n*factorial(n-1)
//     }
// }
// console.log(factorial(5));

// let str = [1,2,3,4,5,6];
// let reverse =[]
// for (let i = str.length - 1; i >= 0; i--) {
//     reverse.push(str[i])
// }
// console.log(reverse);


function create() {
    return {
        head: null,
        tail: null,
        createNode: function (data) {
            return {
                head: data,
                next: null
            }
        },
        insert: function (data) {
            const node = this.createNode(data)
            if (!this.head) {
                this.head = node
                this.tail = node
            } else {
                this.tail.next = node
                this.tail = node
            }
        },
        reverse: function () {
            let prev = null
            let next = null
            let tail = prev
            let current = this.head
            while (current) {
                next = current.next
                current.next = null
                if (!prev) {
                    prev = current
                    tail = current
                } else {
                    console.log(current);
                }
                if(!next) {
                    break
                } else {
                    current = next
                }
            }
            this.head = prev
        },
        print: function () {
            let current = this.head
            while (current) {
                console.log(current.head);
                current = current.next
            }
        }
    }
}

const list = create()
list.insert(10)
list.insert(20)
list.insert(30)
list.insert(40)
list.insert(50)
list.print()
list.reverse()
console.log('______________');
list.print()