/* Given an integer array nums, find the sum of the elements between 
indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function. 

https://www.youtube.com/watch?v=CjPMfq3ULZg
*/

class NumArray {
    constructor(nums) {
        this.nums = nums
        this.sums = [0]
        for (let i = 0; i < nums.length; i++) {
            this.sums[i + 1] = nums[i] + this.sums[i]
        }
    }
    sumRange(i, j) {
        return this.sums[j + 1] - this.sums[i]
    }
}


const nums = new NumArray([-2, 0, 3, -5, 2, -1])
console.log(nums.sumRange(0, 2))//1
console.log(nums.sumRange(2, 5))//-1
console.log(nums.sumRange(0, 5))//-3


//less efficient
/* class NumArray {
    constructor(nums) {
        this.nums = nums
    }
    sumRange(i, j) {
        let sum = 0
        for (i; i <= j; i++) {
            sum += this.nums[i]
        }
        return sum
    }
} */