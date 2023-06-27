// Write a function that takes an array of consecutive, increasing letters as input, and returns any missing letters in the array between the first and last letter.

const missingLetters = (arr) => {
    const first = arr[0].charCodeAt()
    const last = arr[arr.length - 1].charCodeAt()
    const letters = Array.from({ length: last - first + 1 }, (_, i) => String.fromCharCode(first + i)).filter(letter => !arr.includes(letter))
    if (letters.length === 0) {
        return `There is no missing letter between ${String.fromCharCode(first)} and ${String.fromCharCode(last)}`
    }
    return `The missing letters are the following: ${letters.join(', ')}`
}

console.log(missingLetters(['a', 'b', 'd', 'f']))
console.log(missingLetters(['a','b','c','d','f']))
console.log(missingLetters(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z']))
console.log(missingLetters(['b', 'f', 'g', 'i']))
console.log(missingLetters(['a', 'b']))
console.log(missingLetters(['a', 'z']))