

    class queue{
    constructor(){
        this.items = []
        this.rear = 0;
        this.front =0;
    }
    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }
    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    peek(){
        return this.items[this.front]
    }
    isempty(){
        return this.rear - this.front ===0
    }
    size(){
        return this.rear -this.front
    }
    secondLargest(){
        let largest = this.items[0]
        let secLargest = this.items[1]
        if(largest<secLargest){
            [largest,secLargest] = [secLargest,largest]
        }
        for(let i=2;i<this.items.length;i++){
            if(this.items[i]>largest){
                secLargest = largest
                largest = secLargest
            }else if(this.items[i] > secLargest && this.items[i] !== largest){
                secLargest = this.items[i]
            }
        }
        return [secLargest,largest]
    }
    print(){
        console.log(this.items);
    }
}

const q = new queue()
q.enqueue(10)
q.enqueue(200)
q.enqueue(30)
q.enqueue(20)

q.enqueue(10)

q.print()
console.log(q.secondLargest());

class queueUsingStack{
    constructor(){
        this.stack = new stack()
    }
    enqueue(data){
        this.stack.push(data)
    }
    dequeue(){
        this.stack.pop()
    }
    peek(){
       return this.stack.peek()
    }
    print(){
        this.stack.print()
    }
}

const queue = new queueUsingStack()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.print()
console.log(queue.peek());
