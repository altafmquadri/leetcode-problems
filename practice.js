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
https://youtu.be/seaGHJFWNPs
https://youtu.be/D2cFSDfg0So
https://youtu.be/_O-mK2g_jhI most helpful
*/

class TreeNode {
    constructor(val) {
        this.val = val
        this.left = this.right = null
    }
}

//iterative
// const maxDepth = root => {
//     if (!root) return 0
//     const queue = [root, 's']
//     let count = 1, current

//     while (queue.length > 1) {
//         current = queue.shift()
//         if (current === 's') {
//             queue.push('s')
//             count++
//         }

//         if (current.left) queue.push(current.left)
//         if (current.right) queue.push(current.right)
//     }
//     return count
// }


//recursive
const maxDepth = root => {
    //this is our base case we reach the null child we're at 0
    if (root === null) return 0
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    let depth
    //compare left and right return depth to the next call
    if (left > right) depth = 1 + left
    else depth = 1 + right
    return depth
}


const tree1 = new TreeNode(3)
tree1.left = new TreeNode(9)
tree1.right = new TreeNode(20)

tree1.right.left = new TreeNode(15)
tree1.right.right = new TreeNode(7)

console.log(maxDepth(tree1));


//nice recursive solution I found
/* const maxDepth = (root, depth = 0) => {
    if (!root) return depth;
    return Math.max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1));
} */

// const maxDepth = root => {
    //     //this is our base case we reach the null child we're at 0
    //     if (root === null) return 0
    //     let left = maxDepth(root.left)
    //     let right = maxDepth(root.right)
    //     return Math.max(left + 1, right + 1)
    // }