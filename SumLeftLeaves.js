/* Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24. */


class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

//recursive
const sumOfLeftLeaves = root => {
    if (!root) return 0
    let sum = 0

    const dfs = (node) => {
        if (!node) return
        if (node.left &&
            !node.left.left &&
            !node.left.right) sum += node.left.val
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return sum
}

// const sumOfLeftLeaves = root => {
//     if (!root) return 0
//     let sum = 0
//     let queue = [root]
//     let current

//     while (queue.length) {
//         current = queue.shift()
//         if (current.left) queue.push(current.left)
//         if (current.left &&
//             !current.left.left &&
//             !current.left.right) sum += current.left.val
//         if (current.right) queue.push(current.right)
//     }
//     return sum
// }


//optimized sln above iterative
// const sumOfLeftLeaves = root => {
//     if (!root) return 0
//     let results = []
//     let queue = [root]
//     let current

//     while (queue.length) {
//         current = queue.shift()
//         if (current.left) queue.push(current.left)
//         if (current.left && !current.left.left && !current.left.right) results.push(current.left.val)
//         if (current.right) queue.push(current.right)
//     }
//     return results.reduce((sum, n) => sum + n, 0)
// }

const tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)

const tree2 = new TreeNode(1)
tree2.left = new TreeNode(2)
tree2.right = new TreeNode(3)
tree2.left.left = new TreeNode(4)
tree2.left.right = new TreeNode(5)

console.log(sumOfLeftLeaves(tree))
console.log(sumOfLeftLeaves(tree2))

