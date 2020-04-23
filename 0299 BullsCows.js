/* You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. 

Please note that both secret number and friend's guess may contain duplicate digits.

Example 1:
Input: secret = "1807", guess = "7810"
Output: "1A3B"
Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.

Example 2:
Input: secret = "1123", guess = "0111"
Output: "1A1B"
Explanation: The 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow.

Note: You may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal. */

const getHint = (secret, guess) => {
    s = secret.split('')
    g = guess.split('')
    const secretHash = {}
    const guessHash = {}
    let bulls = 0
    let cows = 0

    //setup the hashes
    for (let i = 0; i < secret.length; i++) {
        secretHash[i] = s[i]
        guessHash[i] = g[i]
    }

    //setup the bulls and delete the keys
    for (let key in secretHash) {
        if (secretHash[key] === guessHash[key]) {
            bulls++
            delete secretHash[key]
            delete guessHash[key]
        }
    }

    //convert remaining values into arrays
    let values = Object.values(secretHash)
    let guessVal = Object.values(guessHash)
    let findIndex

    //replace seen values with -1 to loop and count the cows
    for (let i = 0; i < guessVal.length; i++) {
        if (values.includes(guessVal[i])) {
            findIndex = values.findIndex(val => val === guessVal[i])
            values[findIndex] = -1
            guessVal[i] = -1
            cows++
        }
    }
    return `${bulls}A${cows}B`
}

console.log(getHint('1807', '7810')) //'1A3B'
console.log(getHint('1123', '0111')) //'1A1B'
console.log(getHint('1122', '2211')) //'0A4B'