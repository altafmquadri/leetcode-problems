/* Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.  */


const reverse = x => {
    let num = 1
    x = [...x.toString()]
    if (x[0] === '-') x.shift(), num = -1

    let reversed = +x.reduce((rev, char) => char + rev, '') * num
    return reversed >= Math.pow(2, 31) || reversed <= -Math.pow(2, 31) ? 0 : reversed
}

console.log(reverse(120)) //21
console.log(reverse(123)) //321
console.log(reverse(-123)) //-321