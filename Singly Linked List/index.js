/* Singly Linked List */

function Node(val) {
    this.value = val;
    this.next = null;
}

function SinglyLinkedList () {
    this.head = null;
    this.tail = null;
    this.length = 0;

    this.push = function (val) {
        var node = new Node(val);
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
}