/* Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string? */

const isPalindrome = x => {
    let str = x.toString().split('')
    let reversed = +str.reduce((rev, char) => char + rev, '')
    return x === reversed
}

console.log(isPalindrome(121)) //true
console.log(isPalindrome(-121)) //false
console.log(isPalindrome(10)) //false