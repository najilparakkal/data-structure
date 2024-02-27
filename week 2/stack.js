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





class StackUsingQueue {
    constructor() {
        this.queue = new queue();
    }

    push(element) {
        this.queue.enqueue(element);
    }

    pop() {
        return this.queue.dequeue();
    }

    peek() {

        return this.queue.peek();
    }

    print() {
        // Print the elements in queue
        this.queue.print();
    }
}
const stackq = new StackUsingQueue()
stackq.push(10)
stackq.push(20)

stackq.print()
console.log(stackq.peek());
