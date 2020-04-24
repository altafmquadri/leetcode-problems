/* Given two arrays, write a function to compute their intersection.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.

Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once? */


const intersect = (nums1, nums2) => {
    const hash = {}
    const result = []

    nums1.map(num => hash[num] = (hash[num] || 0) + 1)

    for (let num of nums2) {
        if (hash[num]) {
            hash[num]--
            result.push(num)
        }
    }

    return result
}


console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
console.log(intersect([1, 2], [1, 1])) //[1]