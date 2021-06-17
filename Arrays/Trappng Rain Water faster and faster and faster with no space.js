//https://leetcode.com/problems/trapping-rain-water/

const height = [0,1,0,2,1,0,1,3,2,1,2,1]


const func = (height) => {
    let left = 0, right = height.length - 1, total = 0, maxL = 0, maxR = 0

    while (right > left){
        if (height[left] <= height[right]){
            height[left] >= maxL ? maxL = height[left] : total += maxL - height[left];
            left++
        } else {
            height[right] >= maxR ? maxR = height[right] : total += maxR - height[right];
            right--
        }
    }
    return total
}

console.log(func(height))