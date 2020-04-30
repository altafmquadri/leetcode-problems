/* Given an array of characters, compress it in-place.
The length after compression must always be smaller than or equal to the original array.
Every element of the array should be a character (not int) of length 1.
After you are done modifying the input array in-place, return the new length of the array.

Follow up:
Could you solve it using only O(1) extra space?

Example 1:
Input:
["a","a","b","b","c","c","c"]
Output:
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation:
"aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".

Example 2:
Input:
["a"]
Output:
Return 1, and the first 1 characters of the input array should be: ["a"]
Explanation:
Nothing is replaced.

Example 3:
Input:
["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output:
Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation:
Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
Notice each digit has it's own entry in the array. */


const compress = (chars) => {
    let index = 0
    let count = 1
    let arr

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === chars[i + 1]) count++
        else {
            if (count > 1) {
                arr = count.toString().split('')
                chars.splice(index + 1, count - 1, ...arr)
                index = (i + 1) - (count - 1 - arr.length)
                i -= (count - 1 - arr.length)
                count = 1
            } else index++
        }
    }
    return chars.length
}

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]))
console.log(compress(['a']))
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]))
console.log(compress(["a", "a", "a", "b", "b", "a", "a"]))


// const compress = (chars) => {
//     const hash = {}
//     chars.map(c => hash[c] = (hash[c] || 0) + 1)

//     for (let [i, char] of chars.entries()) {
//         if (char in hash) {
//             if (hash[char] !== 1) {
//                 chars[i + 1] = hash[char]
//                 delete hash[char]
//             }
//         }
//         else if (hash[chars] === undefined && typeof (chars[i]) !== 'number') {
//             delete chars[i]
//         }
//     }
//     for (let [i, n] of chars.entries()) {
//         if (n > 1) {
//             chars[i] = n.toString().split('')
//         }
//     }
//     return chars.flat().filter(x => x !== '')
// }