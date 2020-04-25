/* Given two strings s and t which consist of only lowercase letters.

String t is generated by random shuffling string s and then add one more letter at a random position.

Find the letter that was added in t.

Example:

Input:
s = "abcd"
t = "abcde"

Output:
e

Explanation:
'e' is the letter that was added. */

const findTheDifference = (s, t) => {
    const hash = {}

    s.split('').map(char => hash[char] = (hash[char] || 0) + 1)

    for (let letter of t) {
        if (hash[letter] === undefined) return letter
        hash[letter]--
        if (hash[letter] === 0) delete hash[letter]
    }
}

console.log(findTheDifference('abcd', 'abcde'))
console.log(findTheDifference('a', 'aa'))