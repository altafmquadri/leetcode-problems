/* 
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
*/

const strStr = (haystack, needle) => {
    if (needle === '') return 0

    for (let i = 0, j = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[j]) {
            if (j === needle.length - 1) return i - j
            j++
        } else {
            i = i - j
            j = 0
        }
    }
    return -1
}

console.log(strStr('hello', 'll'))
console.log(strStr('aaaaa', 'bba'))
console.log(strStr("mississippi", "issip"))
console.log(strStr("mississippi", "issipi"))
console.log(strStr("mississippi", "pi"))
console.log(strStr("mississippi", "sip"))