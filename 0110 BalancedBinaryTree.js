/*
Given a binary tree, determine if it is height-balanced.
For this problem, a height-balanced binary tree is defined as:
a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Example 1:
Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:
Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.
*/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

const isBalanced = root => {
    if (!root) return true

    const traverse = root => {
        if (!root) return 0
        let current
        let counter = 1
        let queue = [root, 's']
        while (queue.length > 1) {
            current = queue.shift()
            if (current === 's') counter++, queue.push('s')
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        return counter
    }
    return Math.abs(traverse(root.left) - traverse(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}

const tree1 = new TreeNode(3)
tree1.left = new TreeNode(9)
tree1.right = new TreeNode(20)

tree1.right.left = new TreeNode(15)
tree1.right.right = new TreeNode(7)

const tree2 = new TreeNode(1)
tree2.left = new TreeNode(2)
tree2.right = new TreeNode(2)

tree2.left.left = new TreeNode(3)
tree2.left.right = new TreeNode(3)

tree2.left.left.left = new TreeNode(4)
tree2.left.left.right = new TreeNode(4)

console.log(isBalanced(tree1))
console.log(isBalanced(tree2))