/* Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <=. */


/* 
create a sorted array
add pointers to start being the length and end being 0
compare arrays to reindex pointers
*/
const findUnsortedSubarray = (nums) => {
    const sortedNums = [...nums].sort((a, b) => a - b)
    let start = nums.length
    let end = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== sortedNums[i]) {
            start = Math.min(i, start)
            end = Math.max(i, end)
        }
    }
    return end - start >= 0 ? end - start + 1 : 0
}


console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])) //5
console.log(findUnsortedSubarray([1, 2, 3, 4])) //0