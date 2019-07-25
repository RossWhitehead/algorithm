class Graph {
    constructor() {
        this.adjList = new Map()
    }

    addVertex(vertex) {
        this.adjList.set(vertex, [])
    }

    addVertices(vertices) {
        vertices.forEach((vertex) => {
            this.addVertex(vertex)
        })
    }

    addEdge(vertex1, vertex2) {
        // uni-directional
        this.adjList.get(vertex1).push(vertex2)
        this.adjList.get(vertex2).push(vertex1)
    }

    bft(vertex) {
        const results = []
        const visited = new Set()
        this._traverse(vertex, results, visited)
        return results
    }

    _traverse(vertex, results, visited) {
        if (!results.includes(vertex)) {
            results.push(vertex)
        }
        if (!visited.has(vertex)) {
            visited.add(vertex)

            this.adjList.get(vertex).forEach((edge) => {
                if (!results.includes(edge)) {
                    results.push(edge)
                }
            })
            this.adjList.get(vertex).forEach((edge) => {
                if (!visited.has(edge)) {
                    this._traverse(edge, results, visited)
                }
            })
        }
    }

    toString() {
        let str = ''
        this.adjList.forEach((value, key) => {
            str += key + ' ->'
            value.forEach((vertex) => {
                str += ' ' + vertex
            })
            str += '\n'
        })
        return str
    }
}

module.exports = {
    Graph
}
