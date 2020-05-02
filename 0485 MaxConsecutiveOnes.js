/* Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
The maximum number of consecutive 1s is 3.

Note:
The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000 */

const findMaxConsecutiveOnes = (nums) => {
    if (nums.length === 1 && nums[0] === 1) return 1
    if (nums.length === 1 && nums[0] === 0) return 0
    if (!(1 in nums)) return 0

    let maxCount = 0
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) count++
        else count = 0
        maxCount = Math.max(maxCount, count)
    }
    return maxCount
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])) //3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])) //2
console.log(findMaxConsecutiveOnes([0, 0])) //0