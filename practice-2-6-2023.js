// Given an integer n, return true if it's a perfect square AND when reversed, is still a perfect square.

reversedSquares = (num) => {
    let sqrNum = Math.sqrt(num)
    let reversedSqrNum = num
        .toString()
        .split("")
        .reverse()
        .join("")
    const toNum = reversedSqrNum.length > 1 ? Math.sqrt(Number(reversedSqrNum)) : null

    if ((Number.isInteger(sqrNum) && toNum === null) || (Number.isInteger(sqrNum) && Number.isInteger(toNum))) {
        return true
    }

    if (!Number.isSafeInteger(num)) {
        return 'not an integer >:( try with a whole number from -9223372036854775808 to +9223372036854775807 o.o'
    }
    return false
}

console.log(reversedSquares(9))
console.log(reversedSquares(441))
console.log(reversedSquares(25))
console.log(reversedSquares(100))
console.log(reversedSquares(150))
console.log(reversedSquares(900))
console.log(reversedSquares(1.500))