/* Given an integer n, return the number of trailing zeroes in n!.

Example 1:
Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.

Example 2:
Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.
Note: Your solution should be in logarithmic time complexity. 

https://www.youtube.com/watch?v=3Hdmv_Ym8PI
*/

const trailingZeroes = n => {
    let fives = 0

    while (n >= 5) {
        fives += Math.floor(n / 5)
        n = Math.floor(n / 5)
    }
    return fives
}

console.log(trailingZeroes(5))
console.log(trailingZeroes(10))
console.log(trailingZeroes(200))
console.log(trailingZeroes(268))



//incorrect solution left for way of memoizing factorial
/* const trailingZeroes = n => {
    let nArr = []
    let count = 0

    const calcFactorial = (n, memo = []) => {
        if (memo[n] !== undefined) return memo[n]
        if (n === 0) return 1
        if (!(n in memo)) return memo[n] = n * calcFactorial(n - 1, memo)
    }
    nArr = calcFactorial(n).toLocaleString('fullwide', { useGrouping: false }).split('')
    console.log(nArr);

    for (let i = nArr.length - 1; i >= 0; i--) {
        if (nArr[i] === '0') {
            count++
        } else break
    }
    return count
} */