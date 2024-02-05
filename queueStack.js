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

class stack{
    constructor(){
        this.element= []
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
    largest(){
        let largest = this.element[0]
        for(let i=1;i<this.element.length;i++){
            if(this.element[i]>largest){
                largest = this.element[i]
            }
        }
        return largest
    }
    smallest(){
        let smallest = this.element[0]
        for(let i=1;i<this.element.length;i++){
            if(this.element[i]<smallest){
                smallest = this.element[i]
            }
        }
        return smallest
    }
    secondlargest(){
        let largest = this.element[0]
        let secondlargest = this.element[1]
        if(secondlargest>largest){
            [largest,secondlargest] = [secondlargest,largest]
        }
        for(let i=2;i<this.element.length;i++){
            if(this.element[i]>largest){
                secondlargest = largest
                largest = this.element[i]
            }else if(this.element[i]>secondlargest && this.element[i]!== largest){
                secondlargest = this.element[i]
            }
        }
        return [largest,secondlargest]
    }
    isValidParentheses(s) {
        const stack = [];
    
        for (let char of s) {
            if (char === '(' || char === '[' || char === '{') {
                stack.push(char);
            } else {
                const lastOpenParenthesis = stack.pop();
                if ((char === ')' && lastOpenParenthesis !== '(') ||(char === ']' && lastOpenParenthesis !== '[') ||(char === '}' && lastOpenParenthesis !== '{')) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
    secondSmallest(){
        let smallest = this.element[0]
        let secondSmallest = this.element[1]
        if(smallest>secondSmallest){
            [smallest,secondSmallest] = [secondSmallest,smallest]
        }
        for(let i=2;i<this.element.length;i++){
            if(this.element[i]<smallest){
                secondSmallest = smallest
                smallest = this.element[i]
            }if(this.element[i]<secondSmallest&& this.element[i]!==smallest){
                secondSmallest = smallest
            }
        }
        return [smallest,secondSmallest]
    }
    print(){
        console.log(this.element);
    }
}
const s = new stack()
s.push(20)
s.push(40)
s.push(10)
s.push(50)
s.push(60)
s.push(2)
s.print()
console.log(s.isValidParentheses("()"));

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
