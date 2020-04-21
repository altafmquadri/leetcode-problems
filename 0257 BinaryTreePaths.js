/* Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:
Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]
Explanation: All root-to-leaf paths are: 1->2->5, 1->3 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

const binaryTreePaths = root => {
    let results = []
    if (!root) return results
    const dfs = (node, path) => {
        if (!node.left && !node.right) return results.push(path + node.val)
        if (node.left) dfs(node.left, path + node.val + '->')
        if (node.right) dfs(node.right, path + node.val + '->')
    }
    dfs(root, '')
    return results
}

const tree1 = new TreeNode(1)
tree1.left = new TreeNode(2)
tree1.right = new TreeNode(3)
tree1.left.right = new TreeNode(5)

console.log(binaryTreePaths(tree1));