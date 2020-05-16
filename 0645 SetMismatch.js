/* The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]
Note:
The given array size will in the range [2, 10000].
The given array's numbers won't have any order. */

const findErrorNums = (nums) => {
    const hash = {}
    let duplicate, missing
    for (let num of nums) {
        hash[num] = (hash[num] || 0) + 1
        if (hash[num] > 1) duplicate = num
    }
    //convert nums to a set and iterate from 1 to length to discover what's missing
    const numsSet = new Set(nums)
    for (let i = 1; i <= nums.length; i++) {
        if (!numsSet.has(i)) missing = i
    }
    return [duplicate, missing]
}

console.log(findErrorNums([1, 2, 2, 4])) //[2,3]
console.log(findErrorNums([2, 2])) //[2,1]
console.log(findErrorNums([1, 1])) //[1,2]