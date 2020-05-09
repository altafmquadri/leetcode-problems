/* Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:
     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.

Example 2:
Given tree s:
     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false. 
https://www.youtube.com/watch?v=kL5Gs1YTwMM
https://www.youtube.com/watch?v=73PQ9raLEVs
*/

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

const isSubtree = (s, t) => {
    if (!s) return false
    if (!t) return true
    if (s.val === t.val) {
        if (isSameTree(s, t)) return true
    }
    return isSubtree(s.left, t) || isSubtree(s.right, t)
}

const isSameTree = (c, t) => {
    if (!c && !t) return true
    if (!c || !t) return false
    if (c.val !== t.val) return false
    return isSameTree(c.left, t.left) && isSameTree(c.right, t.right)
}

const tree1 = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(5))
const tree2 = new TreeNode(4, new TreeNode(1), new TreeNode(2))

const tree3 = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))), new TreeNode(5))
const tree4 = new TreeNode(4, new TreeNode(1), new TreeNode(2))

const tree5 = new TreeNode(1, new TreeNode(1))
const tree6 = new TreeNode(1)

console.log(isSubtree(tree1, tree2)) //true
console.log(isSubtree(tree3, tree4)) //false
console.log(isSubtree(tree5, tree6)) //true