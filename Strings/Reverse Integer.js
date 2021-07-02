//https://leetcode.com/problems/reverse-integer/


var reverse = function(x) {
    x = x.toString()
    let isNegative = false
    if (x[0] === "-"){
        isNegative = true
    }
    x = x.split("").reverse().join("")
    x = parseInt(x, 10)
    if (x < -(2**31) || x > (2**31) -1) return 0
    if (isNegative) {
        return -x
    }
    return x
    
    
};

reverse(-11)
