/* Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

Example:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]

Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet. */

const findWords = words => {
    return words.filter(word => checkWord(word.toLowerCase()))
}

const checkWord = (word) => {
    const firstRow = new Set('qwertyuiop')
    const secondRow = new Set('asdfghjkl')
    const thirdRow = new Set('zxcvbnm')
    let firstCount = 0
    let secondCount = 0
    let thirdCount = 0
    let len = word.length

    for (let char of word) {
        if (firstRow.has(char)) firstCount++
        if (secondRow.has(char)) secondCount++
        if (thirdRow.has(char)) thirdCount++
    }
    return firstCount === len || secondCount === len || thirdCount === len
}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])) //["Alaska", "Dad"]

