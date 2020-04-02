/* 
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
 */


// https://www.youtube.com/watch?v=7UQ71uwQFx4
const convert = (s, numRows) => {
    if (numRows > s.length || numRows < 1) return s
    zigZagChars = []
    let count = 0
    let interval = 2 * numRows - 2

    for (let i = 0; i < numRows; i++) {
        let step = interval - 2 * i
        for (let j = i; j < s.length; j += interval) {
            zigZagChars[count] = s[j]
            count++
            if (step > 0 && step < interval && j + step < s.length) {
                zigZagChars[count] = s[j + step]
                count++
            }
        }

    }
    return zigZagChars.join('')
}


console.log(convert('PAYPALISHIRING', 4))

// const convert = (s, numRows) => {
//     let startRow = 0
//     let endRow = numRows - 1
//     let startColumn = 0
//     s = s.split('')
//     let results = []
//     // to setup the columns

//     for (let i = 0; i < numRows; i++) {
//         results.push([])
//     }

//     let goingDown = true
//     while (s.length) {

//         if (goingDown) {
//             if (!s.length) break
//             //first time throgh gets me payp
//             //second time get me shi
//             for (let i = startRow; i <= endRow; i++) {
//                 results[i][startColumn] = s.shift()
//             }

//             //first time through gets me ali
//             //second time gets me 
//             for (let i = endRow - 1; i >= startRow; i--) {
//                 results[i][startColumn + 1] = s.shift()
//                 startColumn++
//             }
//             startRow++
//             if (startRow > 1) {
//                 goingDown = false
//             }
//         } else {
//             startRow = 0
//             for (let i = startRow; i <= endRow; i++) {
//                 console.log('i am in else')
//                 results[i][startColumn + 1] = s.shift()
//             }
//             for (let i = endRow - 1; i >= startRow; i--) {
//                 results[i][startColumn + 1] = s.shift()
//                 startColumn++
//             }
//             if (!s.length) break
//             goingDown = true
//         }
//         // break
//     }
//     console.log(results)
//     return results
// }
