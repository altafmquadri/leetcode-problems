/* 
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/


const merge = (nums1, m, nums2, n) => {
    let results = []
    let i = 0
    let j = 0
    let newNums1 = nums1.slice(i, m)
    let newNums2 = nums2.slice(j, n)

    while (i + j < m + n) {
        if (newNums1[i] < newNums2[j]) results.push(newNums1[i]), i++
        if (newNums1[i] > newNums2[j]) results.push(newNums2[j]), j++
        if (newNums1[i] === newNums2[j]) results.push(newNums1[i], newNums2[j]), i++, j++
        if (i === m) results.push(newNums2[j]), j++
        if (j === n) results.push(newNums1[i]), i++
    }
    results = results.filter(r => r !== undefined)

    for (let i = 0; i < m + n; i++) {
        nums1[i] = results[i]
    }
    return nums1
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));