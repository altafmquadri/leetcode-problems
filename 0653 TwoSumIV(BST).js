/* Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:
Input: 
    5
   / \
  3   6
 / \   \
2   4   7
Target = 9
Output: True

Example 2:
Input: 
    5
   / \
  3   6
 / \   \
2   4   7
Target = 28
Output: False */

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

const findTarget = (root, k) => {
    const hash = {}
    const values = []
    let val1 = null
    let val2 = null

    //traverse preorder to create hash and values
    const dfs = (c) => {
        if (!c) return
        values.push(c.val)
        hash[c.val] = c.val
        if (c.left) dfs(c.left)
        if (c.right) dfs(c.right)
    }

    dfs(root)
    for (let v of values) {
        //originally set to null, if both values are assigned to not null, because a value assigned of 0 is falsy, then we know we have the two values that sum to k
        if (val1 !== null && val2 !== null) return true
        if (hash[k - v] !== undefined) {
            if (val1 === null) val1 = v
            else val2 = v
        }
    }
    //at the end if we didn't return true then we want expression to evaluate which will lead to return value of false
    return (val1 !== null && val2 !== null)
}

const tree = new TreeNode(5,
    new TreeNode(3,
        new TreeNode(2), new TreeNode(4)),
    new TreeNode(6, null, new TreeNode(7)))
const tree2 = new TreeNode(5,
    new TreeNode(3,
        new TreeNode(2), new TreeNode(4)),
    new TreeNode(6, null, new TreeNode(7)))
const tree3 = new TreeNode(2,
    new TreeNode(0,
        new TreeNode(-4), new TreeNode(1)),
    new TreeNode(3))
const tree4 = new TreeNode(0,
    new TreeNode(-2, null, new TreeNode(-1)),
    new TreeNode(3, null, new TreeNode(4)))
const tree5 = new TreeNode(1)
const tree6 = new TreeNode(0,
    new TreeNode(-3, new TreeNode(-4)),
    new TreeNode(2, new TreeNode(1)))

console.log(findTarget(tree, 9)) //true
console.log(findTarget(tree2, 28)) //false
console.log(findTarget(tree3, -1)) //true
console.log(findTarget(tree4, -2)) //true
console.log(findTarget(tree5, 2)) //false
console.log(findTarget(tree6, 1)) //true


// const findTarget = (root, k) => {
//     const hash = {}
//     const values = []
//     let val1 = null
//     let val2 = null

//     const dfs = (c) => {
//         if (!c) return
//         values.push(c.val)
//         hash[c.val] = c.val
//         if (c.left) dfs(c.left)
//         if (c.right) dfs(c.right)
//     }
//     dfs(root)
//     for (let v of values) {
//         if (val1 !== null && val2 !== null) return true
//         if (hash[k - v] !== undefined && val1 === null) val1 = v
//         else if (hash[k - v] !== undefined && val1 !== null) val2 = v
//     }
//     return (val1 !== null && val2 !== null)
// }


// const findTarget = (root, k) => {
//     const hash = new Map();

//     const dfs = (c) => {
//         if (!c) return;
//         hash.set(c.val, (hash.get(c.val) || 0) + 1);
//         if (c.left) dfs(c.left);
//         if (c.right) dfs(c.right);
//     }
//     dfs(root);

//     for (let v in [...hash.keys()]) {
//         // Check to see if entry k-v exists.  Also, if v is the same as k-v then
//         // ensure that there is more than one v.
//         if (hash.get(k - v) && (v == k - v ? 1 < hash.get(v) : true)) {
//             return true;
//         }
//     };

//     return false;
// }


//doesn't work for all
// const findTarget = (root, k) => {
//     const hash = {};

//     const dfs = (c) => {
//         if (!c) return;
//         hash[c.val] = c.val;
//         if (c.left) dfs(c.left);
//         if (c.right) dfs(c.right);
//     }
//     dfs(root)

//     for (let v in hash) {
//         if (hash.hasOwnProperty(k - v)) {
//             return true;
//         }
//     };

//     return false;
// }

/* 2 solutions i liked

BFS:
var findTarget = function(root, k) {
    const set = new Set();
    const queue = [root];
    while(queue.length) {
        const curr = queue.shift();
        if(set.has(k - curr.val)) return true;
        set.add(curr.val);
        if(curr.left) queue.push(curr.left);
        if(curr.right) queue.push(curr.right);
    }
    return false;
};


DFS:
var findTarget = function(root, k) {
    const set = new Set();
    const dfs = (node) => {
        if(!node) return;
        if(set.has(k - node.val)) return true;
        set.add(node.val);
        return dfs(node.left) || dfs(node.right);
    }
    return dfs(root) || false;
};

*/