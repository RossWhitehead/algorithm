class LinkedList {
    constructor() {
        this.head = null
    }
    toArray() {
        let arr = []
        let node = this.head
        while (node !== null) {
            arr.push(node.data)
            node = node.next
        }
        return arr
    }
}

class LinkedListNode {
    constructor(data, next = null) {
        this.data = data,
            this.next = next
    }
}

module.exports = {
    LinkedList, LinkedListNode
}

