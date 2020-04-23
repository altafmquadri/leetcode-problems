/* Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:
Input: pattern = "abba", str = "dog cat cat dog"
Output: true

Example 2:
Input:pattern = "abba", str = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false

Example 4:
Input: pattern = "abba", str = "dog dog dog dog"
Output: false

Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space. */


const wordPattern = (pattern, str) => {
    let p = pattern.split('')
    let s = str.split(' ')
    let pHash = {}
    let sHash = {}
    let resultsP = []
    let resultsS = []

    for (let i = 0; i < p.length; i++) {
        if (pHash[p[i]] === undefined) pHash[p[i]] = s[i]
        if (sHash[s[i]] === undefined) sHash[s[i]] = p[i]
        resultsS.push(sHash[s[i]])
        resultsP.push(pHash[p[i]])
    }
    return resultsS.join('') === pattern && resultsP.join(' ') === str
}

console.log(wordPattern("abba", "dog cat cat dog")) //true
console.log(wordPattern("abba", "dog cat cat fish")) //false
console.log(wordPattern("aaaa", "dog cat cat dog")) //false
console.log(wordPattern("abba", "dog dog dog dog")) //false


// for (let word of s) {
//     resultsS.push(sHash[word])
// }
// for (let char of p) {
//     resultsP.push(pHash[char])
// }
// console.log(pHash, 'i am pHash')
// console.log(sHash, 'i am sHash')
// console.log(resultsP)
// console.log(str);