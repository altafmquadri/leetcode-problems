/* We define a harmounious array as an array where the difference between its maximum value and its minimum value is exactly 1.
Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

Example 1:
Input: [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].

Note: The length of the input array will not exceed 20,000. */


const findLHS = (nums) => {
    //set up a map, and the count variable
    const hash = new Map()
    let count = 0
    for (let num of nums) {
        hash.set(num, (hash.get(num) || 0) + 1) //set the values of the hashmap
    }
    // iterate over hashmap to check if key + 1 exists, and add the count of that key and key + 1 values to get the count
    for (let key of hash.keys()) {
        if (hash.has(key + 1)) {
            count = Math.max(count, hash.get(key) + hash.get(key + 1))
        }
    }
    return count
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))//5
console.log(findLHS([1, 2, 3, 4])) //2
console.log(findLHS([1, 2, 2, 1])) //4


// const findLHS = (nums) => {
//     const hash = {}
//     let count = 0
//     for (let num of nums) {
//         hash[num] = (hash[num] || 0) + 1
//     }
//     for (let key in hash) {
//         key = +key
//         if (hash[key + 1]) {
//             count = Math.max(count, hash[key] + hash[key + 1])
//         }
//     }
//     return count
// }
