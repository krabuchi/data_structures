/* Singly Linked List */

function Node(val) {
    this.value = val;
    this.next = null;
    return this;
}

function SinglyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    this.push = function (val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    this.pop = function () {
        if (!this.head) return;
        var pre = this.head;
        var temp = pre;
        while (temp) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        pre.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
}