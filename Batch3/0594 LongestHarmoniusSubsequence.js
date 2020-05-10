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


//different question where trying to find actual array
// const findLHS = (nums) => {
//     const hash = new Map()
//     let vals = []
//     let min = nums[0], max = nums[0]
//     for (let num of nums) {
//         //logic for finding min and max in range is flawed
//         min = min + max === 1 && min < max ? min : Math.min(min, num)
//         max = max - min === 1 && max > min ? max : Math.max(max, num)
//         hash.set(num, (hash.get(num) || 0) + 1)
//         console.log(max);
//     }

//     //logic is flawed below
//     for (let key of nums) {
//         // if (hash.has(key + 1) && hash.has(key + 1) <= max) {
//         //     vals.push(hash.get(key + 1))
//         // }
//         if (hash.has(key) === min || hash.has(key) === max) {
//             vals.push(min) || vals.push(max)
//         }
//     }
//     return vals
// }