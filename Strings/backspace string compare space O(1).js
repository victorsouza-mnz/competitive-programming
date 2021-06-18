//https://leetcode.com/problems/backspace-string-compare/submissions/
let a = "bxj##tw"
let b = "bxj###tw"



const trap = (a,b) => {

    let pa = a.length-1
    let pb = b.length-1
    let conta = 0
    let contb = 0
    while (pa >= 0 || pb >=0) {
        console.log(pa, pb)
        if (a[pa] === '#') {
            conta++
            pa--
        } else if (a[pa] !== '#' && conta > 0 ) { 
            pa--
            conta--
        } else if (b[pb] === '#') {
            contb++
            pb--
        } else if (b[pb] !== '#' && contb > 0 ) { 
            pb--
            contb--
        } else if (a[pa] !== b[pb] && contb === 0 && conta === 0) {
            return false
        } else {
            pa--
            pb--
        }
    }
    return true
} 


console.log(trap(a,b))