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
    if (!needle.length) return 0
    //iterate over the haystack to find the needle
    for (let i = 0, j = 0; i < haystack.length; i++) {
        //if letters match
        if (haystack[i] === needle[j]) {
            //and length of j reaches the end return i - j to get i starting index
            if (j === needle.length - 1) return i - j
            j++ //else we increment counter j
        } else {
            //re-index i 
            i = i - j //to start at the character after the match in the beginning
            j = 0 //restart js count to 0 to start the process over
        }
        //if none match
    }
    return -1
}

console.log(strStr('hello', 'll')) //2
console.log(strStr('aaaaa', 'bba')) //-1
console.log(strStr("mississippi", "issip")) //4
console.log(strStr("mississippi", "issipi"))//-1
console.log(strStr("mississippi", "pi"))//9
console.log(strStr("mississippi", "sip")) //6