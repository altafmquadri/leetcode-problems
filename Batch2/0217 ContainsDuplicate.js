/* Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true */

const containsDuplicate = nums => {
    const numsHash = {}

    for (let [index, num] of nums.entries()) {
        if (numsHash[num] !== undefined) return true
        numsHash[num] = (numsHash[num] || 0) + 1
    }
    return false
}

// nice alternate sln using set 
/**
 * The goal is to convert `nums` into a set with unique numbers.
 * The size of the set is the same as `nums` when all array elements
 * are unique.
 */

// var containsDuplicate = function(nums) {
//     const set = new Set(nums);
//     return set.size !== nums.length;
// }

console.log(containsDuplicate([1, 2, 3, 1])) //true
console.log(containsDuplicate([1, 2, 3, 4])) // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])) // true