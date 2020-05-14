/* Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true 

https://youtu.be/hUOkKDqVlig

*/

const isValid = s => {
    //guard conditions
    if (!s.length) return true
    if (s.length % 2 !== 0) return false
    //form hash of valid items
    const validItems = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const stack = []

    for (let val of s) {
        //if it's a key push onto stack
        if (validItems[val]) stack.push(val)
        else {
            let item = stack.pop()
            //compare popped item as the key in the hash to see if val returned by hash is same as the val in the string
            if (validItems[item] !== val) return false
        }
    }
    //if the stack is not empty return false else return true
    return !stack.length
}

console.log(isValid("()")) //true
console.log(isValid("()[]{}")) //true
console.log(isValid("(]"))//false
console.log(isValid("([)]"))//false
console.log(isValid("{[]}"))//true
console.log(isValid(""))//true
console.log(isValid("["))// false
console.log(isValid("(("))//false
console.log(isValid("(()("))//false
console.log(isValid(("{{)}")))//false

// const isValid = s => {
//     if (!s.length) return true
//     if (s.length % 2 !== 0) return false
//     s = s.split('')
//     let stack = []
//     let valid = false

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '(' || s[i] === '[' || s[i] === '{') stack.push(s[i])

//         if (s[i] === ')' && stack.slice(-1)[0] === '(') stack.pop(), valid = true
//         if (s[i] === ']' && stack.slice(-1)[0] === '[') stack.pop(), valid = true
//         if (s[i] === '}' && stack.slice(-1)[0] === '{') stack.pop(), valid = true
//     }
//     if (stack.length) return false
//     return valid
// }