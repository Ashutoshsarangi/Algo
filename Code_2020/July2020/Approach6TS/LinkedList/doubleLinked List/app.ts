/**
 * @description Here I Write Algorithm for
 * 1. Append
 * 2. Prepend
 * 3. Traversal
 * 4. Delete
 */


class LinkedListNode {
    public next: any;
    public prev: any;
    constructor(public data: number) { }
}

class DoubleLinkedList {
    public head: any;

    public append(item: number) {
        console.log(this.head);
        if (this.head === undefined) {
            console.log('inside')
            this.head = new LinkedListNode(item);
            return;
        }
        let currentNode = this.head;
        while (currentNode.next != null) {
            currentNode = currentNode.next;
        }
        let newNode = new LinkedListNode(item);
        currentNode.next = newNode;
        newNode.prev = currentNode;
    }

    public prepend(item: number) {
        let newNode = new LinkedListNode(item);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    public traversal() {
        console.log("----------------");
        let currentNode = this.head;
        while (currentNode != null) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    public delete(item: number) {
        if (this.head === undefined) {
            return;
        }
        if (this.head.data === item) {
            this.head = this.head.next;
            this.head.prev = null;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next != null) {
            console.log('111111', currentNode.next.data);
            if (currentNode.next.data === item) {
                //Delete Logic
                console.log('Inside----');
                currentNode.next = currentNode.next.next;
                currentNode.next.prev = currentNode;
                return;
            }
            currentNode = currentNode.next;
        }
    }
}

let Dll = new DoubleLinkedList();

Dll.append(1);
Dll.append(3);
Dll.append(8);

Dll.traversal();

Dll.prepend(500);
Dll.prepend(99999);

Dll.traversal();

Dll.delete(3);

Dll.traversal();

Dll.delete(99999);

Dll.traversal();
