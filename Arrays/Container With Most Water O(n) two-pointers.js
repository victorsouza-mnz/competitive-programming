//https://leetcode.com/problems/container-with-most-water/

//11. Container With Most Water

const array = [4,8,1,2,3,9]


const func = (height) => {
    let max = 0
    let i = 0
    let j = height.length-1
    while (i < j) {
        const temp = Math.min(height[i], height[j]) * (j - i)
        if ( temp > max ) max = temp
        if (height[i] < height[j]){
            i++
        } else {
            j--
        }
    }
    return max
}

console.log(func(array))