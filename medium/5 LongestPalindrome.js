/*
https://medium.com/@bhprtk/longest-palindromic-substring-a8190fab03ff

expand around center solution

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb" */


const longestPalindrome = s => {
    //either when empty string or is a single character
    if (!s || s.length <= 1) return s

    let longest = s.substring(0, 1)

    for (let i = 0; i < s.length; i++) {
        let temp = expand(s, i, i)
        if (temp.length > longest.length) {
            longest = temp
        }
        temp = expand(s, i, i + 1)

        if (temp.length > longest.length) {
            longest = temp
        }
    }
    return longest
}

const expand = (s, begin, end) => {
    while (begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
        begin--
        end++
    }
    return s.substring(begin + 1, end)
}

console.log(longestPalindrome('cbbd')) //bb
console.log(longestPalindrome('babad')) //bab
console.log(longestPalindrome('ac'))// a
console.log(longestPalindrome('abb')) //bb

// var longestPalindrome = function (s) {
//     //either when empty string or is a single character
//     if (!s || s.length <= 1) return s

//     let longest = s.substring(0, 1)

//     for (let i = 0; i < s.length; i++) {
//         let temp = expand(s, i, i, 'first', myCount = i)
//         // console.log(temp, 'i am the first')
//         if (temp.length > longest.length) {
//             longest = temp
//         }
//         temp = expand(s, i, i + 1, 'second', myCount = i)
//         // console.log(temp, 'i am the second')
//         if (temp.length > longest.length) {
//             longest = temp
//         }
//     }
//     return longest
// }

// const expand = (s, begin, end, counter, myCount) => {
//     while (begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
//         console.log(counter, s[begin], s[end], 'before change')
//         begin--
//         end++
//         console.log(counter, s[begin], s[end], 'after change', myCount)
//     }
//     return s.substring(begin + 1, end)
// }
