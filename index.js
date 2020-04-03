

const longestCommonPrefix = strs => {
    if (!strs.length) return ''
    let prefix = ''
    let smWordLength = Math.min(...strs.map(s => s.length))

    for (let i = 0; i < smWordLength; i++) {
        let letter = strs[0][i]
        if (strs.every(word => word[i] === letter)) prefix += letter
        else break
    }
    return prefix
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
console.log(longestCommonPrefix([]))