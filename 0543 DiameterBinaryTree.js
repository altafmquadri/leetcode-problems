/* Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them. 

couldn't come up with sln on my own
*/


class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

const diameterOfBinaryTree = (root) => {
    let count = 0

    const dfs = (c) => {
        if (!c) return 0

        let left = dfs(c.left)
        let right = dfs(c.right)
        count = Math.max(count, left + right)
        return 1 + Math.max(left, right)
    }
    dfs(root)
    return count
}


const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3))
const tree2 = new TreeNode(1)

console.log(diameterOfBinaryTree(tree)) //3
console.log(diameterOfBinaryTree(tree2)) //0