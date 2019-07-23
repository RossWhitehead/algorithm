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
    it('Tree.toString', function () {
        const tree = new Tree()
        tree
            .appendChild("test1")
                .children[0].appendChild("test11").appendChild("test12")
                    .children[1].appendChild("test121")
                .parent
            .parent.appendChild("test2")
        const expected = 'tree\n-test1\n--test11\n--test12\n---test121\n-test2\n'
        console.log(tree.toString())
        assert.equal(expected, tree.toString() )
    })
})
