/* Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:
n = 15,
Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
] 
https://www.youtube.com/watch?v=LyZvPH5E8FU&feature=youtu.be
*/


const fizzBuzz = n => {
    let results = []
    for (let i = 1; i <= n; i++) {
        i % 15 === 0 ? results.push('FizzBuzz')
            : i % 3 === 0 ? results.push('Fizz')
                : i % 5 === 0 ? results.push('Buzz') : results.push(i.toString())
    }
    return results
}

console.log(fizzBuzz(15))