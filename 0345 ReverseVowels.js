/* Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Input: "hello"
Output: "holle"

Example 2:
Input: "leetcode"
Output: "leotcede"

Note:
The vowels does not include the letter "y". 

https://www.youtube.com/watch?v=m2IvvOB_BIo
*/
const reverseVowels = s => {
    let str = s.split('')
    const vowels = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
        A: true,
        E: true,
        I: true,
        O: true,
        U: true,
    }

    let left = 0
    let right = str.length - 1
    let temp

    while (left <= right) {
        if (vowels[str[left]] && vowels[str[right]]) {
            temp = str[left]
            str[left] = str[right]
            str[right] = temp
            left++
            right--
        }
        if (!vowels[str[left]]) left++
        if (!vowels[str[right]]) right--
    }
    return str.join('')
}
console.log(reverseVowels('hello'))
console.log(reverseVowels('leetcode'))