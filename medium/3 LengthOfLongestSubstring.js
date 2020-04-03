/* Given a string, find the length of the longest substring
without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Note that the answer must be a substring, "pwke" is a
subsequence and not a substring. */

const lengthOfLongestSubstring = str => {
    let seen = {}
    let len = 0
    let left = 0
    let char

    for (let right = 0; right < str.length; right++) {
        char = str[right]
        if (seen[char] !== undefined) {
            left = Math.max(seen[char] + 1, left)
        }
        len = Math.max((right - left) + 1, len)
        seen[char] = right
    }
    return len
}

console.log(lengthOfLongestSubstring('abcabc'))
console.log(lengthOfLongestSubstring('bbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))