class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    prepend(data) {
        const prependNode = new Node(data);
        if (this.head === null) {
            prependNode.next = prependNode; 
        } else {
            prependNode.next = this.head;
        }
        this.head = prependNode;
        this.length++;
    }
    append(data) {
        const appendNode = new Node(data);
        if (this.head === null) {
            appendNode.next = appendNode; // Point to itself for circularity
            this.head = appendNode;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = appendNode;
            appendNode.next = this.head; // Make it circular
        }
        this.length++;
    }

    print() {
        let print = this.head;
        let count = 0;
        do {
            console.log(print.data);
            print = print.next;
            count++;
        } while (print !== this.head && count < this.length);
    }
}
const circularList = new CircularLinkedList();
circularList.append(10);
circularList.append(20);
circularList.print();
console.log(circularList);