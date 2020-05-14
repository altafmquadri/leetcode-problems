/* Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

Example 1:
Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75

Note:
1 <= k <= n <= 30,000.
Elements of the given array will be in the range [-10,000, 10,000]. */

const findMaxAverage = (nums, k) => {
    let max = 0
    let temp = 0

    //find sum of first k nums and set max to that sum
    for (let i=0; i<k; i++) {
        max += nums[i]
    }
    //set max equal to temp variable to do next batch of comparisons
    temp = max
    // sum next batch subtracting one as a sliding window
    for (let i =k; i < nums.length; i++) {
        temp = temp - nums[i-k] + nums[i]
        max = Math.max(max, temp)
    }
    //divide max by k to get the avg
    return max/k
}

console.log(findMaxAverage([1,12,-5,-6,50,3],  4)) //(12-5-6+50)/4 = 51/4 = 12.75