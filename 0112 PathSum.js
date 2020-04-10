/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
Note: A leaf is a node with no children.

Example:
Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
https://www.youtube.com/watch?v=UYiOUI19iHE&feature=youtu.be
*/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

const hasPathSum = (root, sum) => {
    if (!root) return false
    if (sum === root.val && !root.left && !root.right) return true
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}

//example 1
const tree1 = new TreeNode(5)
tree1.left = new TreeNode(4)
tree1.right = new TreeNode(8)
tree1.left.left = new TreeNode(11)
tree1.left.left.left = new TreeNode(7)
tree1.left.left.right = new TreeNode(2)
tree1.right.left = new TreeNode(13)
tree1.right.right = new TreeNode(4)
tree1.right.right.right = new TreeNode(1)

//example 2
const tree2 = new TreeNode()

console.log(hasPathSum(tree1, 22)) //true
console.log(hasPathSum(tree2, 0)) //false