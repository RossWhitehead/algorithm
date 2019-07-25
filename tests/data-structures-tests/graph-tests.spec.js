var assert = require('assert')
var { Graph } = require('../../data-structures/graph')

describe('Graph', function () {
    it('toString does what it says on the tim', function () {
        const g =  new Graph()
        g.addVertices(['A', 'B', 'C', 'D', 'E', 'F'])
        g.addEdge('A', 'B')
        g.addEdge('A', 'D') 
        g.addEdge('A', 'E') 
        g.addEdge('B', 'C') 
        g.addEdge('D', 'E') 
        g.addEdge('E', 'F') 
        g.addEdge('E', 'C') 
        g.addEdge('C', 'F') 
        expected = 'A -> B D E\nB -> A C\nC -> B E F\nD -> A E\nE -> A D F C\nF -> E C\n'
        assert.equal(expected, g.toString())
    })
    it('bfs returns valid result', function () {
        const g =  new Graph()
        g.addVertices(['A', 'B', 'C', 'D', 'E', 'F'])
        g.addEdge('A', 'B')
        g.addEdge('A', 'D') 
        g.addEdge('A', 'E') 
        g.addEdge('B', 'C') 
        g.addEdge('D', 'E') 
        g.addEdge('E', 'F') 
        g.addEdge('E', 'C') 
        g.addEdge('C', 'F') 
        expected = ['A', 'B', 'D', 'E', 'C', 'F']
        assert.deepEqual(expected, g.bft('A'))
    })
})