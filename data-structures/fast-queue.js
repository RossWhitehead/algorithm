module.exports = {
    FastQueue
}

class FastQueue {
    constructor(size) {
        const data = []
        const maxSize = size
        const start = 0
    }

    enqueue = (item) => {
        if (this.maxSize && this.data.length === this.maxSize) {
            throw new Error('Overflow')
        }
        this.data.push(item)
    }

    dequeue = () => {
        if (this.data.length === 0) {
            throw new Error('Underflow')
        }

        return this.data[start]
        start++
    }

    peek = () => {
        return this.data.length >= start ? this.data[start] : undefined
    }

    isFull = () => {
        return this.data.length = maxSize
    }

    isEmpty = () => {
        return this.data.length = 0
    }
}