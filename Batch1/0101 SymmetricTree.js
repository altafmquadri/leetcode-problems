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
https://youtu.be/3iIpnouY-bg
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
/* function serialize(arr) {
    return arr.map(e => e.val).join(",");
}

const isSymmetric = (root) => {
    if (!root) return true;
    let stackP = [];
    let stackQ = [];
    let currentP = root;
    let currentQ = root;

    while ((currentP && currentQ) || (stackP.length && stackQ.length)) {
        while (currentP) {
            stackP.push(currentP);
            console.log(`Pushing ${currentP.val} to sP=[${serialize(stackP)}]`)
            currentP = currentP.left;
        }
        while (currentQ) {
            stackQ.push(currentQ);
            console.log(`Pushing ${currentQ.val} to sQ=[${serialize(stackQ)}]`)
            currentQ = currentQ.right;
        }

        currentP = stackP.pop();
        currentQ = stackQ.pop();

        console.log(`Comparing cP=${currentP.val} cQ=${currentQ.val} sP=[${serialize(stackP)}] sQ=[${serialize(stackQ)}]`);

        if (currentP.val !== currentQ.val || stackP.length !== stackQ.length)
            return false;

        // confused as to why we are setting it to the opposite here
        currentP = currentP.right;
        currentQ = currentQ.left;

        console.log(`Looping   cP=${currentP ? currentP.val : "null"} cQ=${currentQ ? currentQ.val : "null"} sP=[${serialize(stackP)}] sQ=[${serialize(stackQ)}]`);
    }
    return true;
} */


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
const tree4 = new TreeNode('A')
tree4.left = new TreeNode('B')
tree4.right = new TreeNode('B')

tree4.left.left = new TreeNode('C')
tree4.left.right = new TreeNode('D')

tree4.right.left = new TreeNode('D')
tree4.right.right = new TreeNode('C')

console.log(isSymmetric(tree1))//true
console.log(isSymmetric(tree2))//false
console.log(isSymmetric(tree3))//true
console.log(isSymmetric(tree4))//true


// recursive
// const isSymmetric = root => {
//     if (!root) return true
//     const isMirror = (p, q) => {
//         if (!p && !q) return true
//         if (!p || !q) return false
//         if (p.val !== q.val) return false
//         return isMirror(p.left, q.right) && isMirror(q.left, p.right)
//     }
//     return isMirror(root.left, root.right)
// }

//iterative
/* const serialize = (arr) => {
    return arr.map(node => node.val).join(',')
}


const isSymmetric = (root) => {
    //declare the stacks and current values
    const stackP = []
    const stackQ = []
    let currentP = root
    let currentQ = root

    while (currentP && currentQ || stackP.length && stackQ.length) {
        while (currentP) {
            stackP.push(currentP)
            console.log(`Puhsing ${currentP.val} onto StackP=[${serialize(stackP)}]`);
            currentP = currentP.left
        }
        while (currentQ) {
            stackQ.push(currentQ)
            console.log(`Puhsing ${currentQ.val} onto StackQ=[${serialize(stackQ)}]`);
            currentQ = currentQ.right
        }
        //pop off values compare values and lengths
        currentP = stackP.pop()
        currentQ = stackQ.pop()

        console.log(`Compare after popping values:
        currentP = ${currentP.val}, currentQ = ${currentQ.val}
        stackP = [${serialize(stackP)}]
        stackQ = [${serialize(stackQ)}]
        `);

        if (currentP.val !== currentQ.val || stackP.length !== stackQ.length) return false

        //Take left's right child and right's left child and re-run while loop
        currentP = currentP.right
        currentQ = currentQ.left

        console.log(`Looping to obtain all values of children
        currentP = ${currentP ? currentP.val : 'null'}
        currentQ = ${currentQ ? currentQ.val : 'null'}
        stackP = [${serialize(stackP)}]
        stackQ = [${serialize(stackQ)}]`);
    }
    return true
} */


