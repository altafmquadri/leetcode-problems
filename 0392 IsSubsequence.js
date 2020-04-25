/* Given a string s and a string t, check if s is subsequence of t.

You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
s = "abc", t = "ahbgdc"

Return true.

Example 2:
s = "axc", t = "ahbgdc"

Return false.

Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code? 

https://www.youtube.com/watch?v=RqrGVXvyxZ0
*/

const isSubsequence = (s, t) => {
    if (s.length === 0) return true
    if (t.length === 0) return false
    let p1 = 0
    let p2 = 0

    while (p1 < s.length) {
        if (s[p1] === t[p2]) p1++, p2++
        else p2++

        if (p1 === s.length) return true
        if (p2 === t.length) return false
    }
}

console.log(isSubsequence("abc", "ahbgdc")) //true
console.log(isSubsequence("axc", "ahbgdc")) //false
console.log(isSubsequence("", "ahbgdc")) //true
console.log(isSubsequence("abc", "")) //false