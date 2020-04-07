/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
*/

class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const isSameTree = (p, q) => {
    if (p === null && q === null) return true
    if (p === null || q === null) return false
    if (p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

//example 1
const tree1 = new TreeNode(1)
tree1.left = new TreeNode(2)
tree1.right = new TreeNode(3)

const tree2 = new TreeNode(1)
tree2.left = new TreeNode(2)
tree2.right = new TreeNode(3)

//example 2
const tree3 = new TreeNode(1)
tree3.left = new TreeNode(2)

const tree4 = new TreeNode(1)
tree4.right = new TreeNode(3)

//example 3
const tree5 = new TreeNode(1)
tree5.left = new TreeNode(2)
tree5.right = new TreeNode(1)

const tree6 = new TreeNode(1)
tree6.left = new TreeNode(1)
tree6.right = new TreeNode(2)

//example 4
const tree7 = new TreeNode(1)
tree7.left = new TreeNode(2)
tree7.right = new TreeNode(1)

const tree8 = new TreeNode(1)
tree8.left = new TreeNode(1)
tree8.right = new TreeNode(2)

console.log(isSameTree(tree1, tree2))
console.log(isSameTree(tree3, tree4))
console.log(isSameTree(tree5, tree6))
console.log(isSameTree(tree7, tree8))