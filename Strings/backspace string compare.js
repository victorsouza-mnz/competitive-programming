//https://leetcode.com/problems/backspace-string-compare/submissions/
let a = 'ab#z'
let b = 'az#z'

const trap = (a,b) => {
    let array1 = []
    let array2 = []
    for (let i = 0; i < a.length; i++){
        if (a[i] === '#'){ array1.pop()}
        else {array1.push(a[i])}
    }
    for (let i = 0; i < b.length; i++){
        if (b[i] === '#') array2.pop()
        else array2.push(b[i])
    }
    if (array1.length !== array2.length) return false
    for (let i = 0; i < b.length; i++){
        if (array1[i] !== array2[i]) return false
    }
    return true
} 


console.log(trap(a,b))
