/* Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
Note:
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000]. */

const arrayPairSum = (nums) => {
    nums.sort((a, b) => a - b)
    let sum = 0

    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i]
    }
    return sum
}
// const arrayPairSum = (nums) => {
//     nums.sort((a, b) => a - b)
//     let count = 0
//     let min
//     const results = []
//     for (let [i, num] of nums.entries()) {
//         count++
//         if (count === 2) {
//             min = Math.min(num, nums[i - 1])
//             results.push(min)
//             count = 0
//         }
//     }
//     return results.reduce((sum, n) => sum + n, 0)
// }

console.log(arrayPairSum([1, 4, 3, 2])) //4 