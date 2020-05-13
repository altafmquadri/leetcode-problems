/* Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer. */


class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

const averageOfLevels = (root) => {
    const output = []
    let level = []
    let current, sum
    const queue = [root, 's']

    while (queue.length > 1 || level.length) {
        sum = 0
        current = queue.shift()
        if (current !== 's') level.push(current.val)

        if (current === 's') {
            queue.push('s')
            for (l of level) {
                sum += l
            }
            output.push(sum / level.length)
            level = []
        }
        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    }
    return output
}

const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))

console.log(averageOfLevels(tree))