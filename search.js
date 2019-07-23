module.exports = {
    linear: (arr, x) => {
        if(Array.isArray(arr) === false) {
            throw new Error('arr is not an array')
        }
        if(typeof x === 'undefined') {
            throw new Error('x is undefined')
        }
        
        for(element of arr) {
            if(element === x) return true
        }    
        return false
    },

    binary: (arr, x) => {
        if(arr.length === 1) {
            return arr[0] = x
        } 

        for (i = 0; i < arr.length - 1; i++) { 
            if (arr[i] > arr[i + 1]) {
                throw new Error('Array is not sorted in ascending order.')
            }
        }

        return binaryRecursive(arr, x, 0, Math.ceil((arr.length - 1) / 2), arr.length - 1)
    },

    jump: (arr, x) => {
        if(arr.length === 1) {
            return arr[0] = x
        } 

        for (i = 0; i < arr.length - 1; i++) { 
            if (arr[i] > arr[i + 1]) {
                throw new Error('Array is not sorted in ascending order.')
            }
        }

        const step = Math.ceil(Math.sqrt(arr.length))
        const pos = 0

        while(arr.length > pos) {
            pos = pos + step
            if(arr[pos] = x) {
                return true
            }
            if(arr[pos] > x) {
                for(let i = pos - step + 1; i < step; i++){
                    if(arr[i] === x){
                        return true
                    }
                    return false
                }
            }
        }
    }
}


const binaryRecursive = (arr, x, lower, middle, upper) => {
    if(lower > arr.length - 1) {
        return false
    }
    if (arr[middle] === x) {
        return true
    }

    if(arr[middle] > x) {
        return binaryRecursive(arr, x, lower, lower + Math.ceil((upper - lower) / 2), middle - 1)
    } else {
        return binaryRecursive(arr, x, middle + 1, middle + Math.ceil((upper - middle + 1) / 2), upper)
    } 
}
