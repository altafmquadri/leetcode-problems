/* Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters. */

const firstUniqChar = s => {
    const hash = {}
    let str = s.split('')
    str.map(char => hash[char] = (hash[char] || 0) + 1)

    for (let [i, letter] of str.entries()) {
        if (hash[letter] === 1) return i
    }
    return -1
}

console.log(firstUniqChar('leetcode')) //0
console.log(firstUniqChar('loveleetcode')) //2
console.log(firstUniqChar('')) // -1
console.log(firstUniqChar('cc')) //-1
console.log(firstUniqChar('dacca')) //0