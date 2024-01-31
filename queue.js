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
//     print(){
//         console.log(this.items);
//     }
// }

// const q = new queue()
// console.log(q.isempty());
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.print()
// console.log(q.dequeue());
// console.log(q.peek());
// console.log(q.size());
// // class queueUsingStack{
// //     constructor(){
// //         this.stack = new stack()
// //     }
// //     enqueue(data){
// //         this.stack.push(data)
// //     }
// //     dequeue(){
// //         this.stack.pop()
// //     }
// //     peek(){
// //        return this.stack.peek()
// //     }
// //     print(){
// //         this.stack.print()
// //     }
// // }

// // const queue = new queueUsingStack()
// // queue.enqueue(10)
// // queue.enqueue(20)
// // queue.enqueue(30)
// // queue.enqueue(40)
// // queue.print()
// // console.log(queue.peek());


// // class Stack {
// //     constructor() {
// //         this.items = [];
// //     }
// //     push(element) {
// //         this.items.push(element);
// //     }
// //     pop() {
// //         if (this.isEmpty()) {
// //             return "Underflow";
// //         }
// //         return this.items.pop();
// //     }
// //     peek() {
// //         if (this.isEmpty()) {
// //             return "Stack is empty";
// //         }
// //         return this.items[this.items.length - 1];
// //     }
// //     isEmpty() {
// //         return this.items.length === 0;
// //     }
// //     size() {
// //         return this.items.length;
// //     }
// //     middle() {
// //         if (this.isEmpty()) {
// //             return "Stack is empty";
// //         }
// //         const middleIndex = Math.floor(this.items.length / 2);
// //         return this.items[middleIndex]
// //     }
// //     removeMiddle() {
// //         if (this.isEmpty()) {
// //             return "Stack is empty";
// //         }

// //         const middleIndex = Math.floor(this.items.length / 2);
// //         this.items.splice(middleIndex, 1);
// //     }
// //     print() {
// //         console.log(this.items);
// //     }
// // }
// // const stack = new Stack();
// // stack.push(10);
// // stack.push(20);
// // stack.push(30);
// // stack.print();
// // stack.removeMiddle()
// // stack.print()

// // class StackUsingQueue {
// //     constructor() {
// //         this.queue = new queue();
// //     }

// //     push(element) {
// //         this.queue.enqueue(element);
// //     }

// //     pop() {
// //         return this.queue.dequeue();
// //     }

// //     peek() {

// //         return this.queue.peek();
// //     }

// //     print() {
// //         // Print the elements in queue
// //         this.queue.print();
// //     }
// // }
// // const stackq = new StackUsingQueue()
// // stackq.push(10)
// // stackq.push(20)

// // stackq.print()
// // console.log(stackq.peek());
