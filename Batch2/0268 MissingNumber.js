/* Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity? 

https://www.youtube.com/watch?v=4LrVhAxJUsA&feature=youtu.be
*/

const missingNumber = nums => {
    let expectedSum = nums.length //this is missing from the total
    let actualSum = 0

    for (let i = 0; i < nums.length; i++) {
        expectedSum += i //add the indicies up to the length to get the total
        actualSum += nums[i] //add what's given in the array
    }
    return expectedSum - actualSum
}


console.log(missingNumber([3, 0, 1])) //2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])) //8
console.log(missingNumber([0])) //1