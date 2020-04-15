/* Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1 */

const isHappy = (n, memo = []) => {
    if (n === 1) return true
    if (memo[n]) return false  //has the number been seen to indicate cycle
    memo[n] = n
    n = n.toString().split('') //convert to an array
        .map(n => +n * +n)  //map it to the square
        .reduce((sum, n) => sum + n, 0) //add the squares
    return isHappy(n, memo)
}

console.log(isHappy(19)) //true
console.log(isHappy(2)) //false