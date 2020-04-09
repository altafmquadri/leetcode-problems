/* 
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]

solution inspired by explanation here
https://www.youtube.com/watch?v=H2K0CGAjQDc
*/

class TreeNode {
    constructor(val) {
        this.val = val
        this.left = this.right = null
    }
}

const levelOrderBottom = root => {
    let visited = []
    if (!root) return visited
    let queue = [root, 's']
    let current
    let row = []

    while (queue.length > 1) {
        current = queue.shift()
        if (current === 's') {
            visited.unshift(row)
            row = []
            queue.push('s')
        } else {
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
            row.push(current.val)
        }
    }
    // will stop at 's' so we have to perform the final row push
    visited.unshift(row)
    return visited
}

//example 1
const tree1 = new TreeNode(3)
tree1.left = new TreeNode(9)
tree1.right = new TreeNode(20)
tree1.right.left = new TreeNode(15)
tree1.right.right = new TreeNode(7)

console.log(levelOrderBottom(tree1)) //[ [15,7], [9,20], [3] ]