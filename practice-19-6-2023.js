// Given some JSON data, calculate the maximun depth reached

depthJSON = (elem) => {
    if (Array.isArray(elem) || typeof elem === 'object') {
        return 1 + Math.max(0, ...Object.values(elem).map((item) => depthJSON(item)))
    } else {
        return 0
    }
}

console.log(depthJSON([12,23]))
console.log(depthJSON([{
    'name': 'Mica',
    'surname': 'Avigliano'
}, [{
    'age': 29,
    'more': {
        'music': 'everything',
        'color': 'purple',
        'food_type': 'asian'
    }
}], 'jeje', [1, 3]]))
console.log(depthJSON([{"a": []}, ["abc"]]))
console.log(depthJSON([]))
console.log(depthJSON(1))