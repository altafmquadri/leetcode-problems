/* 
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
https://www.youtube.com/watch?reload=9&v=jcjXgmHHpds
*/

const maxSubArray = nums => {
    let max = sum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        //calculate a running total of either the sum + next number or simply the number if it's greater
        sum = Math.max(sum + nums[i], nums[i])
        //compare max to the sum each time collecting the largest val
        max = Math.max(sum, max)
    }
    return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) //6