/* Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true
Note: You may assume both s and t have the same length. */

const isIsomorphic = (s, t) => {
    let sHash = {}
    let tHash = {}
    let resultS = []
    let resultT = []

    //take each character and place them in key value pairs for s and t
    for (let i = 0; i < s.length; i++) {
        if (sHash[s[i]] === undefined) sHash[s[i]] = t[i] //s : t
        if (tHash[t[i]] === undefined) tHash[t[i]] = s[i] //t : s
        resultS.push(sHash[s[i]])
        resultT.push(tHash[t[i]])
    }
    return resultS.join('') === t && resultT.join('') === s
}

//refactored to above
/* const isIsomorphic = (s, t) => {
    let sHash = {}
    let tHash = {}
    let resultS = []
    let resultT = []

    //take each character and place them in key value pairs for s and t
    for (let i = 0; i < s.length; i++) {
        if (sHash[s[i]] === undefined) sHash[s[i]] = t[i]
        if (tHash[t[i]] === undefined) tHash[t[i]] = s[i]
    }
    s.split('').map(char => resultS.push(sHash[char]))
    t.split('').map(char => resultT.push(tHash[char]))
    return resultS.join('') === t && resultT.join('') === s
}
 */
console.log(isIsomorphic('egg', 'add')) //true
console.log(isIsomorphic('foo', 'bar')) //false
console.log(isIsomorphic('paper', 'title')) //true
console.log(isIsomorphic('ab', 'aa')) //fasle