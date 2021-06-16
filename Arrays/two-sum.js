//https://leetcode.com/problems/two-sum/

const array = [1,3,7,9,2]
const target = 11

const resp = (array, target)=> {
    for (let i = 0; i < array.length; i++) {
        let need = target - array[i]
        for (let j = i+1; j < array.length; j++) {
            if (array[j] === need){
                return ([i,j])
            }
        }
    }

    return null
}

console.log(resp(array, target))