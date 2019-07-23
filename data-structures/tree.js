
const padding = '-'

class Tree {
    constructor() {
        this.children = []
    }

    appendChild(name) {
        this.children.push(new TreeNode(name, this))
        return this
    }

    toJson() {
        let json = '{"tree":['
        if (this.children.length) {
            this.children.forEach((child) => {
                json += child.toJson() + ','
            })
            json = json.slice(0, -1)
        }
        json += ']}'
        return json
    }

    toString() {
        let str = 'tree\n'
        let pad = padding
        if (this.children.length) {
            this.children.forEach((child) => {
                str += child.toString(pad)
            })
        }
        return str
    }
}

class TreeNode {
    constructor(name, parent) {
        this.name = name
        this.children = []
        this.parent = parent
    }

    isRoot() {
        return !this.parent
    }

    appendChild(name) {
        this.children.push(new TreeNode(name, this))
        return this
    }

    toJson() {
        let json = '{"' + this.name + '":['
        if (this.children.length) {
            this.children.forEach((child) => {
                json += child.toJson() + ','
            })
            json = json.slice(0, -1)
        }
        json += ']}'
        return json
    }

    toString(pad) {
        let str = pad + this.name + '\n'
        if (this.children.length) {
            pad += padding
            this.children.forEach((child) => {
                str += child.toString(pad) 
            })
        }
        return str
    }
}

module.exports = {
    Tree, TreeNode
}

