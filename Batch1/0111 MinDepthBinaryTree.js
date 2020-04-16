/* Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
Note: A leaf is a node with no children.

Example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2. */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

const minDepth = root => {
    if (!root) return 0
    if (!root.left) return minDepth(root.right) + 1
    if (!root.right) return minDepth(root.left) + 1
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}

//logic flawed not working
/* const minDepth = root => {
    if (!root) return 0

    const traverse = root => {
        let counter = 1
        if (!root) return counter
        let current
        let queue = [root, 's']

        while (queue.length > 1) {
            current = queue.shift()
            if (current === 's') counter++, queue.push('s')
            if (!current.left && !current.right) return counter
            else {
                if (current.left) queue.push(current.left)
                if (current.right) queue.push(current.right)
            }
        }
        return counter
    }
    return root.left && root.right ? Math.min(traverse(root.left), traverse(root.right)) + 1 : traverse(root)
} */

//example 1  
const tree1 = new TreeNode(3)
tree1.left = new TreeNode(9)
tree1.right = new TreeNode(20)
tree1.right.left = new TreeNode(15)
tree1.right.right = new TreeNode(7)

//example 2
const tree2 = new TreeNode(1)
tree2.left = new TreeNode(2)
tree2.right = new TreeNode(3)
tree2.left.left = new TreeNode(4)
tree2.right.right = new TreeNode(5)

//example 3
const tree3 = new TreeNode(0)

//example 4
const tree4 = new TreeNode(1)
tree4.left = new TreeNode(2)

//example 5 not working
const tree5 = new TreeNode(1)
tree5.left = new TreeNode(2)
tree5.left.right = new TreeNode(3)
tree5.left.right.right = new TreeNode(4)
tree5.left.right.right.right = new TreeNode(5)


console.log(minDepth(tree1))
console.log(minDepth(tree2))
console.log(minDepth(tree3))
console.log(minDepth(tree4))
console.log(minDepth(tree5))