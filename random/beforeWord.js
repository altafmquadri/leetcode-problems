const arr = ["Hello", "World", "Baby", "zebra"]
const word = "World"

const beforeWord = (arr, word) => {
    const newArr = []
    for (let val of arr) {
        if (val[0] < word[0]) newArr.push(val)
    }
    return newArr
}

console.log(beforeWord(arr, word));