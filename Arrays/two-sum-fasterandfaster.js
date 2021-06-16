//https://leetcode.com/problems/two-sum/

const array = [2,7,11,15]
const target = 9

const resp = (array, target)=> {
    const hash = {}
    for (let i = 0; i < array.length; i++) {
        var pos = array[i]
        let need = target - array[i]
        if (hash[pos] !== undefined) return [hash[pos], i]
        hash[need] = i
        
    }
    

    return null
}

console.log(resp(array, target))