/* 
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 

Note:
Bonus points if you could solve it both recursively and iteratively.
*/


class TreeNode {
    constructor(val) {
        this.val = val
        this.left = this.right = null
    }
}

// recursive
const isSymmetric = root => {
    const isMirror = (p, q) => {
        if (p === null && q === null) return true
        if (p === null || q === null) return false
        return (p.val === q.val) &&
            isMirror(p.left, q.right) &&
            isMirror(p.right, q.left)
    }
    return isMirror(root, root)
}

//iterative
// const isSymmetric = root => {
//     if (!root) return true
//     let stackP = []
//     let stackQ = []
//     let currentP = root
//     let currentQ = root

//     while ((currentP && currentQ) || (stackP.length && stackQ.length)) {
//         while (currentP) {
//             stackP.push(currentP)
//             currentP = currentP.left
//         }

//         while (currentQ) {
//             stackQ.push(currentQ)
//             currentQ = currentQ.right
//         }

//         currentP = stackP.pop()
//         currentQ = stackQ.pop()

//         if ((currentP.val !== currentQ.val) || (stackP.length !== stackQ.length)) return false

//         currentP = currentP.right
//         currentQ = currentQ.left
//     }
//     return true
// }


//example 1
const tree1 = new TreeNode(1)
tree1.left = new TreeNode(2)
tree1.right = new TreeNode(2)

tree1.left.left = new TreeNode(3)
tree1.left.right = new TreeNode(4)

tree1.right.left = new TreeNode(4)
tree1.right.right = new TreeNode(3)

//example 2
const tree2 = new TreeNode(1)
tree2.left = new TreeNode(2)
tree2.right = new TreeNode(2)

tree2.left.right = new TreeNode(3)

tree2.right.right = new TreeNode(3)

//example 4
const tree3 = new TreeNode(1)
tree3.left = new TreeNode(2)
tree3.right = new TreeNode(2)

//example 5
//example 1
const tree4 = new TreeNode('A')
tree4.left = new TreeNode('B')
tree4.right = new TreeNode('B')

tree4.left.left = new TreeNode('C')
tree4.left.right = new TreeNode('D')

tree4.right.left = new TreeNode('D')
tree4.right.right = new TreeNode('C')

console.log(isSymmetric(tree1));
console.log(isSymmetric(tree2));
console.log(isSymmetric(tree3));
console.log(isSymmetric(tree4));


