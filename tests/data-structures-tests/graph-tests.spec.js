var assert = require('assert')
var { Graph } = require('../../data-structures/graph')

describe('Graph', function () {
    it('toString does what it says on the tim', function () {
        const g = buildGraph()
        expected = 'A -> B D E\nB -> C\nC -> F\nD -> E\nE -> F C\nF ->\n'
        assert.equal(expected, g.toString())
    })
    it('bfs returns valid result', function () {
        const g = buildGraph()
        expected = ['A', 'B', 'D', 'E', 'C', 'F']
        assert.deepEqual(expected, g.bfs('A'))
    })
    it('dfs returns valid result', function () {
        const g = buildGraph(); 
        expected = ['A', 'B', 'C', 'F', 'D', 'E']
        assert.deepEqual(expected, g.dfs('A'))
    })
})

function buildGraph() {
    const g = new Graph();
    g.addVertices(['A', 'B', 'C', 'D', 'E', 'F']);
    g.addEdge('A', 'B');
    g.addEdge('A', 'D');
    g.addEdge('A', 'E');
    g.addEdge('B', 'C');
    g.addEdge('D', 'E');
    g.addEdge('E', 'F');
    g.addEdge('E', 'C');
    g.addEdge('C', 'F');
    // Note. unidirectional
    // A -> B D E
    // B -> C
    // C -> F
    // D -> E
    // E -> F C
    // F -> 
    return g;
}
