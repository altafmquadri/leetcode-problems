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

https://youtu.be/YXOBpf75R0Y
*/

const merge = (nums1, m, nums2, n) => {
    //declare pointers
    let first = m - 1, second = n - 1, len = m + n - 1

    for (let i = len; i >= 0; i--) {
        //we want to break if second is less than 0
        if (second < 0) break
        //equivalent of saying first-- || second-- after the assignment
        if (nums1[first] > nums2[second]) nums1[i] = nums1[first--]
        else nums1[i] = nums2[second--]
    }
    return nums1
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)) //[1, 2, 2, 3, 5, 6]
console.log(merge([0], 0, [1], 1)) //[1]

/* 
Wrong solution, must be in place
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

const merge = (nums1, m, nums2, n) => {
    let result = [], i = 0, j = 0

    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) result.push(nums1[i]), i++
        else if (nums1[i] > nums2[j]) result.push(nums2[j]), j++
        else if (nums1[i] === nums2[j]) result.push(nums1[i], nums2[j]), i++, j++
        else break
    }

    while (i < m) {
        result.push(nums1[i])
        i++
    }
    while (j < n) {
        result.push(nums2[j])
        j++
    }
    return result
}
*/