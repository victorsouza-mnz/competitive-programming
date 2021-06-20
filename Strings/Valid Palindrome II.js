let a = "A man, a plan, a canal: Panama"

const aux = (s, left , right) => {
    while (left < right ) {
        if (s[left] !== s[right]) return false
        left++
        right--
    }
    return true
}


const func = (s) => {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    let left = 0
    let right = s.length-1 
    

    while (right > left) {
        if (s[right] !== s[left]){
            return aux(s, left+1, right) || aux(s, left, right-1)
        }
        right--
        left++
    }
    return true
}

console.log(func(a))