/* Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true */

const canConstruct = (ransomNote, magazine) => {
    const available = {}
    magazine.split('').map(char => available[char] = (available[char] || 0) + 1)

    for (let letter of ransomNote) {
        if (available[letter] === undefined || available[letter] === 0) return false
        available[letter]--
    }
    return true
}

console.log(canConstruct("a", "b"))//false
console.log(canConstruct("aa", "ab"))//false
console.log(canConstruct("aa", "aab")) //true