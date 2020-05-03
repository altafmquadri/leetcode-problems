/* Given an integer, return its base 7 string representation.
Example 1:
Input: 100
Output: "202"

Example 2:
Input: -7
Output: "-10"
Note: The input will be in range of [-1e7, 1e7]. */

const convertToBase7 = num => {
    if (num === 0) return "0"
    let isNegative = num < 0
    num = isNegative ? num * -1 : num
    let r
    let results = []

    while (num > 0) {
        r = num % 7
        results.push(r)
        num = Math.floor(num / 7)
    }
    isNegative ? results.push('-') : false
    return results.reverse().join('')
}


console.log(convertToBase7(100)) // "202"
console.log(convertToBase7(-7)) // "-10"