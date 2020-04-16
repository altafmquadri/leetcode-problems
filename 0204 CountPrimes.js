/* Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

https://www.youtube.com/watch?v=PypkiVlTRa4
*/

const countPrimes = n => {
    let results = [...new Array(2).fill(false), ...new Array(n - 2).fill(true)]

    for (let i = 2; i * i < n; i++) {
        if (results[i] === true) {
            for (let j = 2; j * i < n; j++) {
                results[j * i] = false
            }
        }
    }
    return results.filter(val => val === true).length

}

console.log(countPrimes(10)) //4


// did a for loop for results, as the editor doesn't recongnize spread operator
/* let results = []
    for (let i = 0; i < n; i++) {
        results[i] = true
    }
    results[0] = results[1] = false */