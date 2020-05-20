/*
Given two binary strings, return their sum (also a binary string).
The input strings are both non-empty and contains only characters 1 or 0.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

Constraints:
Each string consists only of '0' or '1' characters.
1 <= a.length, b.length <= 10^4
Each string is either "0" or doesn't contain any leading zero.
*/

//viewed a sln
const addBinary = (a, b) => {
    let result = ''
    let i = a.length - 1
    let j = b.length - 1
    let num1, num2, sum
    let carry = 0

    while (i >= 0 || j >= 0 || carry) {
        num1 = +a[i] || 0
        num2 = +b[j] || 0
        sum = num1 + num2 + carry

        carry = sum > 1
        result = sum % 2 + result
        i--
        j--
    }
    return result
}

console.log(addBinary('11', '1')) // '100'
console.log(addBinary('1010', '1011')) // '10101

// const addBinary = (a, b) => {
//     let result = ''
//     let i = a.length - 1
//     let j = b.length - 1
//     let sum, num1, num2,
//         carry = 0

//     //loop from end of both numbers
//     while (i >= 0 || j >= 0 || carry) {
//         //assign num1 and num2
//         num1 = +a[i] || 0
//         num2 = +b[j] || 0
//         // sum up nums  and carry 
//         sum = num1 + num2 + carry
//         //assign carry a true /false val (1 or 0)
//         sum > 1
//         //add the modulo to string rtl
//         result = sum % 2 + result
//         //decrement to next digit
//         i--, j--
//     }
//     return result
// }