//https://leetcode.com/problems/valid-parentheses/


let string = '))'


var isValid = function(s) {
    if (s.length === 0) return true 
    if (s.length % 2 !== 0) return false


    let stack = []

    for ( let i = 0; i < s.length; i++) { 
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i])
        } else {
            let temp = stack.pop()
            if (!temp) return false
            if (temp === '{' && s[i] !== '}') return false
            if (temp === '[' && s[i] !== ']') return false
            if (temp === '(' && s[i] !== ')') return false
        }
    }
    if (stack.length === 0) return true
    return false
};