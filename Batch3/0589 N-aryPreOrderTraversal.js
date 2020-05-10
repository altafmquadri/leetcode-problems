/* Given an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

Follow up:
Recursive solution is trivial, could you do it iteratively?

Example 1:
Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]

Example 2:
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10] */


class Node {
    constructor(val, children) {
        this.val = val;
        this.children = children ? children : []
    }
}

const preorder = (root) => {
    if (!root) return []
    const stack = [root]
    const visited = []
    let current

    while (stack.length) {
        current = stack.pop()
        if (current.children.length) {
            for (let i = current.children.length - 1; i >= 0; i--) {
                stack.push(current.children[i])
            }
        }
        visited.push(current.val)
    }
    return visited
}

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

console.log(preorder(tree))
console.log(preorder(tree2))


//recursive
// const preorder = (root) => {
//     const visited = []
//     if (!root) return visited

//     const dfs = current => {
//         if (!current) return
//         visited.push(current.val)

//         if (current.children.length) {
//             current.children.forEach(child => dfs(child))
//         }
//         return visited
//     }
//     return dfs(root)
// }

//iterative
// const preorder = (root) => {
//     if (!root) return []
//     const queue = [root]
//     const visited = []
//     let current

//     while (queue.length) {
//         current = queue.shift()
//         if (current.children.length) {
//             for (let i = current.children.length - 1; i >= 0; i--) {
//                 queue.unshift(current.children[i])
//             }
//         }
//         visited.push(current.val)
//     }
//     return visited
// }
//iterative stack