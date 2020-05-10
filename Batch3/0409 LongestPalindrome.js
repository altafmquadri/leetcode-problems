/* Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.
This is case sensitive, for example "Aa" is not considered a palindrome here.
Note:
Assume the length of given string will not exceed 1,010.

Example:
Input:
"abccccdd"
Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7. */

const longestPalindrome = s => {
    let length = 0
    const hash = {}

    for (let char of s) {
        hash[char] = (hash[char] || 0) + 1
        if (hash[char] % 2 === 0) length += 2
    }
    return s.length > length ? length + 1 : length
}

console.log(longestPalindrome("abccccdd")) //7 => "dccaccd" one possibility
console.log(longestPalindrome("as"))