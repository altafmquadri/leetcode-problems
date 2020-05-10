/* Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

Example 1:
Input: [5, 4, 3, 2, 1]
Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
For the left two athletes, you just need to output their relative ranks according to their scores.
Note:
N is a positive integer and won't exceed 10,000.
All the scores of athletes are guaranteed to be unique. */



//more elegant way of doing the below, found this solution
const findRelativeRanks = nums => {
    let places = nums.slice(0).sort((a, b) => b - a)

    return nums.map((num) => {
        if (num === places[0]) return 'Gold Medal'
        else if (num === places[1]) return 'Silver Medal'
        else if (num === places[2]) return 'Bronze Medal'
        else return (places.indexOf(num) + 1).toString()
    })
}

console.log(findRelativeRanks([5, 4, 3, 2, 1]))
console.log(findRelativeRanks([1, 2, 3, 4, 5]))
console.log(findRelativeRanks([10, 3, 8, 9, 4]))

//shorter
// const findRelativeRanks = nums => {
//     const hash = {}
//     let places = [...nums]
//     let max, secondMax, thirdMax
//     results = []

//     places.sort((a, b) => b - a)
//     max = places[0]
//     secondMax = places[1]
//     thirdMax = places[2]

//     for (let [i, num] of nums.entries()) {
//         hash[num] = i
//         if (num === max) hash[num] = 'Gold Medal'
//         else if (num === secondMax) hash[num] = 'Silver Medal'
//         else if (num === thirdMax) hash[num] = 'Bronze Medal'
//         else hash[num] = places.indexOf(num)
//     }

//     for (let num of nums) {
//         if (num !== max && num !== secondMax && num != thirdMax) results.push((hash[num] + 1).toString())
//         else results.push(hash[num])
//     }
//     return results
// }

//longer
// const findRelativeRanks = nums => {
//     const hash = {}
//     let places = [...nums]
//     let max = nums[0],
//         secondMax = -Infinity,
//         thirdMax = -Infinity
//     results = []

//     for (let [i, num] of nums.entries()) {
//         hash[num] = i
//         if (num > max) {
//             thirdMax = secondMax
//             secondMax = max
//             max = num
//         }
//         if (num > secondMax && num < max) {
//             thirdMax = secondMax
//             secondMax = num
//         }
//         if (num > thirdMax && num < secondMax) thirdMax = num
//     }

//     places.sort((a, b) => b - a)

//     for (let num of nums) {
//         if (num === max) hash[num] = 'Gold Medal'
//         else if (num === secondMax) hash[num] = 'Silver Medal'
//         else if (num === thirdMax) hash[num] = 'Bronze Medal'
//         else hash[num] = places.indexOf(num)
//     }

//     for (let num of nums) {
//         if (num !== max && num !== secondMax && num != thirdMax) results.push((hash[num] + 1).toString())
//         else results.push(hash[num])
//     }
//     return results
// }