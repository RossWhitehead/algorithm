var assert = require('assert')
var { Tree, TreeNode } = require('../../data-structures/tree')

describe('Tree', function () {
    it('New tree has empty children', function () {
        assert.equal(true, new Tree().children.length === 0)
    })
    it('Tree appendChild returns self', function () {
        assert.equal(true, new Tree().appendChild("test") instanceof Tree)
    })
    it('Tree appendChild appends child', function () {
        assert.equal(true, new Tree().appendChild("test1").appendChild() instanceof Tree)
    })
    it('Tree.toJson - empty', function () {
        assert.equal('{"tree":[]}', new Tree().toJson())
    })
    it('Tree.toJson - children', function () {
        const tree = new Tree()
        tree.appendChild("test1").appendChild("test2").children[1].appendChild("test21")
        const expectedJson = '{"tree":[{"test1":[]},{"test2":[{"test21":[]}]}]}'
        assert.equal(expectedJson, tree.toJson() )
    })
})
