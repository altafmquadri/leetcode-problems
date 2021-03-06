/* 
You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
Note: Given n will be a positive integer.

Example 1:
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

const climbStairs = (n, memo = {}) => {
    if (n in memo) return memo[n]
    if (n <= 2) return n
    return memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)
}

console.log(climbStairs(2)) //2
console.log(climbStairs(3)) //3
console.log(climbStairs(5)) //8
console.log(climbStairs(37)) //39088169


// const climbStairs = (n, memo = {}) => {
//     if (memo[n] !== undefined) return memo[n]
//     if (n <= 2) return n
//     if (!(n in memo)) return memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)
// }