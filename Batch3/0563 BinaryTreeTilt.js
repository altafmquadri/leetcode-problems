/* Given a binary tree, return the tilt of the whole tree.

The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.

The tilt of the whole tree is defined as the sum of all nodes' tilt.

Example:
Input: 
         1
       /   \
      2     3
Output: 1
Explanation: 
Tilt of node 2 : 0
Tilt of node 3 : 0
Tilt of node 1 : |2-3| = 1
Tilt of binary tree : 0 + 0 + 1 = 1
Note:

The sum of node values in any subtree won't exceed the range of 32-bit integer.
All the tilt values won't exceed the range of 32-bit integer. 

did not come up with solution, don't even understand question properly
*/

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

const findTilt = (root) => {
    if (!root || !root.left && !root.right) return 0
    let sum = 0

    const dfs = (current) => {
        if (!current) return 0
        let sumLeft = dfs(current.left)
        let sumRight = dfs(current.right)
        sum += Math.abs(sumLeft - sumRight)
        return sumLeft + sumRight + current.val
    }
    dfs(root)
    return sum
}

const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3)) //1
const tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, new TreeNode(5))) //11

console.log(findTilt(tree))
console.log(findTilt(tree2))

