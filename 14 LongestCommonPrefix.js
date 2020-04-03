/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z. */

const longestCommonPrefix = strs => {
    //guard condition for exmpty arr
    if (!strs.length) return ''
    let prefix = ''
    /* get smallest word length 
    math.min can only use numbers so we 
    use spread operator to flatten  */
    let smWordLength = Math.min(...strs.map(s => s.length))

    for (let i = 0; i < smWordLength; i++) {
        //iterate through all letters in the first word
        let letter = strs[0][i]
        //check if every word has these letters in order
        if (strs.every(word => word[i] === letter)) prefix += letter
        else break
    }
    return prefix
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])) //fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])) // ''


/* alterante solution using reduce not mine
var longestCommonPrefix = function(strs) {
    'use strict';
    if (strs === undefined || strs.length === 0) { return ''; }

    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
};

*/