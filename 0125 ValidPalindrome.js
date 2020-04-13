
/* Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false */

const isPalindrome = s => {
    let str = s.replace(/\W/g, '').toLowerCase()
    let reversed = str.split('').reduce((rev, char) => char + rev, '')
    return str === reversed
}

console.log(isPalindrome("A man, a plan, a canal: Panama")) //true
console.log(isPalindrome("race a car")) // false