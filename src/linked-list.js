const Node = require('./node');

class LinkedList {
    constructor() {
        this.list = new Node(null, null, null);
        this.length = 0;
    }

    append (data) {
        if (this.isEmpty()) { // Если текущий объект пустой, то он новый.
            this.list.data = data;
            this.length++;
            return this;
        }
        this.list.next = new Node (this.list, data, null);
        this.length++;
        this.list = this.list.next;
        return this;
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

        if (index == 0) {
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
        if (this.isEmpty()) {
            this.at(0);
            return this.list;
        }

        if (index == 0) {
            this.at(index);
            this.list.prev = new Node (null, data, this.list);
            this.length++;
            return this.list.prev;
        }

        if (index >= this.length) {
            this.at(index);
            this.list.next = new Node (this.list, data, null);
            this.length++;
            return this.list.next
        }

        this.at(index-1);
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
        this.list = new Node(null, null, null);
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if (index == 0) {
            if (this.length == 1) {
                this.length = 0;
                this.clear();
                return this;
            }
            this.list.next.prev = null;
            this.list = this.list.next;
            return this;
        }
        this.at(index);
        this.list.prev.next = this.list.next;
        this.list.next.prev = this.list.prev;
        return this;
    }

    reverse() {
        this.head();

        let array = [];
        for (let i = 0; i < this.length; i++) {
            array.push(this.list.data);

            if (this.list.next != null){
                this.list = this.list.next;
            }
            else break;
        }

        array = array.reverse();

        this.head();
        for (let i = 0; i < this.length; i++) {
            this.list.data = array[i];
            if (this.list.next != null){
                this.list = this.list.next;
            }
            else {
                break;
            }
        }
        return this;
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
