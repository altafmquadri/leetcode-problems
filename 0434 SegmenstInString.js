/* Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any non-printable characters.

Example:

Input: "Hello, my name is John"
Output: 5 */


const countSegments = s => {
    return s.split(' ').filter(x => x !== '').length
}

console.log(countSegments("Hello, my name is John"))
console.log(countSegments("        "))
console.log(countSegments(", , , ,        a, eaefa"))

