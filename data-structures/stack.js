module.exports = {
    Stack
}

class Stack {
    constructor(size) {
        this.items = []
        this.maxSize = size
    }

    push(item) {
        if (this.maxSize && this.data.length === this.maxSize) {
            throw new Error('Overflow')
        }
        this.data.push(item)
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Underflow')
        }
        return this.data.pop()
    }

    peek() {
        return this.isEmpty() ? this.data[data.length - 1] : undefined
    }

    isFull() {
        return this.data.length === maxSize
    }

    isEmpty() {
        return !this.data.length
    }
}
