/* Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]
Example 1:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Example 2:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Note:
All of the nodes' values will be unique.
p and q are different and both values will exist in the BST. */


class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

//recursive
const lowestCommonAncestor = (root, p, q) => {
    let parent = root
    if (p.val > parent.val && q.val > parent.val) return lowestCommonAncestor(parent.right, p, q)
    else if (p.val < parent.val && q.val < parent.val) return lowestCommonAncestor(parent.left, p, q)
    else return root
}

//iterative
// const lowestCommonAncestor = (root, p, q) => {
//   if (!root) return null
//   let parent = root
//   while (parent) {
//     if (p.val > parent.val && q.val > parent.val) parent = parent.right
//     else if (p.val < parent.val && q.val < parent.val) parent = parent.left
//     else return parent
//   }
// }

const tree1 = new TreeNode(6)
tree1.left = new TreeNode(2)
tree1.left.left = new TreeNode(0)
tree1.left.right = new TreeNode(4)
tree1.left.right.left = new TreeNode(3)
tree1.left.right.right = new TreeNode(5)
tree1.right = new TreeNode(8)
tree1.right.left = new TreeNode(7)
tree1.right.right = new TreeNode(9)

console.log(lowestCommonAncestor(tree1, new TreeNode(2), new TreeNode(8)))
console.log(lowestCommonAncestor(tree1, new TreeNode(2), new TreeNode(4)))
