/* Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:
Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13
Note: This question is the same as 1038: https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/ */


class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


const convertBST = (root) => {
    let sum = 0
    //do a reverse in order traversal
    const dfs = c => {
        if (!c) return
        if (c.right) dfs(c.right)
        //add sum to the val
        sum += c.val
        //replace the val with sum
        c.val = sum
        if (c.left) dfs(c.left)
    }
    dfs(root)
    return root
}

const tree = new TreeNode(5, new TreeNode(2), new TreeNode(13))
console.log(convertBST(tree)) //[18, 20, 13]
