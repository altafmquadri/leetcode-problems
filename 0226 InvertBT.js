
/* Invert a binary tree.
Example:
Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:

Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off */


class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

const invertTree = root => {
    let queue = [root]
    let current
    let temp
    while (queue.length) {
        current = queue.shift()
        temp = current.left
        current.left = current.right
        current.right = temp
        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    }
    return root
}

// recursive
// const invertTree = root => {
//   if (root === null) return null

//   let left = invertTree(root.left)
//   let right = invertTree(root.right)

//   root.left = right
//   root.right = left
//   return root
// }

const t1 = new TreeNode(4)
t1.left = new TreeNode(2)
t1.left.left = new TreeNode(1)
t1.left.right = new TreeNode(3)
t1.right = new TreeNode(7)
t1.right.right = new TreeNode(9)
t1.right.left = new TreeNode(6)

console.log(invertTree(t1));