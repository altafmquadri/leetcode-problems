/* Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
] */

const generate = numRows => {
    const triangle = []
    if (numRows === 0) return triangle

    triangle.push([1])
    let prevRow, newRow

    for (let i = 1; i < numRows; i++) {
        prevRow = triangle[i - 1]
        newRow = [1]
        for (let j = 1; j < prevRow.length; j++) {
            newRow[j] = prevRow[j - 1] + prevRow[j]
        }
        newRow.push(1)
        triangle.push(newRow)
    }
    return triangle
}

console.log(generate(5))