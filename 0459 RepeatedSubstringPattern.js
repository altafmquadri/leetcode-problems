/* Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

Example 1:
Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.

Example 2:
Input: "aba"
Output: False

Example 3:
Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.) 

https://www.youtube.com/watch?v=bClIZj66dVE
*/

const repeatedSubstringPattern = s => {
    let size = s.length
    let i = 1

    while (i <= Math.floor(size / 2)) {
        if (s.slice(0, i).repeat(size / i) === s) return true
        i++
    }
    return false
}


console.log(repeatedSubstringPattern("abab")) //true
console.log(repeatedSubstringPattern("aba")) //false
console.log(repeatedSubstringPattern("abcabcabcabc")) //true
console.log(repeatedSubstringPattern("ababab")) //true