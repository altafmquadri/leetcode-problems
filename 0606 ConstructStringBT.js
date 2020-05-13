/* You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.

The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.

Example 1:
Input: Binary tree: [1,2,3,4]
       1
     /   \
    2     3
   /
  4

Output: "1(2(4))(3)"

Explanation: Originallay it needs to be "1(2(4)())(3()())",
but you need to omit all the unnecessary empty parenthesis pairs.
And it will be "1(2(4))(3)".

Example 2:
Input: Binary tree: [1,2,3,null,4]
       1
     /   \
    2     3
     \
      4

Output: "1(2()(4))(3)"

Explanation: Almost the same as the first example,
except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output. */

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

const tree2str = t => {
    if (!t) return ""
    //once we reach the leaf node convert to a string
    if (!t.left && !t.right) return t.val + ""
    //if there is no right just return current value + dfs(left)
    if (!t.right) return t.val + "(" + tree2str(t.left) + ")"
    //return val by parenthesizing left and right
    return t.val + "(" + tree2str(t.left) + ")(" + tree2str(t.right) + ")"
}

const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3))
const tree2 = new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(3))
const tree3 = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)))

console.log(tree2str(tree)) // "1(2(4)())(3()())" ==> "1(2(4))(3)"
console.log(tree2str(tree2)) // "1(2()(4))(3)"
console.log(tree2str(tree3)) // "1(2(3)(4))" instead got "1(2(3))(4)"





//other working solutions

// const tree2str = (tree) => {

//   const dfs = (current) => {
//       if (current === null) return ''

//       let result = current.val.toString(); // in fact you don't need toString() here, but has a better readability

//       const left = current.left
//       const right = current.right

//       if (left || right) {
//           result += '(' + dfs(left) + ')'
//       } 
//       if (right) {
//           result += '(' + dfs(right) + ')'
//       }
//       return result
//   }
//   return dfs(tree)
// }

// const tree2str = t => {
//   const result = []
//   const dfs = current => {
//     if (!current) {
//       return
//     }

//     const { val, left, right } = current
//     if (val !== null && val !== undefined) {
//       result.push(val)
//       if (left) {
//         result.push("(")
//         dfs(left)
//         result.push(")")
//       } else if (!left && right) {
//         result.push("()")
//       }

//       if (right) {
//         result.push("(")
//         dfs(right)
//         result.push(")")
//       }
//     }
//   }
//   dfs(t)
//   return result.join("")
// }




//----------------------------------------------------------------------------
//non working solutions
// const tree2str = (t) => {
//     const result = []
//     const stack = []

//     const dfs = (current) => {
//         if (current === null) return
//         result.push(current.val)
//         if (!current.left && current.right) result.push('(')
//         if (current.left) {
//             result.push('(')
//             stack.push(')')
//             dfs(current.left)
//         }
//         while (stack.length) {
//             result.push(stack.pop())
//         }
//         if (!current.left && current.right) stack.push(')')
//         if (current.right) {
//             result.push('(')
//             stack.push(')')
//             dfs(current.right)
//         }
//     }
//     dfs(t)
//     return result.join('')
// }


// const tree2str = t => {
//     if (t == null) return "";
//     const stack = [t]
//     const visited = {}
//     let current
//     let s = []

//     while (stack.length) {
//         current = stack.pop();
//         if (visited[current.val]) {
//             stack.pop();
//             s.push(")");
//         } else {
//             visited[current.val] = true;
//             s.push("(" + current.val)
//             if (current.left == null && current.right != null)
//                 s.push( "()");
//             if (current.right != null)
//                 stack.push(current.right);
//             if (current.left != null)
//                 stack.push(current.left);
//         }
//     }
//     return s
// }