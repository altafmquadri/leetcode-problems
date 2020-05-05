/* Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:
Input:

   1
    \
     3
    /
   2

Output:1
Explanation: The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).

Note:
There are at least two nodes in this BST.
This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/ */


class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

const getMinimumDifference = (root) => {
    if (!root) return
    const vals = []
    let min = Infinity
    //in order traversal
    const dfs = (c) => {
        if (!c) return
        if (c.left) dfs(c.left)
        vals.push(c.val)
        if (c.right) dfs(c.right)
    }
    dfs(root)
    for (let i = 0; i + 1 < vals.length; i++) {
        min = Math.min(Math.abs(vals[i] - vals[i + 1]), min)
    }
    return min
}

const tree = new TreeNode(1, null, new TreeNode(3, new TreeNode(2)))
const tree2 = new TreeNode(5, new TreeNode(4), new TreeNode(7))

console.log(getMinimumDifference(tree))
console.log(getMinimumDifference(tree2))


//sln i liked
// var getMinimumDifference = function(root) {
//     var prev = Infinity;
//     var totalMin = Infinity;
//     function traverse(node) {
//         if (!node) {
//             return;
//         }
//         traverse(node.left);
//         totalMin = Math.min(totalMin, Math.abs(node.val - prev));
//         prev = node.val;
//         traverse(node.right);
//     }
//     traverse(root);
//     return totalMin;
// }