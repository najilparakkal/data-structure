
class node{
    constructor(data){
        this.data  = data
        this.next  = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.length  = 0
    }
    prepend(data){
        const prependNode  = new node(data)
        prependNode.next = this.head
        this.head = prependNode
        this.length++
    }
    append(data){
        const appendNode = new node(data)
        if(this.head === null){
            this.head = appendNode
        }else{
            let current = this.head
            while(current.next!== null){
                current = current.next
            }
            current.next = appendNode
        }
        this.length++
    }
    insert(data,index){
        if(index < 0 || index >this.length){
            console.log("INVALID INDEX");
            return null
        }
        let insertNode = new node(data)
        if(index === 0){
            let node = this.head
            insertNode.next = node
            this.head = insertNode
        }else{
            let current = this.head
            for(let i=0;i< index -1;i++){
                current = current.next
            }
            insertNode.next = current.next
            current.next = insertNode
        }
        this.length++
    }
    removeIndex(index){
        if(index < 0 || index >this.length-1|| index === undefined){
            console.log("INVALID INDEX");
            return null
        }
        let removeNode;
        if(index === 0){
            removeNode = this.head
            this.head = removeNode.next
        }else{
            let current = this.head
            for(let i =0;i<index-1;i++){
                current = current.next
            }
             removeNode =current.next 
            current.next = removeNode.next
        }
        this.length--
    }
    removeData(data){
        let removeNode;
        if(this.head.data === data){
            removeNode = this.head
            this.head = removeNode.next
            return data
        }else{
            let current = this.head
            while(current.next && current.next.data !== data){
                current = current.next

            }
            if(current.next){
                removeNode= current.next
                current.next = removeNode.next
                return data
            }
            return console.log("INVALID DATA");
        }
    }
    removeMiddle(){
        let slow = this.head
        let fast = this.head
        let prev = null
        if( fast.next !== null){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        if(prev !== null){
            prev.next = slow.next
        }else{
            this.head = slow.next
        }
        this.length--
        return slow
    }
    reverse(){
        let prev = null
        let current = this.head
        while(current){
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }
    search(data){
        let i=0
        let current = this.head
        while(current){
            if(current.data === data){
                return i
            }
            i++
            current = current.next
        }
        return -1
    }
    print(){
        let print = this.head
        while(print){
            console.log(print.data);
            print = print.next
        }
    }
}

const list = new linkedList()
list.append(10)
list.append(20)
list.append(30)
list.print()
console.log(list.search(40));
