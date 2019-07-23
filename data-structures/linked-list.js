class LinkedList {
    constructor() {
        this.head = null
    }
    toArray() {
        let arr = new Array()
        let node = this.head
        while (node !== null) {
            arr.push(node.data)
            node = node.next
        }
        return arr
    }
}

class Node {
    constructor(data, next = null) {
        this.data = data,
            this.next = next
    }
}

module.exports = {
    LinkedList, Node
}

