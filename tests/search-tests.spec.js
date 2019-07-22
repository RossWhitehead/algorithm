var assert = require('assert')
var { linear, binary, step } = require('../Search')

describe('Search', function() {
    describe('linear', function() {
        it('Returns true when integer exists in array', function() {
            assert.equal(true, linear([4, 3, 5, 2, 1], 3))
        })
        it('Returns false when integer does not exist in array', function() {
            assert.equal(false, linear([4, 3, 5, 2, 1], 6))
        })
    })

    describe('binary', function() {
        it('Throws error when array is not sorted in ascending order', function() {
            assert.throws(
                function() {
                    binary([1, 3, 4, 5, 2]
                )}, 
                Error, 
                'Array is not sorted in ascending order.')
        })
        it('Returns true when integer exists in array - odd elements', function() {
            assert.equal(true, binary([1, 2, 3, 4, 5], 4))
        })
        it('Returns true when integer exists in array - even elements', function() {
            assert.equal(true, binary([1, 2, 3, 4, 5, 6], 4))
        })
        it('Returns false when integer does not exist in array - odd elements', function() {
            assert.equal(false, binary([1, 2, 3, 4, 5], 6))
        })
        it('Returns false when integer does not exist in array - even elements', function() {
            assert.equal(false, binary([1, 2, 3, 4, 5, 6], 7))
        })
    })

    describe('step', function() {
        it('Throws error when array is not sorted in ascending order', function() {
            assert.throws(
                function() {
                    step([1, 3, 4, 5, 2]
                )}, 
                Error, 
                'Array is not sorted in ascending order.')
        })
        it('Returns true when integer exists in array', function() {
            assert.equal(true, binary([1, 2, 3, 4, 5], 4))
        })
        it('Returns false when integer does not exist in array', function() {
            assert.equal(false, binary([1, 2, 3, 4, 5], 6))
        })
    })
})