//https://leetcode.com/problems/trapping-rain-water/

const height = [0,1,0,2,1,0,1,3,2,1,2,1]


const func = (height) => {
    const maxR = []
    const maxL = []
    let total = 0
    let maxAnt = 0 
    let temp = -1
    for (let i = 1; i <height.length; i++ ) {
        maxL[i] = Math.max(maxAnt, height[i-1])
        maxAnt = maxL[i]
    }
    maxAnt = 0 
    for (let j = height.length-2; j > 0; j-- ) {
        maxR[j] = Math.max(maxAnt, height[j+1])
        maxAnt = maxR[j]
    }

    for (let k = 1; k < height.length-1; k++ ) {
        temp = Math.min(maxL[k], maxR[k]) - height[k]
        if (temp > 0 ) total+=temp

    }
    return total
}

console.log (func(height))