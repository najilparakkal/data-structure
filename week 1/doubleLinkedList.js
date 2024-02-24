

class node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}
class linckedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    prepend(data){
        const prependNode = new node(data)
        if(this.head === null){
            this.head = prependNode
            this.tail = prependNode
        }else{
            prependNode.next = this.head
            this.head.prev = prependNode
            this.head =prependNode
        }
        this.length++
    }
    append(data){
        const appendNode = new node(data)
        if(this.head === null){
            this.head = appendNode
            this.tail = appendNode
        }else{
            appendNode.prev = this.tail
            this.tail.next = appendNode
            this.tail = appendNode            
        }
        this.length++
    }
insert(data,index){
    if(index <0|| index >this.length){
        console.log("INVALID INDEX");
        return null
    }
    let insertNode = new node (data)
    if(index === 0){
        let node = this.head
        insertNode.next = this.head
        node.prev = insertNode
        this.head = insertNode
    }else if(index === this.length){
        let node = this.tail
        node.next = insertNode
        insertNode.prev = node
        this.tail = insertNode
    }else{
        let current = this.head
        for(let i=0;i<index -1;i++){
            current = current.next
        }
        insertNode.next = current.next
        current.next = insertNode
        insertNode.next.prev = insertNode
        insertNode.prev = current

    }
}
    removeIndex(index){
        if(index <0|| index >=this.length){
            console.log("INVALID INDEX");
            return null
        }
        let removeNode;
        if(index === 0){
            removeNode = this.head
            this.head = removeNode.next
            this.head.prev = null
        }else if(index === this.length-1){
            removeNode = this.tail
            this.tail = removeNode.prev
            this.tail.next = null
        }else{
            let current = this.head
            for(let i=0;i<index -1;i++){
                current = current.next
            }
            removeNode = current.next
            current.next = removeNode.next
            removeNode.next.prev = current
        }
        this.length--
    }
    removeMiddle(){
        let slow = this.head
        let fast = this.head
        let prev = null
        while(fast !== null && fast.next !== null){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        if(prev !== null){
            prev.next = slow.next
        }else{
            this.head = slow.next
        }
        if (slow.next === null) {
            this.tail = prev;
        }
        this.length--        
    }
    print(){
        let print = this.head
        while(print){
            console.log(print.data);
            print = print.next
        }
    }
    reverse(){
        let print = this.tail
        while(print){
            console.log(print.data);
            print = print.prev
        }
    }
}
const list = new linckedList()
list.append(10)
list.append(20)
list.append(30)
list.removeMiddle()
list.print()

