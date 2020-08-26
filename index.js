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