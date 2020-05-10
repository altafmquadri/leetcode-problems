/* You are given a string representing an attendance record for a student. The record only contains the following three characters:
'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.

Example 1:
Input: "PPALLP"
Output: True
Example 2:
Input: "PPALLL"
Output: False */

const checkRecord = (s) => {
    const hash = {}
    let count = 0
    let str = s.split('')
    str.map(s => hash[s] = (hash[s] || 0) + 1)

    if (hash['A'] > 1) return false
    if (hash['L'] > 2) {
        for (let i = 0; i < s.length; i++) {
            if (str[i] === 'L') {
                count++
                if (count > 2) return false
            }
            else count = 0
        }
    }
    return true
}

console.log(checkRecord("PPALLP")) //true
console.log(checkRecord("PPALLL")) //false
console.log(checkRecord("LLLALL")) //false
console.log(checkRecord("PLLPLLLLPP")) //false
console.log(checkRecord("LPPPPLPPLPPPPPPLPPPALPPPPPLPPL")) //true
console.log(checkRecord("LLPPPLL")) //true
console.log(checkRecord("PPLPLPPPPLLPPLPLLLPLPPPPPPPPPP")) //false