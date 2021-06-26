//https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

const s = "())()((("



var minRemoveToMakeValid = function(s) {
    let stack = []
    for (let i = 0; i<s.length; i++) {
        if (s[i] === '('){
            stack.push(i)
        } else if (s[i] === ')') {
            if (stack.length === 0) {
                s = s.slice(0, i) + s.slice(i+1);
                i--
            } else {
                stack.pop()
            }
        }
    }


    for (let i = stack.length-1; i>=0; i--) { 
        if (s.length === 1 ) return ''
        s = s.substring(0, stack[i]) + s.substring(stack[i]+1, s.length);

    }
    
 
    return s
};

console.log({s: minRemoveToMakeValid(s)})