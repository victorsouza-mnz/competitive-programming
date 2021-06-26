//https://leetcode.com/problems/container-with-most-water/

//11. Container With Most Water


const array = [7,1,2,3,9]

const func = (array) => {
    let max = 0
    for (let i = 0; i < array.length; i++){
        for (let j = i+1; j < array.length; j++){
            let temp = Math.min(array[i], array[j]) * (j - i)
            if ( temp > max ) max = temp
        }
    }
    return max
}


console.log(func(array))



// essa solucao da time-limite exceed