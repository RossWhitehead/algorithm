var assert = require('assert')
var { selection , bubble, insertion } = require('../Sort')

describe('Sort', function() {
    describe('selection', function() {
        it('Throws error when arr is not an array', function() {
            assert.throws(
                function() {
                    selection('not an array')
                }, 
                Error, 
                'arr must be an array')
        })
        it('Sorts an array', function() {
            assert.deepEqual([1, 2, 3, 4, 5], selection([4, 3, 5, 2, 1]))
        })
    })
    describe('bubble', function() {
        it('Throws error when arr is not an array', function() {
            assert.throws(
                function() {
                    bubble('not an array')
                }, 
                Error, 
                'arr must be an array')
        })
        it('Sorts an array', function() {
            assert.deepEqual([1, 2, 3, 4, 5], selection([4, 3, 5, 2, 1]))
        })
    })
    describe('insertion', function() {
        it('Throws error when arr is not an array', function() {
            assert.throws(
                function() {
                    insertion('not an array')
                }, 
                Error, 
                'arr must be an array')
        })
        it('Sorts an array', function() {
            assert.deepEqual([1, 2, 3, 4, 5], insertion([4, 3, 5, 2, 1]))
        })
    })
})