/*
Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
Output: 2
Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since
the decimal part is truncated, 2 is returned.
*/

const mySqrt = x => {
    let left = 0
    let right = x
    let middle

    while (left < right) {
        middle = Math.floor((left + right) / 2)
        if (middle * middle === x) return middle

        if (x < middle * middle) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return left * left > x ? left - 1 : left
}

console.log(mySqrt(4));
console.log(mySqrt(1888));