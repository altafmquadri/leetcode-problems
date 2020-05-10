
/* You are given a binary tree in which each node contains an integer value.
Find the number of paths that sum to a given value.
The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).
The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1000,000.

Example:
root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

```
          10
         /  \
        5   -3
       / \    \
      3   2   11
     / \   \
    3  -2   1

```
Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11 

https://www.youtube.com/watch?v=LXcpMokpKes
https://caomingkai.github.io/2019/01/12/437-Path-Sum-III-JS/
*/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

const pathSum = (root, sum) => {
    if (!root) return 0
    const dfs = (current, sum) => {
        let count = 0
        if (!current) return 0
        if (current.val === sum) count++
        return count
            + dfs(current.left, sum - current.val)
            + dfs(current.right, sum - current.val)
    }
    return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
}


const tree = new TreeNode(10)
tree.left = new TreeNode(5)
tree.right = new TreeNode(-3)

tree.left.left = new TreeNode(3)
tree.left.right = new TreeNode(2)
tree.left.right = new TreeNode(2)
tree.right.right = new TreeNode(11)

tree.left.left.left = new TreeNode(3)
tree.left.left.right = new TreeNode(-2)
tree.left.right.right = new TreeNode(1)

console.log(pathSum(tree, 8))


//alternate sln
// var pathSum = function(root, sum) {
//     let res = 0;
//     const helper = (root, sum) => {
//         if(!root) return;
//         sum -= root.val;
//         if(sum === 0){
//             res++;
//         }
//         helper(root.left, sum);
//         helper(root.right, sum);
//     }
//     const main = (root, sum) => {
//         if(!root) return 0;
//         helper(root, sum);
//         main(root.left, sum);
//         main(root.right, sum);
//         return ;
//     }
//     main(root, sum);
//     return res;
// };

// const pathSum = (root, sum) => {
//     if (!root) return 0
//     let totals = [root.val]
//     let queue = [root]
//     let count = 0
//     let current, sums

//     while (queue.length) {
//         current = queue.shift()
//         sums = totals.shift()
//         console.log(sums);
//         if (current.val === sum) count++
//         for (let s of sums) {
//             if (s.val + current.val === sum) {
//                 count++
//                 console.log(s.val);
//             }
//         }
//         if (current.left) queue.push(current.left), totals.push(current.val + current.left.val)
//         if (current.right) queue.push(current.right), totals.push(current + current.right.val)
//     }
//     return count
// }


// let count = 0
// const pathSum = (root, sum) => {
//     if (!root) return 0

//     const dfs = (current, sum, total) => {
//         if (!current) return
//         total += current.val
//         if (sum === total) count++

//         dfs(current.left, sum, total)
//         dfs(current.right, sum, total)
//     }
//     dfs(root, sum, 0)
//     pathSum(root.left, sum)
//     pathSum(root.right, sum)
//     return count
// }