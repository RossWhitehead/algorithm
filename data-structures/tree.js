class Tree {
    constructor() {
        this.children = []
    }

    appendChild(name) {
        this.children.push(new TreeNode(name))
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
}

class TreeNode {
    constructor(name, parent) {
        this.name = name,
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
}

module.exports = {
    Tree, TreeNode
}

