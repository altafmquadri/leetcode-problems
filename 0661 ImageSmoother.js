/* Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

Example 1:

Input:
[[1,1,1],
 [1,0,1],
 [1,1,1]]

Output:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]


Explanation:
For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
For the point (1,1): floor(8/9) = floor(0.88888889) = 0

Note:
The value in the given matrix is in the range of [0, 255].
The length and width of the given matrix are in the range of [1, 150]. 
https://stackoverflow.com/questions/61946565/not-understanding-2d-matrix-algorithm-question-in-javascript

WILL SKIP UNLESS I CAN GET AN ANSWER ON SO
*/

const imageSmoother = (M) => {
    let result = Array(M.length), val

    for (let i = 0; i < result.length; i++) {
        result[i] = Array(M[0].length)
    }

    for (let rows = 0; rows < M.length; rows++) {
        for (let cols = 0; cols < M[0].length; cols++) {
            val = M[rows][cols]
            let neighborsCount = 0

            //check right
            if (M[rows][cols + 1] !== undefined) {
                val += M[rows][cols + 1]
                neighborsCount++
            }
            //check left
            if (M[rows][cols - 1] !== undefined) {
                val += M[rows][cols - 1]
                neighborsCount++
            }
            //check bottom
            if (Array.isArray(M[rows + 1]) && M[rows + 1][cols] !== undefined) {
                val += M[rows + 1][cols]
                neighborsCount++
            }
            //check above
            if (M[rows - 1] && M[rows - 1][cols] !== undefined) {
                val += M[rows - 1][cols]
                neighborsCount++
            }
            //check diagonal top left
            if (M[rows - 1] && M[rows - 1][cols - 1] !== undefined) {
                val += M[rows - 1][cols - 1]
                neighborsCount++
            }
            //check diagonal bottom right
            if (M[rows + 1] && M[rows + 1][cols + 1] !== undefined) {
                val += M[rows + 1][cols + 1]
                neighborsCount++
            }
            //check diagonal bottom left
            if (M[rows + 1] && M[rows + 1][cols - 1] !== undefined) {
                val += M[rows + 1][cols - 1]
                neighborsCount++
            }
            //check diagonal top right
            if (M[rows - 1] && M[rows - 1][cols + 1] !== undefined) {
                val += M[rows - 1][cols + 1]
                neighborsCount++
            }
            result[rows][cols] = Math.floor(val / (neighborsCount + 1))
        }
    }
    return result
}



console.log(imageSmoother([[1, 1, 1],
[1, 0, 1],
[1, 1, 1]])) // [[0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]]



//sln I liked
// var imageSmoother = function (M) {
//     const result = Array(M.length);

//     for (let i = 0; i < result.length; i++) {
//         result[i] = Array(M[0].length);
//     }

//     const checks = [
//         [0, 0],
//         [0, 1],
//         [0, -1],
//         [1, 0],
//         [1, 1],
//         [1, -1],
//         [-1, 0],
//         [-1, 1],
//         [-1, -1],
//     ]

//     for (let i = 0; i < M.length; i++) {
//         for (let j = 0; j < M[0].length; j++) {
//             let sum = 0;
//             let count = 0;

//             for (let k = 0; k < checks.length; k++) {
//                 const [r, c] = checks[k];
//                 const row = r + i;
//                 const col = c + j;

//                 if (row >= 0 &&
//                     row < M.length &&
//                     col >= 0 &&
//                     col < M[0].length) {
//                     count++;
//                     sum += M[row][col];
//                 }
//             }
//             result[i][j] = Math.floor(sum / count);
//         }
//     }
//     return result;
// };