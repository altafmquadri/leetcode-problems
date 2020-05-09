/* Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

Example 1:
Input: root = [1,null,3,2,4,null,5,6]
Output: 3

Example 2:
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: 5

Constraints:
The depth of the n-ary tree is less than or equal to 1000.
The total number of nodes is between [0, 10^4]. 
https://medium.com/@khushboo.taneja_61450/implementing-binary-search-tree-and-n-ary-tree-in-javascript-ba3e2081d345
read as a guide, not correct for this implementation
*/
class Node {
    constructor(val, children) {
        this.val = val;
        this.children = children ? children : []
    }
}

//recursive dfs
// const maxDepth = root => {
//     if (!root) return 0
//     let depth = 1

//     const dfs = (node, level) => {
//         if (node) {
//             if (level > depth) depth = level
//             if (node.children.length) {
//                 node.children.forEach(v => dfs(v, level + 1))
//             }
//         }
//     }
//     dfs(root, 1)
//     return depth
// }

//iterative BFS
const maxDepth = root => {
    if (!root) return 0
    let depth = 1

    const queue = [{ current: root, level: 1 }]
    while (queue.length) {
        const { current, level } = queue.shift()
        if (level > depth) depth = level
        if (current.children.length) {
            current.children.forEach(c => {
                queue.push({ current: c, level: level + 1 })
            })
        }
    }
    return depth
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

console.log(maxDepth(tree)) //3
console.log(maxDepth(tree2)) //5