/* 
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr is shown below:

1 2 3
4 5 6
9 8 9  

The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15-7| = 2.

Function description

Complete the diagonalDifference function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference
Input Format

The first line contains a single integer,n , the number of rows and columns in the square matrix arr.
Each of the next n, lines describes a row,arr[i], and consists of n space-separated integers arr[i][j].

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output

15
Explanation

The primary diagonal is:

11
   5
     -12
Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

     4
   5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19
Difference: |4 - 19| = 15

Note: |x| is the absolute value of x
*/

const diagonalDifference = (arr) => {
    let ltr = 0
    let rtl = 0
    for (let i = 0; i < arr[0].length; i++) {
        ltr += arr[i][i]
    }
    for (let k = 0, m = arr[0].length - 1; k < arr[0].length && m >= 0; k++, m--) {
        rtl += arr[k][m]
    }
    return Math.abs(ltr - rtl)
}

const arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]]
const arr1 = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
console.log(diagonalDifference(arr)) //2
console.log(diagonalDifference(arr1)) //15