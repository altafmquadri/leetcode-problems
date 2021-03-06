/* Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case? 

https://www.youtube.com/watch?v=FMkueJAQ2pE&feature=youtu.be
*/

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false
    const sHash = {}
    for (let char of s) {
        sHash[char] = (sHash[char] || 0) + 1
    }

    for (let char of t) {
        sHash[char]--
    }
    return Object.values(sHash).every(val => val === 0)
}

console.log(isAnagram('anagram', 'nagaram')) //true
console.log(isAnagram('rat', 'car')) //false