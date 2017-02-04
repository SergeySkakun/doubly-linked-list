const Node = require('./node');

class LinkedList {
    constructor() {
        this.list = new Node();
        this.length = 0;
    }

    append (data) {
        if (this.isEmpty()) { // Если текущий объект пустой, то он новый.
            this.list.data = data;
            this.length++;
            return this.list;
        }

        this.list.next = new Node (this.list, data, null);
        this.length++;
        return this._tail;
    }

    head() {
        if (this.isEmpty()) {
            return null;
        }
        while (this.list.prev != null) {
            this.list = this.list.prev;
        }
        return this.list.data;
    }

    get _head() {
        this.head();
        return this.list;
    }

    tail() {
        if (this.isEmpty()) {
            return null;
        }
        while (this.list.next != null) {
            this.list = this.list.next;
        }
        return this.list.data;
    }

    get _tail() {
        this.tail();
        return this.list;
    }

    at(index) {
        this._head;

        if (index <= 0) {
            return this.head();
        }

        do {
            this.list = this.list.next;
            index--;
        }
        while (index > 0);

        return this.list.data;
    }

    insertAt(index, data) {
        this.at(index-1);

        if (this.list.prev != null) {
            this.list.prev = new Node (null, data, this.list);
            this.length++;
            return this.list.prev;
        }

                this.list.next = new Node (this.list, data, this.list.next.next);
        this.length++;
        return this.list;
    }

    isEmpty() {
        if (this.list.data == null) {
            return true;
        }
        return false;
    }

    clear() {
        this.list = new Node();
        this.length = 0;
        return this.list;
    }

    deleteAt(index) {
        this.at(index);
        this.list.prev.next = this.list.next;
        this.list.next.prev = this.list.prev;
    }

    reverse() {
        this.tail();

        for (let i = 0; i <= this.length; i++) {
            
        }
        return this.list;
    }

    indexOf(data) {
        this.head();
        let i = 0;
        while (this.list.data != data) {
            i++;
            if(this.list.next == null) {
                return -1;
            }
            this.list = this.list.next;
        }
        return i;
    }
}


module.exports = LinkedList;
