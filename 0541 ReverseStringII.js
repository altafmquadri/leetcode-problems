/* Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.

Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"

Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000] 

didn't come up with my own solution
*/


const reverseStr = (s, k) => {
    if (k > s.length) s.split('').reverse().join('')
    let reverse
    let letters = s.split('')
    for (let i = 0; i < s.length; i += 2 * k) {
        //extract out letters and reverse
        reverse = letters.splice(i, k).reverse()
        //add it back to array in place
        letters.splice(i, 0, ...reverse)
    }
    //return the array by joining
    return letters.join('')
}

console.log(reverseStr("abcdefg", 2)) //"bacdfeg"
console.log(reverseStr("abcdefghij", 2)) //"bacdfeg"