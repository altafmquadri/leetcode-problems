/* 
Given a sorted array and a target value, return the index  the target is => found. If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0
*/

//binary search
const searchInsert = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    let mid
    while (left <= right) {
        mid = Math.floor((left + right) / 2)

        if (target === nums[mid]) return mid
        else if (target < nums[mid]) right = mid - 1
        else {
            left = mid + 1
        }
    }
    return left
}


//linear search
// const searchInsert = (nums, target) => {
//     let right = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (target === nums[i]) return i
//         if (target > nums[i] && right < nums.length) right++
//     }
//     return right
// }


console.log(searchInsert([1, 3, 5, 6], 5)) //2
console.log(searchInsert([1, 3, 5, 6], 2)) //1
console.log(searchInsert([1, 3, 5, 6], 7)) //4
console.log(searchInsert([1, 3, 5, 6], 0)) //0