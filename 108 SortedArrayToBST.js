/* 
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5 

resource:
Studied AVL trees:

https://www.youtube.com/watch?v=-ODwekYuDkM
https://www.freecodecamp.org/news/avl-tree-insertion-rotation-and-balance-factor/
https://www.youtube.com/watch?v=jDM6_TnYIqE
https://medium.com/confessions-of-a-bootcamp-grad/how-to-solve-leetcodes-convert-sorted-array-to-binary-search-tree-problem-with-javascript-a61e6d6d6c36

 */

class TreeNode {
    constructor(val) {
        this.val = val
        this.left = this.right = null
    }
}

const sortedArrayToBST = nums => {
    if (!nums.length) return null
    let mid = Math.floor(nums.length / 2)
    let root = new TreeNode(nums[mid])
    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid + 1))
    return root
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9])) //[0,-3,9,-10,null,5]