/* Given an n-ary tree, return the postorder traversal of its nodes' values.
Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

Follow up:
Recursive solution is trivial, could you do it iteratively?

Example 1:
Input: root = [1,null,3,2,4,null,5,6]
Output: [5,6,3,2,4,1]

Example 2:
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1] */

class Node {
    constructor(val, children) {
        this.val = val;
        this.children = children ? children : []
    }
}

const postorder = (root) => {
    if (!root) return []
    const visited = []
    const queue = [root]
    let current
    while (queue.length) {
        current = queue.shift()
        if (current.children.length) {
            current.children.forEach(child => queue.unshift(child))
        }
        visited.push(current.val)
    }
    return visited.reverse()
}

//recursive
// const postorder = (root) => {
//     if (!root) return []
//     const visited = []

//     const dfs = (current) => {
//         if (!current) return

//         if (current.children.length) {
//             current.children.forEach(child => dfs(child))
//         }
//         visited.push(current.val)
//         return visited
//     }
//     return dfs(root)
// }

const tree = new Node(1,
    [new Node(3,
        [new Node(5), new Node(6)]),
    new Node(2),
    new Node(4)])


const tree2 = new Node(1,
    [new Node(2),
    new Node(3,
        [new Node(6),
        new Node(7,
            [new Node(11,
                [new Node(14)])])]),
    new Node(4,
        [new Node(8,
            [new Node(12)])]),
    new Node(5,
        [new Node(9,
            [new Node(13)]),
        new Node(10)])])

console.log(postorder(tree))
console.log(postorder(tree2))