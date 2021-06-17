// https://leetcode.com/problems/trapping-rain-water/



height = [0,1,0,2,1,0,1,3,2,1,2,1]



const func = (height) => { 
    let total = 0
    for (let i = 0; i < height.length; i++) {
        let maxL = 0
        let maxR = 0

        for (let l = i+1; l < height.length; l++ ){
            if (height[l] > maxL) maxL = height[l]
        }

        for (let r = i-1; r > -1; r-- ) {
            if (height[r] > maxR) maxR = height[r]
        }

        const water = Math.min( maxL, maxR) - height[i]
        if (water > 0 ) total += water

    }
    return total
}

console.log(func(height))