/* Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: "III"
Output: 3
Example 2:

Input: "IV"
Output: 4
Example 3:

Input: "IX"
Output: 9
Example 4:

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4. */

const romanToInt = s => {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    let result = []

    for (let [i, val] of s.split('').entries()) {
        //if value is not the first then check to see if following conditions hold, if so pop that number off and add the new number, and subtotal values

        if ((val === 'V' || val === 'X') && i !== 0 && s[i - 1] === 'I')
            result.pop(),
                result.push(romanNumerals[val] - romanNumerals[s[i - 1]])

        else if ((val === 'L' || val === 'C') && i !== 0 && s[i - 1] === 'X')
            result.pop(),
                result.push(romanNumerals[val] - romanNumerals[s[i - 1]])

        else if ((val === 'D' || val === 'M') && i !== 0 && s[i - 1] === 'C')
            result.pop(),
                result.push(romanNumerals[val] - romanNumerals[s[i - 1]])

        else result.push(romanNumerals[val])
    }
    return result.reduce((sum, n) => sum + n, 0)
}

console.log(romanToInt("III")) //3
console.log(romanToInt("IV")) //4
console.log(romanToInt("IX")) //9
console.log(romanToInt("XL")) //40
console.log(romanToInt("LVIII")) //58
console.log(romanToInt("MCMXCIV")) //1994