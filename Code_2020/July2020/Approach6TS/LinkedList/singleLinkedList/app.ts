/**
 * @description Here I covered the append, traversal
 * prepend and delete node in Linked List.
 */

class LinkListNode {
  public next: any = null;
  constructor(
    public data: number
  ) { }
}

class LinkedList {
  head: any;

  public append(item: number) {
    console.log(this.head)
    if (this.head === undefined) {
      this.head = new LinkListNode(item);
      return;
    }
    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    let newNode = new LinkListNode(item);
    currentNode.next = newNode;
  }

  public prepend(item: number) {

    let newNode = new LinkListNode(item);
    newNode.next = this.head;
    this.head = newNode;
  }

  public traversel() {

    console.log('-------------');
    console.log(this.head);
    let currentNode = this.head;
    while (currentNode != null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  public deleteNode(item: number) {
    if (this.head == undefined) {
      return;
    }
    if (this.head.data === item) {
      console.log('Header Inside')
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    console.log('Hello');
    while (currentNode != null) {
      console.log(currentNode.next.data);
      if (currentNode.next.data === item) {
        console.log('Need to remove');
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }

  }
}

let ll = new LinkedList();

ll.append(2);
ll.append(5);
ll.append(10);

ll.traversel();

ll.prepend(300);

ll.traversel();

ll.deleteNode(2);

ll.traversel();

ll.deleteNode(300);

ll.traversel()

ll.prepend(500);

ll.append(999);

ll.traversel();