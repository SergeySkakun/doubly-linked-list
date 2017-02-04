class Node {
    constructor(prev = null, data = null, next = null) {
        this.prev = prev;
        this.data = data;
        this.next = next;
    }
}

module.exports = Node;
