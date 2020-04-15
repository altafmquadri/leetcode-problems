/* Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

Example 1:
Input: "A"
Output: 1

Example 2:
Input: "AB"
Output: 28

Example 3:
Input: "ZY"
Output: 701 

Could not solve
*/

const titleToNumber = s => {
    let columnNumber = 0
    let char

    for (let i = 0; i < s.length; i++) {
        char = s[s.length - 1 - i]

        columnNumber = columnNumber + Math.pow(26, i) * (char.charCodeAt(0) - 64)
    }
    return columnNumber
}

console.log(titleToNumber('A')) //1
console.log(titleToNumber('AB')) //28
console.log(titleToNumber('ZY')) //701