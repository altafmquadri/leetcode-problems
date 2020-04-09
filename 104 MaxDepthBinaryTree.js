/* 
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/

class TreeNode {
    constructor(val) {
        this.val = val
        this.left = this.right = null
    }
}

const maxDepth = root => {
    if (!root) return 0
    let counter = 1

    const traverse = (c) => {
        let current
        let visited = []
        let queue = [c, 's']
        while (queue.length > 1) {
            current = queue.shift()
            visited.push(current)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
            if (current === 's') counter++, queue.push('s')
        }
        return counter
    }
    return traverse(root)
}

//nice recursive solution I found
/* const maxDepth = (root, depth = 0) => {
    if (!root) return depth;
    return Math.max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1));
} */

const tree1 = new TreeNode(3)
tree1.left = new TreeNode(9)
tree1.right = new TreeNode(20)

tree1.right.left = new TreeNode(15)
tree1.right.right = new TreeNode(7)

console.log(maxDepth(tree1));
