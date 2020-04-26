/* Given an integer, write a function to determine if it is a power of two.

Example 1:
Input: 1
Output: true 
Explanation: 20 = 1

Example 2:
Input: 16
Output: true
Explanation: 24 = 16

Example 3:
Input: 218
Output: false 

https://www.youtube.com/watch?v=etyz_R6A2tE
*/

const isPowerOfTwo = n => {
    if (n < 1) return false
    let power = 0
    let value = 0
    while (value < n) {
        value = Math.pow(2, power)
        power++
    }
    return value === n
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(218))
console.log(isPowerOfTwo(0))
console.log(isPowerOfTwo(-4))