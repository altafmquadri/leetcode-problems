/* Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:

Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime? */

const addDigits = num => {
    let val = num.toString().split('')
    if (val.length === 1) return num
    let sum = 0

    for (let n of val) {
        sum += +(n)
    }
    return addDigits(sum)
}

console.log(addDigits(38)) //2
console.log(addDigits(0)) //0
console.log(addDigits(101)) //2