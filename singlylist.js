class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class SingleList {
    constructor() {
        this.head = null;
        this.tail = null
    }

    push(value) {
        if (!this.head) {
            let newNode = new Node(value);
            this.head = newNode;
            this.tail = newNode
        } else {
            let newNode = new Node(value);
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    pop() {
        if (!this.head) return "No items to remove";

        let current = this.head
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;

        return current;

    }

    unshift(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
        }
    }

    shift() {
        if (!this.head) return "No items to remove";

        let oldHead = this.head;
        this.head = oldHead.next;
    }
}

let sll = new SingleList();

sll.push("Hello");
sll.push("Bye");
sll.push("good evenning");
sll.push("rover");
sll.shift()


console.log(sll)