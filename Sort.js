module.exports = {
    selection: (arr) => {
        if(Array.isArray(arr) === false) {
            throw new Error('arr must be an array')
        }
        let sortedArr = arr.slice()
        for(i = 0; i < sortedArr.length - 1; i++) {
            let minIdx = i
            for(j = i + 1; j < sortedArr.length; j++) {
                if(sortedArr[j] < sortedArr[minIdx]) {
                    minIdx = j
                }
            }
            if(minIdx > i) {
                let temp = sortedArr[i] 
                sortedArr[i] = sortedArr[minIdx]
                sortedArr[minIdx] = temp
            }
        }
        return sortedArr
    },

    bubble: (arr) => {
        if(Array.isArray(arr) === false) {
            throw new Error('arr must be an array')
        }
        let sortedArr = arr.slice()
        for(i = 0; i < sortedArr.length - 1; i++) {
            for(j = i + 1; j < sortedArr.length; j++) {
                if(sortedArr[j] < sortedArr[i]) {
                    let temp = sortedArr[i] 
                    sortedArr[i] = sortedArr[j]
                    sortedArr[j] = temp
                }
            }
        }
        return sortedArr
    },

    insertion: (arr) => {
        if(Array.isArray(arr) === false) {
            throw new Error('arr must be an array')
        }
        let linkedList = new LinkedList()
        for(i = 0; i < arr.length; i++) {
            let isInserted = false
            currentNode = linkedList.head
            if(currentNode === null) {
                linkedList.head = new Node(arr[i])
            } else {
                while(currentNode && isInserted === false) {
                    if(currentNode.data > arr[i]) {
                        const nextNode = new Node(currentNode.data, currentNode.next) 
                        currentNode.data = arr[i]
                        currentNode.next = nextNode
                        isInserted = true
                    }
                    else {
                        if(currentNode.next === null) {
                            currentNode.next = new Node(arr[i])
                            isInserted = true
                        } else {
                            currentNode = currentNode.next
                        }
                    }
                }
            }
        }
        return linkedList.toArray()
    }
}

class Node{
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    toArray() {
        let arr = new Array()
        let node = this.head
        while(node !== null) {
            arr.push(node.data)
            node = node.next
        }
        return arr
    }
}