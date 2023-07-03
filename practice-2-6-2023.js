// Given an integer n, return true if it's a perfect square AND when reversed, is still a perfect square.

reversedSquares = (num) => {
    let sqrNum = Math.sqrt(num)
    let reversedSqrNum = num
        .toString()
        .split("")
        .reverse()
        .join("")
    const toNum = reversedSqrNum.length > 1 ? Math.sqrt(Number(reversedSqrNum)) : null

    if (Number.isInteger(sqrNum) && toNum === null) {
        return true
    } else if (Number.isInteger(sqrNum) && Number.isInteger(toNum)){
        return true
    }
    return false
}

console.log(reversedSquares(9))
console.log(reversedSquares(441))
console.log(reversedSquares(25))
console.log(reversedSquares(100))
console.log(reversedSquares(150))
console.log(reversedSquares(900))