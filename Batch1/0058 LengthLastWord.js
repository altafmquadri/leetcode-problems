/* 
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space characters only.

Example:

Input: "Hello World"
Output: 5
*/

const lengthOfLastWord = s => {
    s = s.trim().split(' ')
    const lastWord = s.pop()

    return lastWord ? lastWord.length : 0
}

// const lengthOfLastWord = s => {
//     let str = s.trim()
//     if (!str.length) return 0
//     return str.split(' ').filter(w => w !== '').slice(-1)[0].length
// }

console.log(lengthOfLastWord("Hello World")) //5
console.log(lengthOfLastWord("a ")) //1
console.log(lengthOfLastWord("    day ")) //3