/* Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.
Assume a BST is defined as follows:
The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.

For example:
Given BST [1,null,2,2],

   1
    \
     2
    /
   2


return [2].

Note: If a tree has more than one mode, you can return them in any order.
Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count). 
https://www.youtube.com/watch?v=1FJDyBSfEbo
*/

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

const findMode = root => {
    let mode = [],
        prev,
        count = 0,
        maxCount = -Infinity

    const dfs = current => {
        if (!current) return

        dfs(current.left)
        count = (current.val === prev ? count : 0) + 1
        prev = current.val

        if (count > maxCount) {
            mode = [current.val]
            maxCount = count
        } else if (count === maxCount) {
            mode.push(current.val)
        }
        dfs(current.right)
    }
    dfs(root)
    return mode
}


const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(2)))
const tree2 = new TreeNode(1, null, new TreeNode(2))
const tree3 = new TreeNode(2147483647)
const tree4 = new TreeNode(1, new TreeNode(1))


console.log(findMode(tree))//[2]
console.log(findMode(tree2)) //[1,2]
console.log(findMode(tree3))//[2147483647]
console.log(findMode(tree4)) // [1]

//working
// const findMode = root => {
//     if (!root) return []
//     if (root && !root.left && !root.right) return [root.val]
//     const hash = {}
//     let current = root
//     let result = []
//     let keys

//     const dfs = c => {
//         if (!c) return
//         if (c.left) dfs(c.left)
//         hash[c.val] = (hash[c.val] || 0) + 1
//         if (c.right) dfs(c.right)
//     }
//     dfs(current)

//     keys = Object.keys(hash);
//     keys.sort((a, b) => hash[b] - hash[a]);
//     keys.forEach(key => {
//         if (hash[key] === hash[keys[0]]) result.push(+key);
//     })
//     return result
// }

//extracted
// keys = Object.keys(hash)
    // if (keys.length <= 1) return [+keys]
    // else keys.reduce((a, b) => {
    //     if (hash[a] === hash[b]) result.push(+a, +b)
    //     else if (hash[a] > hash[b]) {
    //         result.push(+a)
    //     } else result.push(+b)
    // })
    // return result

//non-working
// const findMode = root => {
//     if (!root) return []
//     if (root && !root.left && !root.right) return [root.val]
//     const hash = {}
//     let current = root
//     let result = []
//     let keys

//     const dfs = c => {
//         if (!c) return
//         if (c.left) dfs(c.left)
//         hash[c.val] = (hash[c.val] || 0) + 1
//         if (c.right) dfs(c.right)
//     }
//     dfs(current)
//     keys = Object.keys(hash)
//     if (keys.length <= 1) return [+keys]
//     else keys.reduce((a, b) => {
//         if (hash[a] === hash[b]) result.push(+a, +b)
//         else if (hash[a] > hash[b]) {
//             result.push(+a)
//         } else result.push(+b)
//     })
//     return result
// }
