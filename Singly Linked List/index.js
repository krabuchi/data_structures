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
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    this.shift = function () {
        if (!this.head) return undefined;
        this.head = this.head.next;
        this.length--;
        if (this.length == 0) this.tail = null;
        return this;
    }

    this.unsift = function (val) {
        var node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    this.get = function (idx) {
        if(idx < 0 || idx >= this.length) return null;
        var start = 0;
        var node = this.head;
        while(start !== idx) {
            node = node.next;
            start++;
        }
        return node;
    }

    this.set = function (idx, val) {
        var node = this.get(idx);
        if(!node) return false;
        node.value = val;
        return true;
    }

    this.insert = function (idx, val) {
        var node = new Node(val);
        if(idx < 0 || idx > this.length) return false;
        if(idx === this.length) this.push(val);
        if(idx === 0) this.unsift(val);

        var prev = this.get(idx - 1);
        var temp = prev.next;
        node.next = temp;
        prev.next = node;
        this.length++;
        return true;
    }

    this.remove = function (idx) {
        if(idx < 0 || idx > this.length) return null;
        if(idx === this.length - 1) this.pop();
        if(idx === 0) this.shift();
        var node = this.get(idx - 1);
        var current = node.next;
        temp = current.next;
        node.next = temp;
        this.length--;
        return current;
    }

    this.reverse = function () {
        var temp = this.head;
        this.head = this.tail;
        this.tail = temp;


        var next, prev = null;

        for(var i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;    
        }
        return this;

    }

}