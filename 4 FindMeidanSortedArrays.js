/* There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity 
should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5 */

const findMedianSortedArrays = (nums1, nums2) => {

    //first step define a function that merges two arrays
    const merge = (n, m) => {
        let i = 0, j = 0
        let mergedArray = []
        while (i + j < n.length + m.length) {
            if (n[i] < m[j]) mergedArray.push(n[i]), i++
            if (n[i] > m[j]) mergedArray.push(m[j]), j++
            if (n[i] === m[j]) mergedArray.push(n[i], m[j]), i++, j++
            if (i === n.length) mergedArray.push(m[j]), j++
            if (j === m.length) mergedArray.push(n[i]), i++
        }
        //in case if n, m is empty return the filter to not include undefined in the array
        return mergedArray.filter(m => m !== undefined)
    }
    let combinedArray = merge(nums1, nums2)
    let median
    let index1, index2
    //calculate the median based on odd or even numbered array
    //if odd just take the length of the array divide by 2 and floor it
    if (combinedArray.length % 2 !== 0) {
        index1 = Math.floor(combinedArray.length / 2)
        median = combinedArray[index1]
    }
    //if even take the length - 1 and divide by two to get lower bound use floor
    else {
        index1 = Math.floor((combinedArray.length - 1) / 2)
        index2 = Math.ceil((combinedArray.length - 1) / 2)
        console.log(index1, index2)
        //  to get upper bound take ceil add both values and divide by two to get the median
        median = (combinedArray[index1] + combinedArray[index2]) / 2
    }
    return median
}

// console.log(merge([1, 2], [3, 4]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))
console.log(findMedianSortedArrays([1, 3], [2]))