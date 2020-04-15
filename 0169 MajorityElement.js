/* Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:
Input: [3,2,3]
Output: 3

Example 2:
Input: [2,2,1,1,1,2,2]
Output: 2 */

const majorityElement = nums => {
    const numsHash = {}

    for (let i = 0; i < nums.length; i++) {
        numsHash[nums[i]] = (numsHash[nums[i]] || 0) + 1
        if (numsHash[nums[i]] > (nums.length / 2)) return nums[i]
    }
}

console.log(majorityElement([3, 2, 3])) //3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])) //2