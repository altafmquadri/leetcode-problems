/* Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6] 

https://youtu.be/CTBEcmzLAuA
*/

const findDisappearedNumbers = nums => {
    const result = []
    const hash = {}
    let max = 0

    for (let n of nums) {
        hash[n] = 1
        max = Math.max(max, n, nums.length)
    }


    while (max > 0) {
        if (hash[max] === undefined) {
            result.push(max)
        }
        max--
    }
    return result
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])) //[5,6]
console.log(findDisappearedNumbers([1, 1])) //[2]