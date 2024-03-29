class node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class tree {
    constructor() {
        this.root = null
    }
    isEpmpty() {
        return this.root === null
    }
    insert(value) {
        const newNode = new node(value)
        if (this.isEpmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }
    hight(root) {
        if (root === null) {
            return -1
        } else {
            let leftHeight = this.hight(root.left)
            let rightHeight = this.hight(root.right)
            return Math.max(leftHeight, rightHeight) + 1
        }
    }
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
    leveOrder() {
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()

            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }
    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }
    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    bstvalidation() {
        return this.isValid(this.root, -Infinity, Infinity)
    }
    isValid(node, min, max) {

        if (!node) {
            return true
        }

        if (node.value < min || node.value > max) {
            return false;
        }

        return this.isValid(node.left, min, node.value) && this.isValid(node.right, node.value, max);

    }

    closestValue(target) {
        return this.findClosest(this.root, target, Infinity);
    }

    findClosest(node, target, closest) {
        if (node === null) {
            return closest;
        }

        if (Math.abs(node.data - target) < Math.abs(closest - target)) {
            closest = node.data;
        }

        if (target < node.data) {
            return this.findClosest(node.left, target, closest);
        } else if (target > node.data) {
            return this.findClosest(node.right, target, closest);
        } else {
            return closest;
        }
    }

    delete(value) {
        this.deleteNode(this.root, value)
    }
    deleteNode(root, value) {
        if (root === null) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
}
const tr = new tree()
tr.insert(10)
tr.insert(5)
tr.insert(20)
tr.insert(22)

tr.insert(3)
tr.insert(8)
// console.log(tr.search(tr.root,10))
// console.log(tr.search(tr.root,5))
// console.log(tr.search(tr.root,20))
// console.log(tr.search(tr.root,8))
// console.log(tr.search(tr.root,105))
tr.inOrder(tr.root)
console.log(tr.closestValue(10));
