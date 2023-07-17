//Given a string, separate it into groups of non-space equal characters, sorted.

const explodeString = (string) => {
    const arr = []
    const splitIt = string
        .split('')
        .filter(item => !item.includes(' '))
        .sort()
        .map((elem, index) => {
            return elem
        })
        
    return splitIt
}

console.log(explodeString('Ahh, abracadabra!'))