const faultyKeeb = (word) => {
    const splitWord = word.split("")
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    const check = splitWord.some(item => vowels.includes(item))
    if (check) {
        const reversedArr = splitWord.filter(item => 
            !vowels.includes(item))
                .reverse()
                .sort(() => 0.5 - Math.random())
                .join("")
        return reversedArr
    } else {
        return word
    }
}

console.log(faultyKeeb('hello world!'))
console.log(faultyKeeb('micaela'))
console.log(faultyKeeb('string'))
console.log(faultyKeeb('cry'))
// a list of word without vowels ahha: dry, gym, lymph, brr, cysts, fly

const faultyKeeb2 = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let arr = []
    let shuffleArr = []
    let notVowelArr = []
    let vowel = false
    
    //transforms the string into an array of characters and check if it includes a vowel or not
    for (let i = 0; i < word.length; i++) {
        arr.push(word[i])
        if (vowels.indexOf(word[i]) !== -1) {
            vowel = true
        } 
    }

    if (vowel) {
        for (let j = 0; j <= arr.length; j++) {
            if(vowels.indexOf(arr[j]) === -1) {
                shuffleArr.push(arr[j])
            }
        }
        for (let k = shuffleArr.length - 1; k >= 0; k--) {
            notVowelArr.push(shuffleArr[k])
        }
    } else {
        return word
    }

    return notVowelArr.join('')
}

console.log(faultyKeeb2('hello world!'))
console.log(faultyKeeb2('micaela'))
console.log(faultyKeeb2('string'))
console.log(faultyKeeb2('cry'))
