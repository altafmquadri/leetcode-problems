/* Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:

Each element in the result must be unique.
The result can be in any order. 

https://www.youtube.com/watch?v=Wo7dbhMEw0o&feature=youtu.be
*/

const intersection = (nums1, nums2) => {
    const set1 = new Set()
    const result = new Set()

    nums1.map(num => set1.add(num))
    nums2.map(num => {
        if (set1.has(num)) {
            result.add(num)
        }
    })
    return Array.from(result)
}

console.log(intersection([1, 2, 2, 1], [2, 2]))
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))