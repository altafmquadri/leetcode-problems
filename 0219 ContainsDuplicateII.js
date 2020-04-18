/* Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false 

https://www.youtube.com/watch?v=Fmmzy5Jg-Mw&feature=youtu.be
*/

const containsNearbyDuplicate = (nums, k) => {
    let numsHash = {}

    for (let [index, num] of nums.entries()) {
        if (numsHash[num] !== undefined && Math.abs(numsHash[num] - index) <= k) return true
        numsHash[num] = index
    }
    return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)) //true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)) //true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)) //false
console.log(containsNearbyDuplicate([99, 99], 2)) //true