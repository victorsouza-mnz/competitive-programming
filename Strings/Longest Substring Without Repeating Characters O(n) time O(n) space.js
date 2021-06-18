const string  = "au"


const func = () => {
    let p1 = 0 
    let p2 = 0
    const hash = {}
    let cont = 0
    let max_size = 0
    if (string.length === 1 ) return 1
    while (p2 < string.length){
        console.log(hash)
        if (hash[string[p2]] === undefined || hash[string[p2]] === 0) {
            hash[string[p2]] = 1
            p2++
            cont++
            if (cont > max_size) {max_size = cont}
        } else if (hash[string[p2]] > 0) {
            if (cont > max_size) {max_size = cont}
            cont--
            hash[string[p1]] -= 1
            p1++
        }
    }
    return max_size
}

console.log(func(string))