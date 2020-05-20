/* 
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/


const plusOne = digits => {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            return digits
        }
        digits[i] = 0
    }
    return [1, ...digits]
}

console.log(plusOne([1, 2, 3])) //124
console.log(plusOne([4, 3, 2, 1])) //4322
console.log(plusOne([4, 3, 2, 9])) //4330
console.log(plusOne([4, 9, 9, 9])) //5000
console.log(plusOne([9, 9])) //100


// const plusOne = digits => {
//     for (let i = digits.length - 1; i >= 0; i--) {
//         //go to last number and if it's less than 9 add one and return 
//         if (digits[i] < 9) {
//             digits[i]++
//             return digits
//         }
//         // if greater than 9 make that number zero, go back in the loop
//         digits[i] = 0
//     }
//     //if all nines, then have 1 at the beginning of the array
//     return [1, ...digits]
// }