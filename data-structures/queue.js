module.exports = {
    Queue
}

class Queue {
    constructor(size) {
        this.items = []
        this.maxSize = size
    }

    enqueue = (item) => {
        if (this.maxSize && this.data.length === this.maxSize) {
            throw new Error('Overflow')
        }
        this.data.push(item)
    }

    dequeue = () => {
        if (this.isEmpty()) {
            throw new Error('Underflow')
        }
        return this.data.shift()
    }

    peek = () => {
        return this.isEmpty() ? this.data[0] : undefined
    }

    isFull = () => {
        return this.data.length === maxSize
    }

    isEmpty = () => {
        return !this.data.length
    }
}

